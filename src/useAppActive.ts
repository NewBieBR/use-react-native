import {useAppState} from '@react-native-community/hooks';
import {useEffect, useRef} from 'react';
import {AppStateStatus} from 'react-native';

type AppInactiveCallback = (status: AppStateStatus) => void | undefined;

type AppActiveCallback = () => void | AppInactiveCallback;

export const useAppActive = (onAppActive: AppActiveCallback): void => {
  const currentAppState = useAppState();
  const onAppInactive = useRef<AppInactiveCallback | void>();

  useEffect(() => {
    if (currentAppState === 'active') {
      onAppInactive.current = onAppActive();
    } else if (onAppInactive.current) {
      onAppInactive.current(currentAppState);
    }
  }, [currentAppState]);
};

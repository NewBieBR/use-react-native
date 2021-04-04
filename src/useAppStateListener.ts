import {useEffect} from 'react';
import {AppState, AppStateEvent, AppStateStatus} from 'react-native';

export const useAppStateListener = (
  type: AppStateEvent,
  listener: (state: AppStateStatus) => void,
): void => {
  useEffect(() => {
    AppState.addEventListener(type, listener);

    return () => {
      AppState.removeEventListener(type, listener);
    };
  }, []);
};

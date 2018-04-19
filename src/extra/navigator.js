import {NavigationActions} from 'react-navigation';
export const resetToHome = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({routeName: 'Home'}),
    ],
  });
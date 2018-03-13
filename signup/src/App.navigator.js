/**
 * 
 */
import {
  StackNavigator,
} from 'react-navigation';

import SurveyScreen from './screens/SurveyScreen';
import AdminNavigator from './screens/Admin';

export default StackNavigator(
  {
    Survey: { screen: SurveyScreen },
    Admin: { screen: AdminNavigator },
  },
  {
    initialRouteName: 'Survey',
    mode: 'modal',
  }
);
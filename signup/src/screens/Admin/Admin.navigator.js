/**
 * 
 */
import {
  StackNavigator,
} from 'react-navigation';

import Admin from './Admin';
import SurveysNavigator from './Surveys';

export default StackNavigator(
  {
    Admin: { screen: Admin },
    Surveys: { screen: SurveysNavigator },
  },
  {
    initialRouteName: 'Admin',
    mode: 'card',
    headerMode: 'none',
  }
);
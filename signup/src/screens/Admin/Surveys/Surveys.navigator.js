/**
 * 
 */
import {
  StackNavigator,
} from 'react-navigation';

import Surveys from './Surveys';
import EditSurveyNavigator from './EditSurvey';

export default StackNavigator(
  {
    Surveys: { screen: Surveys },
    EditSurvey: { screen: EditSurveyNavigator },
  },
  {
    initialRouteName: 'Surveys',
    mode: 'modal',
    headerMode: 'none',
  }
);
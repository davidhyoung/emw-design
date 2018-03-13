/**
 * 
 */
import {
  StackNavigator,
} from 'react-navigation';

import EditSurvey from './EditSurvey';
import EditQuestion from './EditQuestion';

export default StackNavigator(
  {
    EditSurvey: { screen: EditSurvey },
    EditQuestion: { screen: EditQuestion },
  },
  {
    initialRouteName: 'EditSurvey',
    mode: 'card',
    headerMode: 'none',
  }
);
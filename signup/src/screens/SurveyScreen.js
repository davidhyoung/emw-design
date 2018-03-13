/**
 * 
 */
import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, ScrollView } from 'react-native';
// "@shoutem/ui": "^0.23.4",
import { 
  NavigationBar, 
  Text, 
  Icon, 
  View,
} from '@shoutem/ui';
// components
import Button from 'src/components/Button';
import Question from 'src/components/Question';
// stores
import surveyStore from 'src/stores/surveyStore';
import autobind from 'autobind-decorator';
// sample
import { sampleSurvey } from 'src/sample';

const title = 'Survey';

@observer
export default class SurveyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title,
    headerRight: (
      <Button onPress={() => navigation.navigate('Admin')}>
        <Icon name="settings" />
      </Button>
    ),
  });

  componentWillMount() {
    surveyStore.saveSurvey(sampleSurvey, true);
  }

  @autobind
  renderSurvey() {
    const { questions } = surveyStore.activeSurvey;
    return (
      <ScrollView style={s.container}>
        {questions.values().map(question => (
          <Question key={question.id} question={question} />
        ))}
      </ScrollView>
    )
  }

  render() {
    return surveyStore.activeSurvey ? this.renderSurvey() : (
      <View>
        <Text>No survey selected</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
})
/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import {
  DropDownMenu,
  Text,
} from '@shoutem/ui';

import Button from 'src/components/Button';
import Question from 'src/components/Question';

import questionStore from 'src/stores/questionStore';

@observer
export default class EditQuestion extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { question } = navigation.state.params;
    return ({
      title: question ? 'Edit Question' : 'New Question',
      headerLeft: (
        <Button onPress={() => navigation.goBack(null)}>
          <Text>Cancel</Text>
        </Button>
      ),
      headerRight: (
        <Button onPress={() => {
          questionStore.saveQuestion(question.id);
          navigation.goBack(null);
        }}>
          <Text>Save</Text>
        </Button>
      )
    })
  };

  componentWillMount() {
    const { question } = this.props.navigation.state.params;
    questionStore.setEditQuestion(question);
  }

  render() {
    const { navigation } = this.props;
    const { question } = navigation.state.params;

    const defaultType = questionStore.types.values()[0];
    const questionType = question.type && questionStore.types.get(question.type.id);

    return (
      <View style={s.container}>
        <DropDownMenu
          styleName="horizontal"
          options={questionStore.types.values()}
          selectedOption={questionType || defaultType}
          onOptionSelected={t => this.setState({ type: t })}
          titleProperty="title"
          valueProperty="id"
        />
        <Question question={question} edit />
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
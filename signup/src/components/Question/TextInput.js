/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import {
  Text,
  TextInput,
} from '@shoutem/ui';

import questionStore from 'src/stores/questionStore';

import QuestionTitle from './QuestionTitle';

@observer
class Editable extends React.Component {
  render() {
    const { editQuestion, questions } = questionStore;
    return (
      <View style={s.container}>
        <TextInput
          value={editQuestion.title}
          placeholder={'Question title'}
          onChangeText={title => questionStore.updateEditQuestion(editQuestion, { title })}
        />
        <View>
          <TextInput
            disabled
            placeholder="We would love to hear from you!"
            style={s.textInput}
          />
        </View>
      </View>
    )
  }
}

export default ({ edit, question }) => {
  return edit ? <Editable question={question} /> : (
    <View style={s.container}>
      <QuestionTitle label={question.title || 'Yes/No Question'} />
      <TextInput
        placeholder="We would love to hear from you!"
        style={s.textInput}
      />
    </View>
  )
}

const s = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  textInput: {
    margin: 10,
  }
};
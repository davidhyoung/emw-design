/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { View } from 'react-native';

import {
  TextInput,
} from '@shoutem/ui';

import CheckboxGroup from 'src/components/CheckboxGroup';

import questionStore from 'src/stores/questionStore';

import QuestionTitle from './QuestionTitle';

@observer
class Editable extends React.Component {
  render() {
    const { editQuestion } = questionStore;
    return (
      <View style={s.container}>
        <TextInput
          value={editQuestion.title}
          placeholder={'Question title'}
          onChangeText={title => questionStore.updateEditQuestion(editQuestion, { title })}
        />
        <CheckboxGroup options={editQuestion.responses} />
      </View>
    )
  }
}

export default ({ edit, question }) => {
  return edit ? <Editable question={question} /> : (
    <View style={s.container}>
      <QuestionTitle label={question.title || 'Question'} />
      <CheckboxGroup options={question.responses} />
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
};
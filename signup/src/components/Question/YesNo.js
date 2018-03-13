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

import CheckboxGroup from 'src/components/CheckboxGroup';
import RadioGroup from 'src/components/RadioGroup';
import RadioOption from 'src/components/RadioOption';

import questionStore from 'src/stores/questionStore';

import QuestionTitle from './QuestionTitle';

@observer
class Editable extends React.Component {
  state = {
    selected: 0,
  }

  render() {
    const { selected } = this.state;
    const { editQuestion, questions } = questionStore;

    // const question = questions.get(editId);

    return (
      <View style={s.container}>
        <TextInput
          value={editQuestion.title}
          placeholder={'Question title'}
          onChangeText={title => questionStore.updateEditQuestion(editQuestion, { title })}
        />
        <View>
          <RadioOption
            edit
            text={`Yes ${selected === 1 && '(default)'}`}
            active={selected === 1}
            onPress={() => this.setState({ selected: 1 })}
          />
          <RadioOption
            edit
            text={`No ${selected === 0 && '(default)'}`}
            active={selected === 0}
            onPress={() => this.setState({ selected: 0 })}
          />
        </View>
      </View>
    )
  }
}

export default ({ edit, question }) => {
  const options = question.responses || [
    { id: 0, text: 'No'},
    { id: 1, text: 'Yes' },
  ];
  return edit ? <Editable question={question} /> : (
    <View style={s.container}>
      <QuestionTitle label={question.title || 'Yes/No Question'} />
      <RadioGroup options={options} />
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
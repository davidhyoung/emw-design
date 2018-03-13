/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import {
  Text,
  View,
} from '@shoutem/ui';

import CheckboxGroup from 'src/components/CheckboxGroup';
import RadioGroup from 'src/components/RadioGroup';

import YesNo from './YesNo';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import TextInput from './TextInput';

const Title = ({ label }) => (
  <Text style={s.title}>{label}</Text>
);

export default class Question extends React.Component {
  renderByType = {
    'yes-no': (props) => <YesNo {...props} />,
    'single-select': (props) => <SingleSelect {...props} />,
    'multi-select': (props) => <MultiSelect {...props} />,
    'text-input': (props) => <TextInput {...props} />,
  };

  render() {
    const { question, edit } = this.props;
    const renderItem = this.renderByType[question.type] || (() => {
      console.log(`Dont know how to render a contentItem of type: ${question.type}`);
      return (
        <View>
          <Text>Oops! Unknown question type {question.type}</Text>
        </View>
      );
    });
    return renderItem({ question, edit });
  }
}

const s = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    margin: 10,
  }
};
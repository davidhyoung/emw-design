/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from '@shoutem/ui';
import RadioOption from './RadioOption';


export default class RadioGroup extends React.Component {
  state = {
    index: null,
  }

  @autobind
  selectOption(index) {
    this.setState({ index });
  }

  render() {
    const { options } = this.props;
    return (
      <View style={s.container}>
        {options.map(({ text, id }, index) => (
          <RadioOption
            key={id}
            text={text}
            active={index === this.state.index}
            onPress={() => this.selectOption(index)}
          />
        ))}
      </View>
    )
  }
}

const s = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
  }
};
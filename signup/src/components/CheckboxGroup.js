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

import { observer } from 'mobx-react';
import checkboxStore from 'src/stores/checkboxStore';

import CheckboxOption from './CheckboxOption';

@observer
export default class CheckboxGroup extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <View style={s.container}>
        {options.map(({ text, id }, index) => (
          <CheckboxOption
            key={id}
            text={text}
            active={checkboxStore.isSelected(index)}
            onPress={() => checkboxStore.selectOption(index)}
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
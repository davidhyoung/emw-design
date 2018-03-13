/**
 * 
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import autobind from 'autobind-decorator';

import { Button, Icon, Text } from '@shoutem/ui';

export default class CheckboxOption extends React.Component {
  render() {
    const { text, active, onPress } = this.props;
    return (
      <Button styleName="full-width" style={s.container} onPress={onPress}>
        <Icon name={active ? 'checkbox-on' : 'checkbox-off'} />
        <Text style={s.label}>{text}</Text>
      </Button>
    )
  }
}

const s = {
  container: {
    justifyContent: 'flex-start'
  },
  label: {
    marginLeft: 5,
  },
};
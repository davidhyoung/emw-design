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

import { Button, Icon, Text, TextInput, TouchableOpacity } from '@shoutem/ui';

export default class RadioOption extends React.Component {
  @autobind
  renderEditable() {
    const { text, active, onPress } = this.props;
    return (
      <View style={s.container}>
        <Button onPress={onPress}
          style={{ flexShrink: 1 }}>
          <Icon name={active ? 'radiobutton-on' : 'radiobutton-off'} />
        </Button>
        <TextInput
          value={text}
          autoGrow
          onChangeText={this.props.onChangeText}
          selectionColor="green"
          style={{ flex: 1 }}
          editable={false}
        />
      </View>
    )
  }

  render() {
    const { edit, text, active, onPress } = this.props;
    return edit ? this.renderEditable() : (
      <Button styleName="full-width" style={s.container} onPress={onPress}>
        <Icon name={active ? 'radiobutton-on' : 'radiobutton-off'} />
        <Text style={s.label}>{text}</Text>
      </Button>
    )
  }
}

const s = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0,
  },
  label: {
    marginLeft: 5,
  },
};
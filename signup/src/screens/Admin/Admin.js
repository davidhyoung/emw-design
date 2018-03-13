/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import { 
  Text,
  Divider,
  Icon,
  ListView,
  Row,
  Title,
  TouchableOpacity,
} from '@shoutem/ui';
// components
import Button from 'src/components/Button';
import Question from 'src/components/Question';
// stores
import questionStore from 'src/stores/questionStore';

/**
 * List view of questions
 * Add button in navbar 
 * Swipe row to delete
 * Tap row to go to edit question view
 */

const data = [
  {
    name: 'Edit surveys',
    target: 'Surveys'
  }
];

@observer
export default class Admin extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Admin',
    // header: null,
    headerLeft: (
      <Button onPress={() => navigation.goBack(null)}>
        <Text>Back</Text>
      </Button>
    ),
  });

  @autobind
  renderRow({ name, target }) {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(target)}>
          <Row>
            <Title>{name}</Title>
            <Icon name="right-arrow" />
          </Row>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    )
  }

  render() {
    return (
      <View style={s.container}>
        <ListView
          data={data}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
})
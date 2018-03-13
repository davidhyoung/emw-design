/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import { 
  Divider,
  Icon,
  ListView,
  Row,
  Text,
  Title,
  TouchableOpacity,
} from '@shoutem/ui';

import Button from 'src/components/Button';
import surveyStore, { newSurvey } from 'src/stores/surveyStore';

@observer
export default class Surveys extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Surveys',
    headerLeft: (
      <Button onPress={() => navigation.goBack(null)}>
        <Icon name="left-arrow" />
      </Button>
    ),
    headerRight: (
      <Button onPress={() => navigation.navigate('EditSurvey', { survey: newSurvey() })}>
        <Icon name="plus-button" />
      </Button>
    )
  });

  @autobind
  renderRow(survey) {
    const { navigation } = this.props;
    return survey && (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditSurvey', { survey })}>
          <Row>
            <Title>{survey.title}</Title>
          </Row>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    )
  }

  render() {
    const surveys = surveyStore.surveys.values();
    return (
      <View style={s.container}>
        {surveys.length > 0 
          ? <ListView data={surveys} renderRow={this.renderRow} />
          : <View style={s.empty}><Text>No Surveys</Text></View>
        }
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
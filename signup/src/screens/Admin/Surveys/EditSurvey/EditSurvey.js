/**
 * 
 */
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import {
  Divider,
  DropDownMenu,
  Icon,
  ListView,
  Row,
  Text,
  TextInput,
  Title,
  TouchableOpacity,
} from '@shoutem/ui';

import Button from 'src/components/Button';

import questionStore, { newQuestion } from 'src/stores/questionStore';
import surveyStore from 'src/stores/surveyStore';

@observer
export default class EditSurvey extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { survey } = navigation.state.params;
    return ({
      title: survey ? 'Edit Survey' : 'New Survey',
      headerLeft: (
        <Button onPress={() => navigation.goBack(null)}>
          <Text>Cancel</Text>
        </Button>
      ),
      headerRight: (
        <Button onPress={() => {
          surveyStore.saveSurvey(survey);
          navigation.goBack(null);
        }}>
          <Text>Save</Text>
        </Button>
      )
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      ...props.navigation.state.params.survey,
    }
  }

  @autobind
  onChangeTitle(text) {
    this.setState({ title: text });
  }

  @autobind
  renderNewRow() {
    const { navigation } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditQuestion', { question: newQuestion() })}>
          <Row>
            <Title>New question...</Title>
            <Icon name="plus-button" />
          </Row>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    )
  }

  @autobind
  renderQuestionRow(question) {
    const { navigation } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditQuestion', { question })}>
          <Row>
            <Title>{question ? question.title : 'No question? weird'}</Title>
          </Row>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    )
  }

  @autobind
  renderRow(question) {
    return question.type === 'new' 
      ? this.renderNewRow() 
      : this.renderQuestionRow(question);
  }

  render() {
    const { title, questions } = this.state;

    return (
      <View style={s.container}>
        <TextInput
          defaultValue={title}
          onChangeText={this.onChangeTitle}
        />
        {questions.size > 0 && (
          <DropDownMenu
            styleName="horizontal"
            options={questions.values()}
            selectedOption={questions.values()[0]}
            onOptionSelected={t => this.setState({ type: t })}
            titleProperty="title"
            valueProperty="id"
          />
        )}
        <ListView 
          data={[
            ...questions.values(),
            { type: 'new' },
          ]}
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
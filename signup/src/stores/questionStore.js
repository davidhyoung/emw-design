/**
 * 
 */
import { action, observable } from 'mobx';
import autobind from 'autobind-decorator';
import uuid from 'react-native-uuid';

import { sampleQuestions } from 'src/sample';

const defaultTypes = [
  { id: uuid.v4(), title: 'Yes/No' },
  { id: uuid.v4(), title: 'Single Select' },
  { id: uuid.v4(), title: 'Multi Select' },
  { id: uuid.v4(), title: 'Text Input' },
];

@autobind
class QuestionStore {
  @observable questions = observable.map({});
  @observable types = observable.map({});
  @observable editQuestion = null;

  constructor() {
    this.addTypes();
    this.addSampleQuestions();
  }

  addTypes() {
    defaultTypes.forEach(type => this.types.set(type.id, type));
  }

  addSampleQuestions() {
    this.questions = sampleQuestions;
  }

  @action
  saveQuestion(id) {
    this.questions.set(id, this.editQuestion);
  }

  @action
  deleteQuestion(question) {
    this.questions.delete(question.id);
  }

  @action
  setEditQuestion(question) {
    this.editQuestion = question;
  }

  @action
  updateEditQuestion(question, params) {
    this.editQuestion = {
      ...question,
      ...params,
    }
  }

  @action
  cancelEdit() {
    this.editQuestion = null;
  }
}

export function newQuestion(params) {
  return ({
    id: uuid.v1(),
    title: 'New question',
    responses: [],
    ...params,
  });
}

export default new QuestionStore();
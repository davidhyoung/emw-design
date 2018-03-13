/**
 * 
 */
import { observable } from 'mobx';
import uuid from 'react-native-uuid';
import { newSurvey } from 'src/stores/surveyStore';

const id = () => uuid.v4();

const response = text => ({
  text,
  id: id(),
});

export const yesNo = {
  id: id(),
  type: 'yes-no',
  title: 'Do you like this thing?',
};

export const singleSelect = {
  id: id(),
  type: 'single-select',
  title: 'Which of these things do you like best?',
  responses: [
    response('The big one'),
    response('The shiny one'),
    response('The soft one'),
  ]
};

export const multiSelect = {
  id: id(),
  type: 'multi-select',
  title: 'What would you like to eat?',
  responses: [
    response('Fruit'),
    response('Vegetable'),
    response('Meat'),
    response('Cake'),
  ]
};

export const textInput = {
  id: id(),
  type: 'text-input',
  title: 'What do you like about this app?',
};

export const questions = [
  yesNo,
  singleSelect,
  multiSelect,
  textInput,
];

export const sampleQuestions = observable.map({});

questions.map(q => sampleQuestions.set(q.id, q));

export const sampleSurvey = newSurvey({
  title: 'Sample survey',
  questions: sampleQuestions,
});
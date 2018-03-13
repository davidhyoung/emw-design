/**
 * 
 */
import { observable, action, autorun, computed } from 'mobx';
import autobind from 'autobind-decorator';
import { default as newUuid } from 'uuid';

@autobind
class SurveyStore {
  @observable surveys = observable.map({});
  @observable activeSurvey = null;

  constructor() {
    this.loadUserData();
    autorun(() => this.saveUserData());
  }

  loadUserData() {
    // const userData = localStorage.getValue('userData') || {
    //   surveys: {},
    // };
    this.surveys = observable.map({});
    // console.log('loadUserData', userData);
  }

  saveUserData() {
    console.log('saveUserData');
    // localStorage.setValue('userData', {
    //   surveys: this.surveys.toJS(),
    // });
  }

  _getSurveyOrNew(id) {
    return this.surveys.get(id) || newSurvey();
  }

  @action
  setActiveSurvey(id) {
    this.activeSurvey = this.surveys.get(id);
  }
  
  @action
  saveSurvey(survey, setActive) {
    this.surveys.set(survey.id, survey);
    if (setActive) {
      this.setActiveSurvey(survey.id)
    }
    console.log('survey saved!', survey, this.surveys);
  }
}

export function newSurvey(params) {
  return ({
    id: newUuid.v1(),
    title: 'New survey',
    questions: [],
    ...params,
  });
};

export default new SurveyStore();
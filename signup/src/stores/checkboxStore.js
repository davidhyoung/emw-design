/**
 * 
 */
import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';
import uuid from 'uuid';

@autobind
class CheckboxStore {
  @observable selected = [];

  @action
  selectOption(index) {
    const arrayIndex = this.selected.indexOf(index);
    if (arrayIndex === -1) {
      this.selected.push(index);
    } else {
      this.selected.splice(arrayIndex, 1);
    }
  }

  isSelected(index) {
    return this.selected.indexOf(index) !== -1;
  }
}

export default new CheckboxStore();
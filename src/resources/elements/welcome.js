import {bindable} from 'aurelia-framework';

export class Welcome {
  @bindable value;

  constructor() {
    this.message = 'Welcome Page';
  }

  valueChanged(newValue, oldValue) {

  }
}

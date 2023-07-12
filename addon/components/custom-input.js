import Component from '@ember/component';
import layout from '../templates/components/custom-input';

export default Component.extend({
  layout,
  classNames: "custom-input",
  actions:{
    onInput(ev){
      this.onInput(ev.target.value);
    }
  }
});

import Ember from 'ember';
import layout from './template';

const { Component, RSVP } = Ember;

export default Component.extend({
  layout,

  actions: {
    save() {
      return this._fakeRequest();
    }
  },

  _fakeRequest() {
    return new RSVP.Promise((resolve) => {
      setTimeout(() => { resolve('OK'); }, 1500);
    });
  }
});

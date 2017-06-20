import Ember from 'ember';
import layout from './template';

const { Component, get, set } = Ember;

export default Component.extend({
  layout,

  totalPages: 10,
  currentPage: 1,

  actions: {
    nextPage() {
      this.incrementProperty('currentPage');
    },
    previousPage() {
      this.decrementProperty('currentPage');
    },
    goToPage(page) {
      if (page <= get(this, 'totalPages')) {
        set(this, 'currentPage', page);
      }
    }
  }

});

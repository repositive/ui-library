import Ember from 'ember';
import layout from './template';

const { Component, computed, set } = Ember;

export default Component.extend({
  layout,

  activeTab: 'Tab One',

  tabOneActive: computed.equal('activeTab', 'Tab One'),
  tabTwoActive: computed.not('tabOneActive'),

  actions: {
    setActiveTab(tab) { set(this, 'activeTab', tab); }
  }
});

import Ember from 'ember';
import layout from 'ui-library/components/r-avatar/template';
import { getProperty } from 'ui-library/utils/set-options';

const { Component, get, set, $ } = Ember;

export default Component.extend({
  layout,
  tagName: 'img',
  classNames: ['circle'],

  attributeBindings: ['src'],

  classNameBindings: [
    // sizes
    'small:icon-small',
    'medium:icon-medium',
    'large:icon-large',
    'x-large:icon-x-large'
  ],

  attributes: {
    size: ['small', 'medium', 'large', 'x-large']
  },

  defaults: {
    size: 'medium'
  },

  init() {
    this._super(...arguments);

    // sets appropriate properties to true for classNameBindings
    const attributes = get(this, 'attributes');
    const defaults = get(this, 'defaults');

    Object.keys(attributes).forEach(attribute => {
      const property = getProperty(
        attributes[attribute],
        defaults[attribute],
        get(this, attribute)
      )

      set(this, property, true)
    });
  },

  didRender() {
    this._super(...arguments);
    $(".circle").on("error", function() {
      $(this).attr('src', '../assets/images/avatar/dog.png');
    })
  },
});

import Ember from 'ember';
import layout from 'ui-library/components/r-avatar/template';
import { getAttributeValue } from 'ui-library/utils/get-attribute-value';

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

  init() {
    this._super(...arguments);
    this.attributes = {
      size: ['small', 'medium', 'large', 'x-large']
    };
    this.defaults = { size: 'medium' };

    // sets appropriate properties to true for classNameBindings
    const attributes = get(this, 'attributes');
    const defaults = get(this, 'defaults');

    Object.keys(attributes).forEach(attribute => {
      const property = getAttributeValue(
        attributes[attribute],
        defaults[attribute],
        get(this, attribute)
      );

      set(this, property, true);
    });
  },

  didRender() {
    this._super(...arguments);
    $(".circle").on("error", function() {
      $(this).attr('src', '../assets/images/avatar/dog.png');
    })
  }
});

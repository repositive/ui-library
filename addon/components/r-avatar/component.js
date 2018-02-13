import Ember from 'ember';
import layout from 'ui-library/components/r-avatar/template';
import { createAttributesObject } from 'ui-library/utils/create-attributes-object';

const { Component, get, setProperties, $ } = Ember;

export default Component.extend({
  layout,
  tagName: 'img',
  classNames: ['circle'],
  fallbackSrc: '/assets/images/avatar/dog.png',

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
    this.allowedAttributes = {
      size: ['small', 'medium', 'large', 'x-large']
    };
    this.defaults = { size: 'medium' };

    const allowedAttributes = get(this, 'allowedAttributes');
    const defaults = get(this, 'defaults');
    const suppliedAttrs = get(this, 'attrs');

    const attrObj = createAttributesObject(allowedAttributes, defaults, suppliedAttrs);
    setProperties(this, attrObj);
  },

  didRender() {
    this._super(...arguments);
    const that = this;
    $(".circle").on("error", function() {
      $(this).attr('src', get(that, 'fallbackSrc'));
    })
  }
});

import Ember from 'ember';
import { set } from '@ember/object';
import layout from 'ui-library/components/r-avatar/template';
import { createAttributesObject } from 'ui-library/utils/create-attributes-object';

const { Component, get, setProperties, $ } = Ember;

export default Component.extend({
  layout,
  tagName: 'img',
  classNames: ['circle'],
  fallbackSrc: '/assets/images/avatar/default-pic.png',
  sizeOverride: null, // Numeric value for avatar width in px
  attributeBindings: ['src', 'style'],

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
    const sizeOverride = get(this, 'sizeOverride');

    const attrObj = createAttributesObject(allowedAttributes, defaults, suppliedAttrs);
    const attrsToSet = sizeOverride ? Object.assign({style: `width: ${sizeOverride}px;`}, attrObj) : attrObj;
    setProperties(this, attrsToSet);
  },

  didRender() {
    this._super(...arguments);
    const that = this;

    if (!get(this, 'src')) {
      set(this, 'src', get(this, 'fallbackSrc'));
    }

    $(".circle").on("error", function() {
      $(this).attr('src', get(that, 'fallbackSrc'));
    })
  }
});

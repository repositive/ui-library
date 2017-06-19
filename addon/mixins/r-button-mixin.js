import Ember from 'ember';
import { createAttributesObject } from 'ui-library/utils/create-attributes-object';

const { Mixin, get, setProperties } = Ember;

export default Mixin.create({
  classNames: ['r-btn'],
  classNameBindings: [
    // types
    'primary:r-btn-primary',
    'secondary:r-btn-secondary',
    'cancel:r-btn-cancel',

    // states
    'loading:r-btn-loading',

    // sizes
    'big:r-btn-large',
    'small:r-btn-small'
  ],

  attributes: {
    variant: ['primary', 'secondary', 'cancel'],
    size: ['small', 'big']
  },

  defaults: {
    variant: 'secondary',
    size: 'small'
  },

  init() {
    this._super(...arguments);
    this.allowedAttributes = {
      variant: ['primary', 'secondary', 'cancel'],
      size: ['small', 'big']
    };
    this.defaults = {
      variant: 'secondary',
      size: 'small'
    };

    const allowedAttributes = get(this, 'allowedAttributes');
    const defaults = get(this, 'defaults');
    const suppliedAttrs = get(this, 'attrs');

    const attrObj = createAttributesObject(allowedAttributes, defaults, suppliedAttrs);
    setProperties(this, attrObj);
  }
});

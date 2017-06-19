import Ember from 'ember';
import { getAttributeValue } from 'ui-library/utils/get-attribute-value';

const { Mixin, get, setProperties, getProperties } = Ember;

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
    // sets appropriate properties to true for classNameBindings
    const allowedAttributes = get(this, 'allowedAttributes');
    const defaults = get(this, 'defaults');
    const suppliedAttrs = get(this, 'attrs');

    this._setupAttributes(allowedAttributes, defaults, suppliedAttrs);
  },

  _setupAttributes(allowedAttributes, defaults, suppliedAttrs) {
    const attrObj = this._createAttributesObject(allowedAttributes, defaults, suppliedAttrs);
    setProperties(this, attrObj);
  },

  _createAttributesObject(allowedAttributes, defaults, suppliedAttrs) {
    const dataObj = {};

    //suppliedAttrs can inlude attrs such as 'label' which are not 'allowedAttributes'
    const validSuppliedAttrKeys = Object.keys(suppliedAttrs)
      .filter(attr => Object.keys(allowedAttributes).indexOf(attr) > -1);
    const validSuppliedAttrs = getProperties(suppliedAttrs, validSuppliedAttrKeys);

    Object.keys(allowedAttributes).map(attribute => {
      const property = getAttributeValue(
        allowedAttributes[attribute],
        defaults[attribute],
        get(validSuppliedAttrs, attribute)
      );
      dataObj[property] = true;
    });
    return dataObj;
  }
});

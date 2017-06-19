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

    const allowedAttributes = get(this, 'allowedAttributes');
    const defaults = get(this, 'defaults');
    const suppliedAttrs = get(this, 'attrs');

    const attrObj = this._createAttributesObject(allowedAttributes, defaults, suppliedAttrs);
    setProperties(this, attrObj);
  },

  /**
  * @desc creates an object used to safely set attributes
  * @param {Object} allowedAttributes - valid attribute values
  * @param {Object} defaults - fallback attributes if valid attrs not provided
  * @param {Object} suppliedAttrs - the attributes passed to the component
  * @returns {Object} Object of attribute keys with true value
  */
  _createAttributesObject(allowedAttributes, defaults, suppliedAttrs = {}) {
    const dataObj = {};

    //Filter suppliedAttrs to just valid ones. E.g. 'label' is not valid
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

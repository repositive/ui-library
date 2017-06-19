import Ember from 'ember';
import { getAttributeValue } from 'ui-library/utils/get-attribute-value';

const { getProperties, get } = Ember;

/**
* @desc creates an object used to safely set attributes
* @param {Object} allowedAttributes - valid attribute values
* @param {Object} defaults - fallback attributes if valid attrs not provided
* @param {Object} suppliedAttrs - the attributes passed to the component
* @returns {Object} Object of attribute keys with true value
*/
export function createAttributesObject(allowedAttributes, defaults, suppliedAttrs = {}) {
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

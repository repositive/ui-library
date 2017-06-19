/**
* @desc returns boolean - if selected attribute value is valid
* @param {Array} validAttrValues
* @param {String} selectedValue
* @returns {Boolean} property to set to true on component
*/

const isValidValue = function(validAttrValues, selectedValue) {
  return validAttrValues.indexOf(selectedValue) > -1;
}

/**
* @desc returns property to set to true for classNameBinding
* @param {Array} validAttrValues
* @param {String} defaultValue
* @param {String} selectedValue
* @returns {String} property to set to true on component
*/

export function getAttributeValue(validAttrValues, defaultValue, selectedValue) {
  return isValidValue(validAttrValues, selectedValue) ? selectedValue : defaultValue;
}

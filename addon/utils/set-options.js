/**
* @desc returns boolean - if selected attribute option is valid
* @param {Array} validOptions
* @param {String} selectedOption
* @returns {Boolean} property to set to true on component
*/

const isValidOption = function(validOptions, selectedOption) {
  return validOptions.indexOf(selectedOption) > -1;
}

/**
* @desc returns property to set to true for classNameBinding
* @param {Array} attributeOptions
* @param {String} defaultOption
* @param {String} selectedOption
* @returns {String} property to set to true on component
*/

export function getProperty(attributeOptions, defaultOption, selectedOption) {
  return isValidOption(attributeOptions, selectedOption) ? selectedOption : defaultOption;
}

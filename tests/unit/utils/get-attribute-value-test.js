import { expect } from 'chai';
import { describe, it } from 'mocha';
import { getAttributeValue } from 'ui-library/utils/get-attribute-value';

describe('Unit | Util | getAttributeValue', function() {
  const validAttrValues = ['bananas', 'oranges', 'grapes', 'apples'];
  const defaultValue = 'oranges';

  it('should return selectedValue if valid', function() {
    const selectedValue = 'grapes';
    expect(getAttributeValue(validAttrValues, defaultValue, selectedValue)).to.eql('grapes');
  });

  it('should return defaultValue if selected is invalid', function() {
    const selectedValue = 'onions';
    expect(getAttributeValue(validAttrValues, defaultValue, selectedValue)).to.eql('oranges');
  });
});

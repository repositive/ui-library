import { expect } from 'chai';
import { describe, it } from 'mocha';

import { createAttributesObject } from 'ui-library/utils/create-attributes-object';

describe('Unit | Utils | createAttributesObject', function() {
  const allowedAttributes = {
    size: ['small', 'medium', 'large', 'x-large'],
    variant: ['primary', 'secondary'],
    color: ['green', 'red', 'yellow']
  };
  const defaults = {
    size: 'medium',
    variant: 'secondary',
    color: 'green'
  };

  it('should return an object with only true values', function() {
    const suppliedAttrs = {
      variant: "primary",
      size: "medium",
      color: "red"
    };

    const dataObj = createAttributesObject(allowedAttributes, defaults, suppliedAttrs);
    Object.keys(dataObj).forEach(key => {
      expect(dataObj[key]).to.be.true;
    });
  });

  it('should return an object with correct keys', function() {
    const suppliedAttrs = {
      variant: "primary",
      size: "medium",
      color: "red"
    };

    expect(createAttributesObject(
      allowedAttributes,
      defaults,
      suppliedAttrs
    )).to.have.all.keys('primary', 'medium', 'red');
  });

  it('should return default values where supplied values are invalid', function() {
    const suppliedAttrs = {
      variant: 'tertiary',
      color: 'blue',
      size: 'gigantic'
    };

    expect(createAttributesObject(
      allowedAttributes,
      defaults,
      suppliedAttrs
    )).to.have.all.keys('secondary', 'medium', 'green');
  });

  it('should filter out invalid attributes', function() {
    const suppliedAttrs = {
      color: 'red',
      fruit: "banana",
      veg: 'onion',
      cereal: "Cheerios"
    };

    expect(createAttributesObject(
      allowedAttributes,
      defaults,
      suppliedAttrs
    )).to.have.all.keys('red', 'secondary', 'medium');
  });
});

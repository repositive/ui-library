import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import Ember from 'ember';

const { get } = Ember;

describe('Unit | Component | r-avatar', function() {
  setupComponentTest('r-avatar', {
    unit: true
  });

  let component;

  beforeEach(function () {
    component = this.subject();
  });

  describe('properties', function () {
    it('should have correct tag name', function () {
      expect(get(component, 'tagName')).to.be.eql('img');
    });

    it('should have correct classNameBindings set', function () {
      expect(get(component, 'classNameBindings')).to.be.eql([
        // sizes
        'small:icon-small',
        'medium:icon-medium',
        'large:icon-large',
        'x-large:icon-x-large'
      ]);
    });

    it('should have correct attributes set', function () {
      expect(get(component, 'allowedAttributes')).to.be.eql({
        size: ['small', 'medium', 'large', 'x-large']
      });
    });

    it('should have correct defaults set', function () {
      expect(get(component, 'defaults')).to.be.eql({
        size: 'medium'
      });
    });
  });
});

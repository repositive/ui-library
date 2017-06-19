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

  // describe('methods', function () {
  //   describe('init', function () {
  //     const method = this.title;
  //
  //     it('should call _setOptionFlag for each key in options property', function () {
  //       set(component, '_setOptionFlag', sinon.spy());
  //
  //       component[method]();
  //
  //       Object.keys(get(component, 'options')).forEach(key => {
  //         expect(get(component, '_setOptionFlag').calledWith(key)).to.be.equal(true);
  //       });
  //     });
  //   });
  //
  //   describe('_setOptionFlag', function () {
  //     const method = this.title;
  //     const flagType = 'size';
  //     const flagName = 'large';
  //
  //     it('should set given flagName', function () {
  //       component.setProperties({
  //         _isValidFlagName: sinon.stub().returns(true),
  //         [flagType]: flagName
  //       });
  //
  //       component[method](flagType);
  //
  //       expect(get(component, flagName)).to.be.equal(true);
  //     });
  //
  //     it('should set default flagName', function () {
  //       component.setProperties({
  //         _isValidFlagName: sinon.stub().returns(false),
  //         [flagType]: flagName
  //       });
  //
  //       component[method](flagType);
  //
  //       expect(get(component, get(component, `defaults.${flagType}`))).to.be.equal(true);
  //     })
  //   });
  //
  //   describe('_isValidFlagName', function () {
  //     const method = this.title;
  //
  //     it('should return true', function () {
  //       expect(component[method]('size', 'large')).to.be.equal(true);
  //     });
  //
  //     it('should return false', function () {
  //       expect(component[method]('size', 'foo-bar')).to.be.equal(false);
  //     });
  //   });
  //});
});

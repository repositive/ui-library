import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Ember from 'ember';
import sinon from 'sinon';
import RButtonMixin from 'ui-library/mixins/r-button-mixin';

const { get } = Ember;

describe('Unit | Mixin | r-button-mixin', function() {
  let subject;

  beforeEach(function () {
    const RButtonMixinObject = Ember.Object.extend(RButtonMixin, {
      _super: sinon.spy()
    });

    subject = RButtonMixinObject.create();
  });

  describe('properties', function () {
    it('should have correct classNames set', function () {
      expect(get(subject, 'classNames')).to.be.eql(['r-btn']);
    });

    it('should have correct classNameBindings set', function () {
      expect(get(subject, 'classNameBindings')).to.be.eql([
        // types
        'primary:r-btn-primary',
        'secondary:r-btn-secondary',
        'cancel:r-btn-cancel',

        // states
        'loading:r-btn-loading',

        // sizes
        'big:r-btn-large',
        'small:r-btn-small'
      ]);
    });

    it('should have correct attributes set', function () {
      expect(get(subject, 'allowedAttributes')).to.be.eql({
        variant: ['primary', 'secondary', 'cancel'],
        size: ['small', 'big']
      });
    });

    it('should have correct defaults set', function () {
      expect(get(subject, 'defaults')).to.be.eql({
        variant: 'secondary',
        size: 'small'
      });
    });
  });
});

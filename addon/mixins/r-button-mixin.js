import Ember from 'ember';
import { getAttributeValue } from 'ui-library/utils/get-attribute-value';

const { Mixin, get, set } = Ember;

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

    // sets appropriate properties to true for classNameBindings
    const attributes = get(this, 'attributes');
    const defaults = get(this, 'defaults');
    debugger;
    Object.keys(attributes).forEach(attribute => {
      const property = getAttributeValue(
        attributes[attribute],
        defaults[attribute],
        get(this, attribute)
      );
      set(this, property, true);
    });
  }
});

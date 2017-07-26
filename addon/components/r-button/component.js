import Ember from 'ember';
import ButtonMixin from 'ui-library/mixins/r-button-mixin';
import layout from 'ui-library/components/r-button/template';

const { Component, get } = Ember;

export default Component.extend(ButtonMixin, {
  layout,
  layoutName: 'components/r-button',
  tagName: 'button',
  attributeBindings: ['disabled', 'variant', 'type'],
  type: 'button', // set default button type to avoid accidental fro submit on click

  click() {
    const clickHandler = get(this, 'clickHandler');

    if (clickHandler) { clickHandler(); }
  }
});

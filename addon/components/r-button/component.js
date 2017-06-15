import Ember from 'ember';
import ButtonMixin from 'repositive/mixins/rui/r-button-mixin';
import layout from 'ui-library/components/r-button/template';

const { Component, get } = Ember;

export default Component.extend(ButtonMixin, {
  layout,
  layoutName: 'components/r-button',
  tagName: 'button',
  attributeBindings: ['disabled', 'variant'],
  type: 'button', // set default button type to avoid accidental fro submit on click

  click() {
    const clickHandler = get(this, 'clickHandler');

    if (clickHandler) { clickHandler(); }
  }
});

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | r button', function() {
  setupComponentTest('r-button', {
    integration: true
  });

  it('renders with a label', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#r-button}}
    //     template content
    //   {{/r-button}}
    // `);

    this.render(hbs `{{r-button label="There is some text here"}}`);
    expect(this.$()).to.have.length(1);
    expect(this.$().text().trim()).to.equal('There is some text here');
  });

  it('renders as a block', function() {
    this.render(hbs `
      {{#r-button}}
        There is some text here
      {{/r-button}}
    `)
    expect(this.$().text().trim()).to.equal('There is some text here');
  });
});

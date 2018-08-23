import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('doctors-list/patient/form', 'Integration | Component | doctors list/patient/form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{doctors-list/patient/form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#doctors-list/patient/form}}
      template block text
    {{/doctors-list/patient/form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

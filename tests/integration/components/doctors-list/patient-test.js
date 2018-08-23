import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('doctors-list/patient', 'Integration | Component | doctors list/patient', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{doctors-list/patient}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#doctors-list/patient}}
      template block text
    {{/doctors-list/patient}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

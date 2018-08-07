import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('doctor-edit/form', 'Integration | Component | doctor edit/form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{doctor-edit/form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#doctor-edit/form}}
      template block text
    {{/doctor-edit/form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { setupTest } from 'ember-data-seralizer/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | reddit', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('reddit', {});
    assert.ok(model, 'model exists');
  });
});

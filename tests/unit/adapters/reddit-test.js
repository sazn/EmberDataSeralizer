import { setupTest } from 'ember-data-seralizer/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | reddit', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:reddit');
    assert.ok(adapter, 'adapter exists');
  });
});

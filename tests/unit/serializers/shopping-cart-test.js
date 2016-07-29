import { moduleForModel, test } from 'ember-qunit';

moduleForModel('shopping-cart', 'Unit | Serializer | shopping cart', {
  // Specify the other units that are required for this test.
  needs: ['serializer:shopping-cart']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

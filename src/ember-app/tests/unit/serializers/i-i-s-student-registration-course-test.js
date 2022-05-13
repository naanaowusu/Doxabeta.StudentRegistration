import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-student-registration-course', 'Unit | Serializer | i-i-s-student-registration-course', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-student-registration-course',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-student-registration-t-course-type',
    'transform:i-i-s-student-registration-t-gender',

    'model:i-i-s-student-registration-course',
    'model:i-i-s-student-registration-registration',
    'model:i-i-s-student-registration-student',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

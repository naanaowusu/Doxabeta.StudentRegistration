import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  surname: DS.attr('string'),
  name: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('i-i-s-student-registration-t-gender')
});

export let ValidationRules = {
  surname: {
    descriptionKey: 'models.i-i-s-student-registration-student.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-student-registration-student.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  age: {
    descriptionKey: 'models.i-i-s-student-registration-student.validations.age.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  gender: {
    descriptionKey: 'models.i-i-s-student-registration-student.validations.gender.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('StudentE', 'i-i-s-student-registration-student', {
    surname: attr('Surname', { index: 0 }),
    name: attr('Name', { index: 1 }),
    age: attr('Age', { index: 2 }),
    gender: attr('Gender', { index: 3 })
  });

  modelClass.defineProjection('StudentL', 'i-i-s-student-registration-student', {
    surname: attr('Surname', { index: 0 }),
    name: attr('Name', { index: 1 }),
    age: attr('Age', { index: 2 }),
    gender: attr('Gender', { index: 3 })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-student-registration-course.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CourseE', 'i-i-s-student-registration-course', {
    name: attr('Name', { index: 0 })
  });

  modelClass.defineProjection('CourseL', 'i-i-s-student-registration-course', {
    name: attr('Name', { index: 0 })
  });
};

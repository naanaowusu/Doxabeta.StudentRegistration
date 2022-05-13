import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dateOfRegistration: DS.attr('date'),
  courseType: DS.attr('i-i-s-student-registration-t-course-type'),
  course: DS.belongsTo('i-i-s-student-registration-course', { inverse: null, async: false }),
  student: DS.belongsTo('i-i-s-student-registration-student', { inverse: null, async: false })
});

export let ValidationRules = {
  dateOfRegistration: {
    descriptionKey: 'models.i-i-s-student-registration-registration.validations.dateOfRegistration.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  courseType: {
    descriptionKey: 'models.i-i-s-student-registration-registration.validations.courseType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  course: {
    descriptionKey: 'models.i-i-s-student-registration-registration.validations.course.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  student: {
    descriptionKey: 'models.i-i-s-student-registration-registration.validations.student.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RegistrationE', 'i-i-s-student-registration-registration', {
    dateOfRegistration: attr('Date of registration', { index: 0 }),
    courseType: attr('Course type', { index: 1 }),
    course: belongsTo('i-i-s-student-registration-course', 'Course', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    student: belongsTo('i-i-s-student-registration-student', 'Student', {
      surname: attr('Surname', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'surname' })
  });

  modelClass.defineProjection('RegistrationL', 'i-i-s-student-registration-registration', {
    dateOfRegistration: attr('Date of registration', { index: 0 }),
    courseType: attr('Course type', { index: 1 }),
    course: belongsTo('i-i-s-student-registration-course', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true }),
    student: belongsTo('i-i-s-student-registration-student', 'Surname', {
      surname: attr('Surname', { index: 3 })
    }, { index: -1, hidden: true })
  });
};

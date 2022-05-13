import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISStudentRegistrationCourseLForm from './forms/i-i-s-student-registration-course-l';
import IISStudentRegistrationRegistrationLForm from './forms/i-i-s-student-registration-registration-l';
import IISStudentRegistrationStudentLForm from './forms/i-i-s-student-registration-student-l';
import IISStudentRegistrationCourseEForm from './forms/i-i-s-student-registration-course-e';
import IISStudentRegistrationRegistrationEForm from './forms/i-i-s-student-registration-registration-e';
import IISStudentRegistrationStudentEForm from './forms/i-i-s-student-registration-student-e';
import IISStudentRegistrationCourseModel from './models/i-i-s-student-registration-course';
import IISStudentRegistrationRegistrationModel from './models/i-i-s-student-registration-registration';
import IISStudentRegistrationStudentModel from './models/i-i-s-student-registration-student';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-student-registration-course': IISStudentRegistrationCourseModel,
    'i-i-s-student-registration-registration': IISStudentRegistrationRegistrationModel,
    'i-i-s-student-registration-student': IISStudentRegistrationStudentModel
  },

  'application-name': 'Student registration',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Student registration',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Student registration',
          title: 'Student registration'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'student-registration': {
          caption: 'StudentRegistration',
          title: 'StudentRegistration',
          'i-i-s-student-registration-student-l': {
            caption: 'Student',
            title: ''
          },
          'i-i-s-student-registration-registration-l': {
            caption: 'Registration',
            title: ''
          },
          'i-i-s-student-registration-course-l': {
            caption: 'Course',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-student-registration-course-l': IISStudentRegistrationCourseLForm,
    'i-i-s-student-registration-registration-l': IISStudentRegistrationRegistrationLForm,
    'i-i-s-student-registration-student-l': IISStudentRegistrationStudentLForm,
    'i-i-s-student-registration-course-e': IISStudentRegistrationCourseEForm,
    'i-i-s-student-registration-registration-e': IISStudentRegistrationRegistrationEForm,
    'i-i-s-student-registration-student-e': IISStudentRegistrationStudentEForm
  },

});

export default translations;

import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Student registration',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Student registration',
          title: 'Student registration'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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

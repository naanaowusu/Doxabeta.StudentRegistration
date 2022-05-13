import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.student-registration.caption'),
          title: i18n.t('forms.application.sitemap.student-registration.title'),
          children: [{
            link: 'i-i-s-student-registration-student-l',
            caption: i18n.t('forms.application.sitemap.student-registration.i-i-s-student-registration-student-l.caption'),
            title: i18n.t('forms.application.sitemap.student-registration.i-i-s-student-registration-student-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-student-registration-registration-l',
            caption: i18n.t('forms.application.sitemap.student-registration.i-i-s-student-registration-registration-l.caption'),
            title: i18n.t('forms.application.sitemap.student-registration.i-i-s-student-registration-registration-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-student-registration-course-l',
            caption: i18n.t('forms.application.sitemap.student-registration.i-i-s-student-registration-course-l.caption'),
            title: i18n.t('forms.application.sitemap.student-registration.i-i-s-student-registration-course-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})
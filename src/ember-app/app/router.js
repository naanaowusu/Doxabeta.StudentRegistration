import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-student-registration-course-l');
  this.route('i-i-s-student-registration-course-e',
  { path: 'i-i-s-student-registration-course-e/:id' });
  this.route('i-i-s-student-registration-course-e.new',
  { path: 'i-i-s-student-registration-course-e/new' });
  this.route('i-i-s-student-registration-registration-l');
  this.route('i-i-s-student-registration-registration-e',
  { path: 'i-i-s-student-registration-registration-e/:id' });
  this.route('i-i-s-student-registration-registration-e.new',
  { path: 'i-i-s-student-registration-registration-e/new' });
  this.route('i-i-s-student-registration-student-l');
  this.route('i-i-s-student-registration-student-e',
  { path: 'i-i-s-student-registration-student-e/:id' });
  this.route('i-i-s-student-registration-student-e.new',
  { path: 'i-i-s-student-registration-student-e/new' });
});

export default Router;

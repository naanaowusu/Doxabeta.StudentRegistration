import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tCourseTypeEnum from '../enums/i-i-s-student-registration-t-course-type';

export default FlexberryEnum.extend({
  enum: tCourseTypeEnum,
  sourceType: 'IIS.StudentRegistration.tCourseType'
});

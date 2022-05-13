import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tGenderEnum from '../enums/i-i-s-student-registration-t-gender';

export default FlexberryEnum.extend({
  enum: tGenderEnum,
  sourceType: 'IIS.StudentRegistration.tGender'
});

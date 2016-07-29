import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  hasMany
} from 'ember-data/relationships';

export default Model.extend({
  status: attr('string'),
  lines: hasMany('orderLine', {
    inverse: null,
    async: false
  })
});

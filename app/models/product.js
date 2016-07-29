import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-data/relationships';

export default Model.extend({
  price: attr('number'),
  name: attr('string'),
  description: attr('string'),
  stock: attr('number'),
  category: belongsTo('category', {
    inverse: null,
    async: false
  }),
  categoryId: attr('number')
});

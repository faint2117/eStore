import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-data/relationships';

export default Model.extend({
  quantity: attr('number'),
  product: belongsTo('product', {
    inverse: null
  })
});

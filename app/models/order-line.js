import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-data/relationships';

export default Model.extend({
  product: belongsTo('product', {
    inverse: null
  }),
  productId: attr('number'),
  quantity: attr('number'),
  order: belongsTo('order', {
    inverse: 'orderLine',
    async: false
  }),
  orderId: attr('number')
});

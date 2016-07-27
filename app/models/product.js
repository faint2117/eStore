import Model from 'ember-data/model';
import attr from 'ember-data/attr';
//import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  category: attr('string'),
  price: attr('number'),
  stock: attr('number')//,
  //shoppingCart: belongsTo('shoppingCart', { inverse: 'products' })
});

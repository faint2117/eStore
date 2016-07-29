import RESTSerializer from 'ember-data/serializers/rest';
import DS from 'ember-data';

export default RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    category: {
      embedded: 'always'
    }
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.products && payload.products.products) {
      payload = {
        products: payload.products.products
      };
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

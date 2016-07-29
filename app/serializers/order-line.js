import RESTSerializer from 'ember-data/serializers/rest';
import DS from 'ember-data';

export default RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    order: { embedded: 'always' },
    product: { embedded: 'always' }
  }
});

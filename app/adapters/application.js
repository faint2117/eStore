import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://lstken100413',
  namespace: 'training/api',
  headers: {
    'Accept': 'application/json'
  }
});

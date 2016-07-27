import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('product');
    // [{
    //   name: 'Test1',
    //   price: 15
    // }, {
    //   name: 'Test2',
    //   price: 15
    // }];
  },

  actions: {
    saveProduct(item) {
      item.save().then(() => this.transitionTo('products'));
    }
  }
});

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
      item.categoryId = 1;
      item.save().then(() => this.transitionTo('products'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});

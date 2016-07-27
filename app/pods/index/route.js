import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // let shoppingCart = this.store.findAll('shoppingCart');
    // if (!shoppingCart.id) {
    //   shoppingCart = this.store.createRecord('shoppingCart');
    // }
    // return Ember.RSVP.hash({
    //   products: this.store.findAll('product'),
    //   shoppingCart: shoppingCart
    // });
    return this.store.findAll('product');
  },

  // setupController(controller, model) {
  //   controller.set('products', model.products);
  //   controller.set('shoppingCart', model.shoppingCart);
  // },

  actions: {
    addProduct(item) {
      let shoppingCart = this.store.findAll('shoppingCart').then((cart) => {
        if (!cart.id) {
          shoppingCart = this.store.createRecord('shoppingCart');
        }
        else {
          shoppingCart = cart;
        }
        let producList = shoppingCart.get('products');
        producList.addObject(item);

        shoppingCart.save().then(() => this.transitionTo('shopping-cart'));
      });
    }
  }
});

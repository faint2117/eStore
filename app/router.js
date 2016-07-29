import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/', { path: '/index' });
  this.route('shopping-history', function() {
    this.route('details', {path: '/:order_id/details'});
  });
  this.route('shopping-cart');
  this.route('products', function() {
    this.route('add');
  });
});

export default Router;

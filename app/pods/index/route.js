import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{name:'Test1', price:15 },{name:'Test2', price:15 }];
  }
});

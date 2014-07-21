import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberSimpleAuthENV.locationType
});

Router.map(function() {
  this.route('needsAuth');
  this.route('application');
  this.route('login');

  this.resource('authcheck', function() {
    
  });

});

export default Router;

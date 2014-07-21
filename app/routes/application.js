import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function(transition) {
    Ember.Logger.debug("Application route beforeModel hook is triggered");
    this._super(transition);
  },

  fired: false,

  actions: {
    sessionAuthenticationSucceeded: function() {
     Ember.Logger.debug("sessionAuthenticationSucceeded is triggered");
     if (this.get('fired')) {
      Ember.Logger.warn("sessionAuthenticationSucceeded was triggered more than once");
     }
     this.set('fired', true);
     this._super();
    }  
  }

});

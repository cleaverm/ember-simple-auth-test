import Ember from 'ember';
import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

export default Ember.Controller.extend(AuthenticationControllerMixin, {
  authenticator: "authenticator:custom",

  autoauth: function() {
    
    Ember.run.later(this, function() {
      Ember.Logger.debug("Logging in...");
      
      this.send('authenticate');
    }, 5000);
  }.on('init')
});

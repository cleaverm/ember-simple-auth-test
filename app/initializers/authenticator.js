import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import CONFIG from 'simple-auth/configuration';

var CustomAuthenticator = Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      reject("Not persisting session after reload");
    });
  },
  authenticate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve({ someAuthData: true });
    });
  },
  invalidate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve(true);
    });
  },
});

export default {
  name: 'authenticator',

  initialize: function(container, app) {
    container.register('authenticator:custom', CustomAuthenticator);
  }
};
# Ember-simple-auth-test

This is based off the Ember CLI default project and demonstrates an issue with retrying aborted route transitions.

If a user loads the application at `/authcheck` in this example and needs to log in first using Ember Simple Auth, the application [won't successfully transition to the original destination on successful login](https://github.com/simplabs/ember-simple-auth/issues/256).

The login will happen automatically in this example and there is some extra logging to demonstrate the issue (the logging is really the whole point of the app at this stage).


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit the app at http://localhost:4200/authcheck

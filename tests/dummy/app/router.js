import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('buttons');
  this.route('avatars');
  this.route('pagination');
});

export default Router;

//= require '../../bower_components/jquery/jquery.min'
//= require '../../bower_components/handlebars/handlebars.runtime'
//= require '../../bower_components/ember/ember.min'
//= require '../../bower_components/ember-data-shim/ember-data.min'

//= require_tree '../controllers'
//= require 'store'
//= require_tree '../models'
//= require_tree '../routes'
//= require_tree '../views'
//= require 'routes'

var App = Ember.Application.create();
module.exports = App;

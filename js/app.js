!function(){
  'use strict';

  // Manage Navigation
  define([
    'backbone'
  ], function(Backbone) {

    return Backbone.Model.extend({
      initialize: function () {
        console.log("Start!");
      }
    });
  });
}();
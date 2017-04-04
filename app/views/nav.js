var Bb = require('backbone')
var Mn = require('backbone.marionette')
var User = require('./../models/user')
var template = require('../templates/nav.hbs') 
var NavView = Mn.View.extend({
  // el: '#nav-hook',
  template: template(),

  // tagName: 'nav',
  // className: 'navbar navbar-inverse',

  // attributes: {
  //   role: 'navigation'
  // },

  ui: {
    inputUsername: "input#username",
    inputPassword: "input#password",
    inputButton: "input#login-button"
  },

  triggers: {
    "click #login-button": "show:login",
    "click #register-button": "show:register" 
  },

  initialize: function() {
    
  },

  // onShowLogin: function() {
  //   alert('login from child')
  // }

  // login: function(event) {
  //   event.preventDefault()

  //   var user = {
  //     username: this.getUI('inputUsername').val(),
  //     password: this.getUI('inputPassword').val()
  //   }

  //   $.post({
  //     url: "https://localhost:3000/api/auth",
  //     data: user,
  //     success: function(data) {
  //       alert(JSON.stringify(data))
  //     },
  //     error: function(err) {
  //       alert(JSON.stringify(err))
  //     }
  //   })

 
})

module.exports = NavView
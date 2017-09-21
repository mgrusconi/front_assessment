/**
 * 
 * 
 *
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

/// <reference path="../typings/index.d.ts" />
import {HelloWorld} from "./resources/controllers/hello-world";
import {GoodbyeWorld} from "./resources/controllers/goodbye-world";

var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/state1");

  $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html",
        controller: HelloWorld
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html",
        controller: GoodbyeWorld
      });
});

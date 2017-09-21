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
import {GetDataController} from "./resources/controllers/getDataController";
import {GetDataService} from "./resources/services/getDataService";

var app = angular.module('brastlewark', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // Routers

  $urlRouterProvider.otherwise("/state1");
  $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html",
        controller: GetDataController
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html",
        controller: GoodbyeWorld
      });
});

app.controller("GetDataController", GetDataController);

app.service("GetDataService", GetDataService);

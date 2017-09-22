/**
 * 
 * 
 *
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

/// <reference path="../typings/index.d.ts" />

import {GoodbyeWorld} from "./resources/controllers/goodbye-world";
import {GetDataController} from "./resources/controllers/getDataController";

import {GetDataService} from "./resources/services/getDataService";

import {GnomeNameDirective} from "./resources/directives/gnomeNameDirective";
import {GnomeImageDirective} from "./resources/directives/gnomeImageDirective";
import {GnomeProfessionsDirective} from "./resources/directives/gnomeProfessionsDirective";

var app = angular.module('brastlewark', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // Routers
  $urlRouterProvider.otherwise("/list");
  $stateProvider
      .state('list', {
        url: "/list",
        templateUrl: "views/list.html",
        controller: GetDataController
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "templates/state2.html",
        controller: GoodbyeWorld
      });
});

//controllers
app.controller("GetDataController", GetDataController);

//services
app.service("GetDataService", GetDataService);

//directive
app.directive("gnomeName", GnomeNameDirective.factory());
app.directive("gnomeImage", GnomeImageDirective.factory());
app.directive("gnomeProfessions", GnomeProfessionsDirective.factory());

/**
 * 
 * 
 *
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

/// <reference path="../typings/index.d.ts" />

import {GetGnomeController} from "./resources/controllers/getGnomeController";
import {GetDataController} from "./resources/controllers/getDataController";

import {GetDataService} from "./resources/services/getDataService";

import {GnomeNameDirective} from "./resources/directives/gnomeNameDirective";
import {GnomeImageDirective} from "./resources/directives/gnomeImageDirective";
import {GnomeProfessionsDirective} from "./resources/directives/gnomeProfessionsDirective";
import {GnomeDataDirective} from "./resources/directives/gnomeDataDirective";


import {normalize} from "./resources/filters/normalize";

var app = angular.module('brastlewark', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // Routers
  $urlRouterProvider.otherwise("/list");
  $stateProvider
      .state('list', {
        url: "/list",
        templateUrl: "views/list.html",
        controller: GetDataController
      }).state('filter', {
        url: "/list/:prof",
        templateUrl: "views/list.html",
        controller: GetDataController
      })
      .state('gnomeById', {
        url: "/gnome/id/:id",
        templateUrl: "views/gnome.html",
        controller: GetGnomeController
      })
      .state('gnomeByName', {
        url: "/gnome/name/:name",
        templateUrl: "views/gnome.html",
        controller: GetGnomeController
      })
      .state('notFound', {
        url: "/not_found",
        templateUrl: "views/not-found.html",
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
app.directive("gnomeData", GnomeDataDirective.factory());

//filters
app.filter("normalize", normalize);

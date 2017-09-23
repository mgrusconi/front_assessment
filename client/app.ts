/**
 * 
 * 
 *
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

/// <reference path="../typings/index.d.ts" />

// Imports - Controllers
import {GetGnomeController} from "./resources/controllers/getGnomeController";
import {GetDataController} from "./resources/controllers/getDataController";

// Imports - Services
import {GetDataService} from "./resources/services/getDataService";

// Imports - Directives
import {GnomeNameDirective} from "./resources/directives/gnomeNameDirective";
import {GnomeImageDirective} from "./resources/directives/gnomeImageDirective";
import {GnomeProfessionsDirective} from "./resources/directives/gnomeProfessionsDirective";
import {GnomeDataDirective} from "./resources/directives/gnomeDataDirective";

// Imports - Filters
import {normalize} from "./resources/filters/normalize";

// Init Module
var app = angular.module('brastlewark', ['ui.router']);

// Routers
app.config(function($stateProvider, $urlRouterProvider) {

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

//Add - Controllers
app.controller("GetDataController", GetDataController);

//Add - Services
app.service("GetDataService", GetDataService);

//Add - Directive
app.directive("gnomeName", GnomeNameDirective.factory());
app.directive("gnomeImage", GnomeImageDirective.factory());
app.directive("gnomeProfessions", GnomeProfessionsDirective.factory());
app.directive("gnomeData", GnomeDataDirective.factory());

//Add - Filters
app.filter("normalize", normalize);

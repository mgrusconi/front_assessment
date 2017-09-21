System.register(["./resources/controllers/goodbye-world", "./resources/controllers/getDataController", "./resources/services/getDataService"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var goodbye_world_1, getDataController_1, getDataService_1, app;
    return {
        setters: [
            function (goodbye_world_1_1) {
                goodbye_world_1 = goodbye_world_1_1;
            },
            function (getDataController_1_1) {
                getDataController_1 = getDataController_1_1;
            },
            function (getDataService_1_1) {
                getDataService_1 = getDataService_1_1;
            }
        ],
        execute: function () {
            app = angular.module('brastlewark', ['ui.router']);
            app.config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/state1");
                $stateProvider
                    .state('state1', {
                    url: "/state1",
                    templateUrl: "partials/state1.html",
                    controller: getDataController_1.GetDataController
                })
                    .state('state2', {
                    url: "/state2",
                    templateUrl: "partials/state2.html",
                    controller: goodbye_world_1.GoodbyeWorld
                });
            });
            app.controller("GetDataController", getDataController_1.GetDataController);
            app.service("GetDataService", getDataService_1.GetDataService);
        }
    };
});

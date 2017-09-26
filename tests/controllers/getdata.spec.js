'use strict';
 
describe('Modulo brastlewark.GetDataController', function () {
 
    beforeEach(function () {
        module('app.GetDataController');
    });
 
    describe('GetData Controller', function () {
 
        var $scope, GetDataService;
 
        beforeEach(function () {
            module(function ($provide) {
                $provide.value('MockedGetDataService', {'getAll': function () {
                        return {brastlewark: []};
                    }});
            });
        });
 
        beforeEach(inject(function ($rootScope) {
            $scope = $rootScope.$new();
        }));
 
        it('Must expose the list of gnomes', inject(function ($controller, MockedGetDataService) {
            $controller('GetDataController', {'$scope': $scope, 'GetDataController': MockedGetDataService});
            expect($controller).toBeDefined();
            expect(GetDataController);
            expect($scope.gnomeTotal).toBe(MockedGetDataService.getAll().length);
        }));
    });
 
});
'use strict';
 
describe('Modulo brastlewark.GetDataService', function () {
 
    beforeEach(function () {
        module('brastlewark.GetDataService');
    });
 
    describe('GetData service', function () {
 
        var getDataService;
 
        beforeEach(function () {
            inject(['GetDataService', function (service) {
                    getDataService = service;
                }
            ]);
        });
 
        it('Must return the complete list of gnomes', function () {
            var data = getDataService.getAll();
            expect(data).toBeDefined();
            expect(data['brastlewark'].length).toBe(1337);
        });
    });
});
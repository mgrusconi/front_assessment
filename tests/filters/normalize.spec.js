'use strict';

describe('Module brastlewark.normalize', function () {
    
    beforeEach(function(){
        module('brastlewark.normalize-filter');
    });

    describe('Normalize filter', function () {
        it('Must return a string with no spaces and lowercase', 
        	inject(function (normalize) {
            var input = 'someThing';
            var expectedOutput = 'something';
            expect(normalize(input)).toEqual(expectedOutput);
        }));
    });
});
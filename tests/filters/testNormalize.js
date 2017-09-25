'use strict';

describe('Modulo brastlewark.decorator-filter', function () {
    
    beforeEach(function(){
        module('brastlewark.normalize');
    });

    describe('Filtro decorator', function () {
        it('debe transformar en mayusculas cualquier string y anteponer asteriscos', 
        	inject(function (normalize) {
            var input = 'someThing';
            var expectedOutput = 'something';
            expect(normalize(input)).toEqual(expectedOutput);
        }));
    });
});
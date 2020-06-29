'use strict';

// arguments object - no longer bound with arrow function
var add = function add(a, b) {
    //console.log(arguments) FALLA, arguments no accesible en arrow
    return a + b;
};

// this kewyword - no longer bound
var user = {
    name: 'Andre',
    cities: ['Phila', 'NuevaYork'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //Aquí se puede transformar el string de cities gracias al map
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};

user.printPlacesLived();

var multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new array where the number have been multiplied
    numbers: [12, 23, 17],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());

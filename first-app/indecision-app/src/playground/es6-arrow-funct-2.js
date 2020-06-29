// arguments object - no longer bound with arrow function
const add = (a,b) =>{
    //console.log(arguments) FALLA, arguments no accesible en arrow
    return a + b;
}

// this kewyword - no longer bound
const user = {
    name: 'Andre',
    cities: ['Phila', 'NuevaYork'],
    printPlacesLived() {
        //Aquí se puede transformar el string de cities gracias al map
        return this.cities.map((city) => this.name +' has lived in ' + city);
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};

user.printPlacesLived()

const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new array where the number have been multiplied
    numbers: [12,23,17],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply())
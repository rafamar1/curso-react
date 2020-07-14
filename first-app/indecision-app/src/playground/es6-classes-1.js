
class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        //return 'Hi Friend ' + this.name + ' .';
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name || 'Anonymous'} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();
        if(this.hasHomeLocation()){
            gretting += `I'm visiting from ${this.homeLocation}`
        }
        
        return gretting;
    }
}


const me = new Person('RafaMar',26);
const anonymous = new Person();

const traveler = new Traveler('Homer',43,'Springfield');
const anonymousTraveler = new Traveler();

console.log(traveler.getGretting());
console.log(anonymousTraveler.getGretting());
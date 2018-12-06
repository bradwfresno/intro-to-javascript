// const str = new String('Brad');
// console.log(str);

// const arr = new Array('Brad',29);
// console.log(arr);

// console.log(Object.getPrototypeOf(str));

// const num = new Number(42);
// console.log(num);

// const bool = new Boolean(true);
// console.log(bool);

// const person = {
//     name: 'Brad Williams'
// }
// console.log(person);

// const dog = new Object();
// dog.name = 'fido'
// console.log(dog);

// console.log(Array.prototype);

//old way constructor function
// function Animal(name,energy){
// this.name = name;
// this.energy = energy;

//     this.play = function(){
//         this.energy -=5;
//     }
// }

// const dog = new Animal('Dog',40);
// const cat = new Animal('Cat',5);
// console.log(dog);
// console.log(cat);
// console.log(dog.energy);
// dog.play();
// console.log(dog.energy);

////Example for todo app
// function Todo(text, isDone){
//     this.edit = function(){

//     }
// }

// Animal.prototype.eat = function(){
//     this.energy += 10
// }
//dog.eat();
// console.log(dog.energy);

// function Login(){
//     this.userName ;
//     this.password ;
//     this.getUserName = function(){
//         this.userName =prompt('Username')
//         console.log(this.userName);

//     }

// }
// const user = new Login();
// user.getUserName();
// if (user.userName == 'Brad'){
//     alert("You are Allowed");
// }else {
//     alert("you are not allowed") 
// }

// //example 2
// const name = prompt('n');
// const password = prompt('p');

// function User(name,password){
// this.name = name;
// this.password = password;
// }

// const brad = new User(name,password);
// console.log(brad);

// //example 3


// function User(){
//     const name = prompt('n');
//     const password = prompt('p');
// }

// const brad = new User();
// console.log(brad);

// //example 4

// function User(){
//     // this.user;
//     // this.password;

//     this.getStuff = function(){
//         this.getName();
//         this.getPassword();
//     }

//     this.getName = function(){
//        this.user = prompt('n');
//     }
//     this.getPassword = function(){
//         this.password = prompt('p');
//     }
// }

// const brad = new User();
// brad.getStuff();
// console.log(brad);


//CLASSES wooo whooo!
class Animal {
    //classes always have constructors
    constructor(name,energy){
        this.name = name;
        this.energy = energy;
    }
    play(){
        this.energy-=5;
    }
    }


// const dog = new Animal('fido',64);
// console.log(dog);
// dog.play();
// console.log(dog);

class Dog extends Animal{
    constructor(name, energy, says){
        super(...arguments);
        this.says = says;
    }
    speak(){
        console.log('dog say: ${this.says}');
    }
}
const fido = new Dog('Fido', 40,'Wolf');
console.log(fido);
fido.play();
console.log(fido);
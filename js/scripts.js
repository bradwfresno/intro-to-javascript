// // console.log(document.forms['loginForm']);
// // console.log(document.forms.loginForm);
// // console.log(document.forms.loginForm.button);

// // const btn = document.forms.loginForm.button;
// // btn.addEventListener('click', e => {
// //     e.preventDefault();
// //     let firstName = document.forms.loginForm.firstName;
// //     console.log(firstName.value);
// //     firstName.value = "";
// // });

// /**
//  * Javascript this
//  * 
//  */
// // console.log(this)

// // const person ={
// //     key:'value',
// //     name: 'brad',
// //     sayname(){
// //         console.log(this.name);
// //     }
// // }
// // person.sayname();

// // const person = {

// //     firstName:'Brad',
// //     lastName:'Williams',
// //     age:37,
// //     howOld(){

// //     }

// // }
// // console.log(person.age)

// // const btn1 = document.querySelector('#btn1');
// // const btn2 = document.querySelector('#btn2');

// // btn1.addEventListener('click', deleteThis);
// // btn2.addEventListener('click', logThis);

// // function logThis(){
// //     console.log(this);
// // };

// // function deleteThis(){
// //     this.style.display = 'none';
// // }

const buttons = document.querySelectorAll('button');
console.log('buttons', buttons);

buttons.forEach(button => button.addEventListener('click', function (){
this.style.display = 'none';
}))

// const dog = {
//     name: 'fido',
//     says: 'woof'
// }

// const cat = {
//     name: 'She-Ra',
//     says: 'Meow'
// }

// const baldeagle = {
//     name: 'Freedom',
//     says: 'baaaakaaaaaw'
// }

// function speak(location, status){
//     alert(`${this.name} says: ${this.says} from ${location} and looks ${status}`);
// }

// speak.apply(dog, ['yard', 'because it is hungry']);
// speak.call(cat, 'yourlap', 'whatever');
// speak.call(baldeagle, 'epic mt side','if you say so');

const dog = {
    name: 'fido',
    says: 'woof'
}

const cat = {
    name: 'She-Ra',
    says: 'Meow'
}

const baldeagle = {
    name: 'Freedom',
    says: 'baaaakaaaaaw'
}

function speak(){
    alert(`${this.name} says: ${this.says} `);
}

const dogSays = speak.bind(dog);
dogSays();

const catSays = speak.bind(cat);
catSays();

const baldeagleSays = speak.bind(baldeagle);
baldeagleSays();

class Person {
    constructor(name,age,favColor){
        this.name = name;
        this.age = age;
        this.faveColor = favColor;
    }
    sayName(){
        console.log(this.name);
    }
    sayAll(){
        console.log(this.name, this.age, this.faveColor);
    }
}

const ben = new Person('Ben',29,'Pink');
const david = new Person('dave',40,'blue');
ben.sayAll();
david.sayName();



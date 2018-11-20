// const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];
// leastFavoriteTeams.unshift("Lakers");
// leastFavoriteTeams.push("Ohio State");
// leastFavoriteTeams.splice(leastFavoriteTeams.indexOf("Patriots"),1);
// leastFavoriteTeams.unshift("Pareiots");
// console.log(leastFavoriteTeams);
// /**
//  * 1) Add 'Lakers' to the front of the leastFavoriteTeams array
//  * 2) Add 'Ohio State' to the back of the leastFavoriteTeams array
//  * 3) Remove 'Patriots' from the leastFavoriteTeams array
//  * 4) Add 'Patriots' back to the beginning of the leastFavoriteTeams array
//  * 5) Console log the array to see if you did everything right
//  *
//  * -> ['Patriots', 'Lakers', 'Yankees', 'Real Madrid', 'Alabama', 'Ohio State']
//  */

// const heroes = ['Drow', 'Phantom Lancer', 'Invoker'];
// heroes.reverse();
// heroes.splice(1,0,"Ember Spirit");
// heroes.pop();
// heroes.shift();
// heroes.unshift("Shadow Friend");

// console.log(heroes);

// /**
//  * 1) Reverse the heroes array
//  * 2) Add 'Ember Spirit' after the first index of the heroes array
//  * 3) Remove the last member of the heroes array
//  * 4) Remove the first item of the heroes array
//  * 5) Add 'Shadow Fiend' to the beginning of the heroes array
//  * 6) Console log the array to see if you did everything right
//  *
//  * -> ['Shadow Fiend', 'Ember Spirit'te, 'Phantom Lancer']
//  */


//  //function to show hello
// function logSomething() {
//     console.log("hello");
// }

// logSomething();

// //looping a function
// for(let i = 0; i<3; i++){
//     logSomething();
// }
// // function to take 2 values and do math
// function add(a,b){
//     console.log(a + b);
// }

// function subtract(a,b){
//     console.log(a-b);
// }
// add(1,2);
// subtract(1,2);

// const name = 'Brad';
// console.log(name);

// const number = 42;

// function answerToLife(){
//     console.log(number);
// }
// console.log(number);

// answerToLife();

//  const add2 = (a,b) => {
//     console.log(a+b);
// }

// add2(1,2);

// const sayname = name => {
//     console.log(name);
// }

// sayname("Brad");

// const cat = "kevin";

// console.log(cat.substr(2));

// //function for dog years
// calculateDogYears(+prompt("How old is your dog?"));
// function calculateDogYears(age){
//     alert(age * 7)
// }

// const myage = +prompt("What is your age?");
// const myamount = +prompt("How much a day?");
// const mymaxage = +prompt("Max age?");


// function ageProductUsageCalculator(age,amount,max){
// alert( ((max- age) * 365)*amount); 
// }

// ageProductUsageCalculator(myage,myamount,mymaxage);


// const myAnswers = [prompt("What os your home town, Weather Event, animal name")];
// baseballTeamName('Madera',"Tornado","Fox");

// alert(baseballTeamName)

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     sayName(){
//         console.log(this.name);
//     }
//     howOld(){
//         console.log(this.age);
//     }
// }
// const brad = new Person('Brad',37);
// const david = new Person('David',40)
// console.log(brad.sayName(),brad.howOld());
// console.log(david.sayName(),david.howOld());

//take a number return a square of that number (power of 2)
function squareNumber(){
    const number = +prompt("Give me a number!");
    if(!number){
        squareNumber();
    }
    alert(number * number);
}
squareNumber();











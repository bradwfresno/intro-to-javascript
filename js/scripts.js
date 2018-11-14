const obj1 = {
    name: "Brad"
};
const obj2 = {
    name: "Brad"
};
const arr1 = ['Cat'];
const arr2 = ['Cat'];

console.log(obj1 == obj2);
console.log(obj1.toString() == obj2.toString());

console.log(arr1 == arr2);
console.log(arr1.toString() == arr2.toString());

const num = '42.3'
console.log(num); //this is a string
console.log(+num); //this is a number

//Try it out
const str1 = new String("brad");
const str2 = "brad";

console.log(str1==str2); //loose check
console.log(str1===str2); //strict check

//I got the True and then false as one is a string object with the same value and the other is a string with the same value. Loosly they are the same strictly they are different.

//PEMDAS rules apply

//FizzBuzz Test is really popular interview question

//Java script sucks with math.
// let nums = 1;
// console.log(nums); // 1
// nums++
// console.log(nums); // 2
// nums++
// console.log(nums); // 3
// nums--
// console.log(nums); // 2
    // let number = 1;
    // const item = 5;
    // const item2 =10;
    // const xdiscount = .5;
    // console.log(number += item); // adds to the result
    // console.log(number += item2);
    // console.log(number *= xdiscount); // subtracts from the result

//Try it out 2
    // let total = 0;
    // let num1 = prompt("How many T-shirts? $5.99ea", 10);
    // let num2 = prompt("How many Hoodies? 12.25ea", 10);
    // let discount = 0
    // total = (+num1 * 5.99) + (+num2 * 12.25);
    // alert("your total is $" + total);
    // console.log(total);
    // discount = prompt("Enter discount in $'s",0);

    // total -= +discount;
    // alert("New total: $" + total);
    // console.log(total);

//control flow

//if else
// let age = 0
// age = +prompt("How old are you?",0)

// if(age >= 21 ){
//     //if statment is true run this
//     //indent in braces
//     alert(`You are an adult and can drink`);
// } else if( age >= 18 ){
//     alert(`You are an adult but can not drink`);
// }  else {
//     alert(`You are NOT an adult`);
// }

// if(age >= 18 || age <21){
//     console.log("Great success!");
// }

// if (!false) {
//     console.log("Victory");
// }


//looking for truthy or falsy 
const lastName = '';

if (lastName) {
    console.log(`Your last name is : ${lastName}`);
}else if (!lastName) {
    console.log('you didnt give a lastname');
}

/**
 * prompt user for name
 * if they provide value alert their name
 * if they provide no value prompt again
 * 
 * 
 * 
 * 
 */

// let fullName = prompt("What is your name?");

// if(!fullName){
    
//     alert(`Your didnt leave me a name try again later`);
    
// } else if (fullName){
//     alert(`Your name is : ${fullName}`);

// }

// //Trination evaluation ? true : false
// let fullName = prompt("What is your name?");

// fullName ? alert(`Your name is : ${fullName}`) : alert(`Your didnt leave me a name try again later`);

// //Switch

// const superHero = prompt("What is your fave superhero?");

// switch (superHero){
//     case "Superman":
//         console.log("Superman is the Best Superhero");
//         break;
//     case "Batman":
//         console.log("Superman can beat Batman");
//         break;
//     default: 
//         console.log(`My fav is from the Marval Universe`);
// }

//Try it 3
// let age = 0
// age = +prompt("How old are you?",0)

// if(age >= 18 ){
    
//     if(age <= 80){
//         let answer = prompt("Do you like starwars?");
//         if (answer == "yes" || answer == "Yes" || answer == "YES" || answer == "y" || answer == "Y"   )
//         {
//             alert("I like starwars too");
//         } else {
            
//         }
//     } else {
//         prompt("Do you like prunes?");
//         alert("Prunes are grose");
//     }
// }  else {
//     alert(`You are NOT an adult get older lol`);
// }

const userAge = +prompt("What is your Age?");

if (userAge >= 18 && userAge <=80){
    const likesStarWars = confirm('Do you liek Starwars?');
    if (likesStarWars){ 
        alert("May the 4th be with you");
    }
} else if (userAge > 80 ){
    const likePrunes = confirm('do you like prunes');
    likePrunes ?  alert("gross") : alert("you are alright");
}
else {

}


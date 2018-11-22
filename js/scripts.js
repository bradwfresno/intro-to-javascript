// function squareNumber(){
//     const number = +prompt("Give me a number!");
//     if (!number){
//         alert("not a number");
//         return squareNumber();
//     }
//     alert(number * number);
// }
// squareNumber();

// function secondFunction(){
// const entry = prompt("enter anything");
//     if (entry.endsWith(".")){
//         alert(entry.charAt(0).toUpperCase() + entry.slice(1));
//     }else {
//     alert(entry.charAt(0).toUpperCase() + entry.slice(1) + ".");
//     }
// }
// secondFunction();

function thirdFunction(){
    const input = "racecar";
    const legnth = input.length;
    const halfLegnth = legnth / 2;
    const lastHalf = input.substring(halfLegnth,legnth);
    const firstHalf = input.substring(0,halfLegnth)
    const result = lastHalf+firstHalf
    console.log(result);
    alert(result);
    arryResult = input.split('');
    arryReverse = input.split('').reverse();
    if ( arryResult == arryReverse){
        alert(result + " is a palindrome");
    }
console.log(arryResult)
console.log(arryReverse)
}
thirdFunction();
// //const newPrompt = +prompt("How much time do you need?") * 1000;
// console.log(newPrompt);

// //const timer = setTimeout(quote, newPrompt);
// //const intervalPrompt = +prompt('How many times do you ant the message to appear?') * 1000
// //const setTime = setInterval(quote,intervalPrompt);
// function quote (){
//     const random = alert(Math.random().toString(27).substring(2,25));
// }

// function endQuote(){
//     clearTimeout(timer);
// }

// function myStopFunction(){
//     clearInterval(setTime);
// }



function mySetItem(){
    const username = document.querySelector('#un').value;
const password = document.querySelector('#pw').value;
    localStorage.setItem("user",username);
    localStorage.password = password;
}

function myGetItem(){
    alert(localStorage.user);
    alert(localStorage.getItem("password"));
    
}

function myClearItem(){
    localStorage.removeItem("user");
    localStorage.removeItem("password");
}

(function (){
    const foo = "Are you sure about this?";
    alert(foo);
    console.log(foo);
})();
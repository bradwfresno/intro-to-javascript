// const body = document.querySelectorAll(".items");
// console.log(body);

// function queryAll(thing){
//     const all = document.querySelectorAll(thing);
//     console.log(all)
// }
// queryAll('body');

// function queryItem(thing){
//     const all = document.querySelector(thing);
//     console.log(all)
// }
// queryItem('body');

const header = document.querySelector('#header');
header.addEventListener("click", event => header.style.color = "limegreen");
document.addEventListener('keyup',event => {
    header.style.color="tomato";
    if(event.key === "Enter"){
        return alert("you pressed enter");
    }
    console.log(event);
});

console.log(header);

const div = document.querySelector("#div1");
div.addEventListener("mouseover", event => { 
    div.style.backgroundColor = "red"
    console.log(event);
    });
console.log(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", event => alert("clicked"));

const btns = document.querySelectorAll("button");

btns.forEach(btns => btns.addEventListener('click', () => alert("clicked 2")));
    


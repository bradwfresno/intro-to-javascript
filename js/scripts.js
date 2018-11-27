// //const title = document.querySelector("#title");
// //title.innerHTML = "<h1> My Title! </h1>";

// const title2 = document.createElement('h1');

// document.body.appendChild(title2);
// title2.textContent = "The title";

// const list = document.createElement("ul");
// document.body.appendChild(list);

// const cat1 = document.createElement('li');
// cat1.textContent = 'Celestia';
// cat1.dataset.id = 'abc123';

// const cat2 = document.createElement('li');
// cat2.textContent = 'Luna';

// const cat3 = document.createElement('li');
// cat3.textContent = 'Tupac';

// list.append(cat1,cat2,cat3);
// const js = document.querySelector('script');
// document.body.insertBefore(title2,js);
// document.body.insertBefore(list,title2);

// const button = document.createElement('button');
// button.textContent = 'SUBMIT';
// button.id = 'my-button';
// button.className = 'btn btn-success'
// button.classList.replace('btn-success', 'btn-info');
// document.body.appendChild(button);

// title2.classList.add('text-center');

// button.addEventListener('click', () => {
//     title2.classList.toggle('hidden')
// });

// //button.setAttribute('disabled' , true);
// //button.classList.remove ('btn-info');document.body.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light"
const nav = 1
const title = document.createElement('h1');
const body = document.createElement('p');
const footer = document.createElement('div');

title.textContent = 'Hello World!';
body.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit in doloribus ut animi, veritatis totam molestias illum rerum! Nostrum, aperiam! Quis recusandae quibusdam provident voluptates, sint quisquam minima natus deserunt.";
footer.textContent = "Friend us on facebook";





title.className = 'text-center';
body.className = 'container';
footer.className = 'panel-footer';

//place the contect on page
document.body.append(title,body,footer);











//FizBuzz

//loop between 2 numbers 0 - 100
//check to see number is multiple of 3 log fizz
// check to see 5 buzz
// check to see if both fizzbuzz
// none log the number

// function fizzbuzz(min,max){

//     for(let i=min; i <= max; i++){
//             let text = document.createElement('p');
//         if (i%3 ===0 && i % 5 ===0){
//             text.textContent = `${i}, FizzBuzz`;
//             //console.log(i,'FizzBuzz');
//         }else if(i%3 ===0){
//             text.textContent = `${i}, Fizz`;
//             //console.log(i,'Fizz');
//         } else if(i%5===0){
//             text.textContent = `${i}, Buzz`;
//         // console.log(i,'Buzz')
//         }else {
//             text.textContent = `${i}`;
//         //  console.log(i);
//             }
//             document.body.appendChild(text);
//     }
// }
// fizzbuzz(prompt("What is the min?"),prompt("What is the max?"));

function fizzbuzz(min,max){

    for(let i=min; i <= max; i++){
            
        if (i%3 ===0 && i % 5 ===0){
            createItem(i, 'FizzBuzz');
        }else if(i%3 ===0){
            createItem(i, 'Fizz');
        } else if(i%5===0){
            createItem(i, 'Buzz');
        }else {
            createItem(i);
        }
    }
}

function createItem(i,str){
    const p = document.createElement('p');
    str ? p.textContent = `${i} ${str}`: p.textContent = i;
    document.body.appendChild(p)

}

fizzbuzz(prompt("What is the min?"),prompt("What is the max?"));
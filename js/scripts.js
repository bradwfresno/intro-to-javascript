//arrays always start at 0
// const myFirstArray = ['Brad',37, true, 'Madtown',["Alana","Charlotte"]];
// console.log(myFirstArray[4][1]);
// const geekwise = [['web for beginners', true], ['Mobile Friendly',true],['intro to java', false]];
// console.log(geekwise[1][0]);
// console.log(geekwise[0][0]);
// console.log(geekwise[2][1]);
// console.log(geekwise[1]);

// const me = ['Last Jedi',7,true,2000]
// console.log(me, me.length, me[1]);

// const faveMovie1 = ['empire','luke'];
// const faveMovie2 = ['last jedi','rey'];
// const faveMovie3 = ['pulp fiction','vince vega'];
// const faveMovie4 = ['cowboy bebop','eine'];
// const faveMovie5 = ['dragon ball','goku'];

// const faveMovies = [faveMovie1,faveMovie2,faveMovie3,faveMovie4,faveMovie5];
// console.log(faveMovies);
// const titles = [faveMovie1[0],faveMovie2[0],faveMovie3[0],faveMovie4[0],faveMovie5[0]]
// console.log(titles);
// alert(titles);
// const least = titles.reverse();
// console.log(least);

// alert(least);

// let counter =0 // old way of doing loops dont do while loops
// while (counter <= 10) {
// console.log(counter);
// counter++;

// }

// for(let i = 1; i<=100;i++){
// console.log(i);
// }

// const names = ['Luke','Leia','Aniken','Padame'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// const albums = ["Dookie", "lets talk about feelings", "pump", "vs" , "Ten", "Grey Race"];
// for(i=0; i < albums.legnth; i++){
//     console.log(albums[i]);
// }

// for(let name of names) {
//     console.log(name);
// }

// for(i of names){ //same as the above
//     console.log(i);
// }

// for(let album of albums){
//     console.log(album);
//     if (album == "Dookie"){
//         break;
//     }
// }

// const person = {
//     name: "Brad",
//     age: 37
// };
// for(key in person){
//     console.log(person[key]);
// }
    
// const user = {};
// console.log(user);
// user.name=prompt("Giveme your name");
// user.age=prompt("How old are you?");
// console.log(user);
// console.log(user.age);

const favemovie = prompt("What is your fave movie?").toLowerCase()
const faveMovie1 = ['empire','1983'];
const faveMovie2 = ['last jedi','2017'];
const faveMovie3 = ['pulp fiction','1999'];
const faveMovie4 = ['cowboy bebop','2005'];
const faveMovie5 = ['dragon ball','2000'];

const faveMovies = [faveMovie1,faveMovie2,faveMovie3,faveMovie4,faveMovie5];
for(movie of faveMovies){
    if(movie[0] == favemovie){
        alert(movie[0] + " year: " + movie[1])
    }
}

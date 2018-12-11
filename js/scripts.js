// function someFN(){


// console.log(arguments);
// }
// someFN('brad',38,'blue',true);

// const arr1 = [1,2,3];
// const arr2 = [4,5,6]

// console.log([...arr1,...arr2]);

// const todoList = ['dishes','mow lawn', 'put up christmas tree'];

// console.log(todoList);

// const firstItem = todoList[0];
// console.log(firstItem);

// const [firstItem2] = todoList;
// console.log(firstItem2);

// const [first, second, third] = todoList;
// console.log(first);
// console.log(second);
// console.log(third);

// const person = {
//     name:'Brad',
//     age: 28,
//     wife: {
//         name:'Alana',
//         age: 36
//     }
// }

// console.log(person.name);
// console.log(person.wife.name);

// const {name} = person;

// console.log(name);

// const {noExist: banana = 'John Doe'} = person;
// console.log(banana);

// const {name:wife} =person.wife
// console.log(wife);

//////////JSON//API
// function getAllCharacters(url){
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     const pagination = data.info.next;
//     if(pagination){
//         getAllCharacters(pagination);
//     }
//     makeCard(data);
// }
//     )
// .catch(error => console.log(error))
// }
async function getAllCharacters(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        const pagination = data.info.next;
        if(pagination){
            getAllCharacters(pagination);
        }
        makeCard(data);
    } catch (error) {
        console.log(error);}

}


getAllCharacters("https://rickandmortyapi.com/api/character/");

function makeCard(data){
    console.log(data);
    const {results: characters} = data;
    characters.forEach(character =>{
        const card = document.createElement('div');
        card.classList = 'card';
        card.innerHTML = `
            <img class="card-img-top" src="${character.image}">
            <div class="card-body">
                <h2 class ="card-title"> ${character.name}</h2>
                <p class="card-text">Species:${character.species}</p>
                <p class="card-text">Location:${character.location.name}</p>
                
            </div>
        `;
        document.body.append(card);
    })
}
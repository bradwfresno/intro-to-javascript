const item1 = prompt("Give me a to do item");
const item2 = prompt("Give me a to do item");
const item3 = prompt("Give me a to do item");

const todolist = [[item1],[item2],[item3]];

for(let i = 0; i < todolist.length; i++){
    
    todolist[i].push(+prompt(`How long will ${todolist[i][0]} take?`));
}

let longestItem = 0;
let longestItemIndex = 0;

for(let i =0; i < todolist.length; i++){
    if(todolist[i][1] > longestItem){
        longestItem = todolist[i][1];
        longestItemIndex = i;
    }
    console.log('item',longestItem);
    console.log('index',longestItemIndex);
}

console.log('longest item', todolist[longestItemIndex])
console.log(todolist)

console.log('longest item', todolist.splice([longestItemIndex]),1);
for (let item of todolist){
item.push('ez-pz');
alert(item);

}
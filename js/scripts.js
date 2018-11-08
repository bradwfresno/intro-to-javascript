const firstName = prompt("What is your First Name?");
const lastName = prompt("What is your Last Name?");
const birthDay = prompt("What is your Birthday?");
//next time nest
const bd = new Date(birthDay);
console.log(bd);
console.log(firstName);
//alert(lastName);
confirm(`Is this your birthday?: ${bd}`)
alert(`Hi ${firstName} ${lastName} your birthday is ${bd}`)

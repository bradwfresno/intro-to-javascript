//declarations 
const h3 = document.querySelector("#result");
const h4 = document.querySelector("#math");
const text = document.querySelector('#temperature');
const selector = document.querySelector('#scale');

//event listeners
selector.addEventListener("change", (event) => calculate());
h3.addEventListener("click", (event) => calculate());
text.addEventListener("input", () => calculate());

//functions
function calculate(){
    let selection = document.querySelector('#scale option:checked').value;
       //alert(selection)
       if (selection == "fahrenheit"){
           const calculation = (text.value - 32) * 5/9
            h3.textContent = `${calculation} Degrees Celcius`
            h4.textContent = `(${text.value} - 32) * 5/9 = ${calculation} `
       }else if(selection == "celcius"){
        const calculation = (text.value * 5/9) + 32
        h3.textContent = `${calculation} Degrees Fahrenheit`
        h4.textContent = `(${text.value} * 5/9) + 32 = ${calculation} `

       };
    
};
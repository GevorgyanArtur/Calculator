let numbers = document.querySelectorAll(".btn");
let screen = document.getElementById('b');
let uses = document.querySelectorAll(".bt");
let hakadarc = document.getElementById("pm")
let del = document.getElementById("AC");
let point = document.getElementById("point")
let x = 0;
let y = 0;
let btn;

numbers.forEach(number =>{
    number.addEventListener("click",()=>{
        screen.value +=  number.textContent})
})    

uses.forEach(use =>{
    use.addEventListener("click",()=>{
        if (use.textContent === "=") {
          y = +screen.value;
          calculateResult();
        }else{
            btn = use.textContent;
            x = +screen.value;
            screen.value = '';
        }
        if(use.textContent === "%"){
            screen.value = x / 100;
        }
    })
})


hakadarc.addEventListener("click", ()=>{
    screen.value = -1 * x;
})
point.addEventListener("click", ()=>{
    screen.value = x + '.';
})

function calculateResult() {
    let result;
    switch (btn) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            result = "Error";
    }
    screen.value = result;
}

del.addEventListener("click",()=>{
    screen.value = null;
})


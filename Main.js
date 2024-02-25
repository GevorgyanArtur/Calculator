let numbers = document.querySelectorAll(".btn");
let screen = document.getElementById('b');
let uses = document.querySelectorAll(".bt");
let hakadarc = document.getElementById("pm")
let del = document.getElementById("AC");
let point = document.getElementById("point")
let x = 0;
let y = 0;
let btn;
let result;

numbers.forEach(number =>{
    number.addEventListener("click",()=>{
        screen.value +=  number.textContent})
})    

uses.forEach(use =>{
    use.addEventListener("click",()=>{
        if (use.textContent === "=") {
          y = parseFloat(screen.value);
          result = x + y;
          calculateResult();
        }else{
            btn = use.textContent;
            x = parseFloat(screen.value);
            screen.value = '';
        }
        if(use.textContent === "%"){
            screen.value = x / 100;
        }
    })
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
hakadarc.addEventListener("click", ()=>{
    screen.value = -1 * x;
})
point.addEventListener("click", ()=>{
    screen.value += ".";    
})

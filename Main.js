let numbers = document.querySelectorAll(".btn");
let screen = document.getElementById('b');
let screen1 = document.getElementById('b');
let uses = document.querySelectorAll(".bt");

numbers.forEach(number =>{
    number.addEventListener("click",()=>{
        screen.value +=  number.textContent})
})    


// if(screen.value === ""){
//     numbers.forEach(number1 =>{
//         number1.addEventListener("click",()=>{
//             screen1.value +=  number1.textContent})
// })  
// }


uses.forEach(use =>{
    use.addEventListener("click",()=>{
        if (use.textContent === "+") {
            screen.value = "";
        }
        else if(use.textContent === "%"){
            screen.value=screen.value / 100;
        }
    })
})




let del = document.getElementById("AC");
del.addEventListener("click",()=>{
    screen.value = null;
})



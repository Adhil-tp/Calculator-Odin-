const numbers = document.querySelectorAll('.number');
const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator');


const add = (num1, num2)=>{
    return num1 + num2;
}
const divide = (num1, num2)=>{
    if(num2 !== 0){
        return num1 / num2;
    }
    else{
        return undefined;
    }
}

numbers.forEach(number => { 
    number.addEventListener('click', () => {  
        let firstnum = 0;
        if(display.innerHTML.length <= 9){
            firstnum = display.innerHTML;
            display.textContent += number.textContent;
            console.log(firstnum);
        }
    });
});
operators.forEach(operator => {
    operator.addEventListener('click',() => {
        let operation ='';
        operation = operator.textContent;
        display.textContent += operation;
    })
})
const numbers = document.getElementsByClassName('numbers');
const operators = document.getElementsByClassName('operators');
const mainDisplay = document.getElementById('mainDisplay');
const upperDisplay = document.getElementById('upperDisplay');
const inputStore = document.getElementsByClassName('inputStore');
const equalSign = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const decimal = document.getElementById('decimal')

let numList = [];
let usedOperator;

for (const num of numbers) {
    
    num.addEventListener('click', ()=>{
        mainDisplay.textContent += num.textContent

    })
}

let checkInput = '';

for (const input of inputStore) {
    input.addEventListener('click', ()=>{
        checkInput += input.textContent

        if (checkInput === '0/0') {
            alert('cant divide by 0');
            mainDisplay.textContent = '';
            upperDisplay.textContent = '';
            numList = [];
            return;
        }
    })
}


for (const op of operators) {
    op.addEventListener('click',()=>{

        if(mainDisplay.textContent === ''){
            alert('Type a number first')
            return;
        }
        let newNum = parseFloat(mainDisplay.textContent)
        numList.push(newNum)
        upperDisplay.textContent = mainDisplay.textContent
        upperDisplay.textContent += op.textContent
        Operations()
        usedOperator = op.textContent
        // Operations()
        mainDisplay.textContent = ''
        decimalPresent = false;

    })
}



equalSign.addEventListener('click', ()=>{
    if (isNaN(mainDisplay.textContent || upperDisplay.textContent) === true || mainDisplay.textContent === '' || numList.length < 1){
        return;
    }
    upperDisplay.textContent += mainDisplay.textContent
    let newNum = parseFloat(mainDisplay.textContent)
    numList.push(newNum)
    Operations()
    mainDisplay.textContent = numList[0]
    numList = [];
    decimalPresent = false;
})





function Operations(){
    switch (usedOperator) {
        case '+':
            numList = [Math.round(numList.reduce((accumulator, number) => accumulator + number) * 100) / 100];
            break;
        case '-':
            numList = [Math.round(numList.reduce((accumulator, number) => accumulator - number) * 100) / 100];
            break;
        case 'x':
            numList = [Math.round(numList.reduce((accumulator, number) => accumulator * number) * 100) / 100];
            break;

        case '/':
            numList = [Math.round(numList.reduce((accumulator, number) => accumulator / number)*100)/100];
            break;
    }
}

clearBtn.addEventListener('click', ()=>{
    mainDisplay.textContent = '';
    upperDisplay.textContent = '';
    numList = []
    decimalPresent = false;
})

deleteBtn.addEventListener('click', ()=>{
    if (mainDisplay.textContent === ''){
        return;
    }
    mainDisplay.textContent = mainDisplay.textContent.slice(0, -1)
})

let decimalPresent = false;

decimal.addEventListener('click', ()=>{
    if(decimalPresent === true){
        return;
    }
    decimalPresent = true;
    mainDisplay.textContent += '.'
})

const numbers = document.getElementsByClassName('numbers');
const operators = document.getElementsByClassName('operators');
const inputStore = document.getElementsByClassName('inputStore');

const decimal = document.getElementById('decimal');

let numList = [];
let usedOperator;

for (const num of numbers) {
	num.addEventListener('click', () => {
		mainDisplay.textContent += num.textContent;
	});
}

let checkInput = '';

for (const input of inputStore) {
	input.addEventListener('click', () => {
		checkInput += input.textContent;

		if (checkInput === '0/0') {
			alert('cant divide by 0');
			mainDisplay.textContent = '';
			upperDisplay.textContent = '';
			numList = [];
			return;
		}
	});
}

for (const op of operators) {
	op.addEventListener('click', () => {
		if (mainDisplay.textContent === '') {
			alert('Type a number first');
			return;
		}
		let newNum = parseFloat(mainDisplay.textContent);
		numList.push(newNum);
		upperDisplay.textContent = mainDisplay.textContent;
		// upperDisplay.textContent += op.textContent;
		usedOperator = op.textContent;
        Operations();
		mainDisplay.textContent = '';
		decimalPresent = false;
	});
}

equal.addEventListener('click', solveProb);

function solveProb() {
	if (
		isNaN(mainDisplay.textContent || upperDisplay.textContent) === true ||
		mainDisplay.textContent === '' ||
		numList.length < 1
	) {
		return;
	}
	upperDisplay.textContent += mainDisplay.textContent;
	let newNum = parseFloat(mainDisplay.textContent);
	numList.push(newNum);
	Operations();
	mainDisplay.textContent = numList[0];
	numList = [];
	decimalPresent = false;
	checkInput = '';
	upperDisplay.textContent = '';
}

//OPERATORS
function Operations() {
    console.log(upperDisplay)
	switch (usedOperator) {
		case '+':
			numList = [Math.round(numList.reduce((a, b) => a + b) * 100) / 100];
			if (upperDisplay !== '') {
				upperDisplay.textContent = [
					Math.round(numList.reduce((a, b) => a + b) * 100) / 100,
				];
                upperDisplay.textContent += ' +'
			}
			break;
		case '-':
			numList = [Math.round(numList.reduce((a, b) => a - b) * 100) / 100];
			if (upperDisplay !== '') {
				upperDisplay.textContent = numList = [
					Math.round(numList.reduce((a, b) => a - b) * 100) / 100,
				];
                upperDisplay.textContent += ' -'
			}
			break;
		case '🞩':
			numList = [Math.round(numList.reduce((a, b) => a * b) * 100) / 100];
			if (upperDisplay !== '') {
				upperDisplay.textContent = [
					Math.round(numList.reduce((a, b) => a * b) * 100) / 100,
				];
                upperDisplay.textContent += ' 🞩'
			}
			break;

		case '÷':
			numList = [Math.round(numList.reduce((a, b) => a / b) * 100) / 100];
			if (upperDisplay !== '') {
				upperDisplay.textContent = [
					Math.round(numList.reduce((a, b) => a / b) * 100) / 100,
				];
                upperDisplay.textContent += ' ÷'
			}
			break;
	}
}

//CLEAR LINES
clearBtn.addEventListener('click', () => {
	checkInput = '';
	mainDisplay.textContent = '';
	upperDisplay.textContent = '';
    console.log(upperDisplay)
	numList = [];
	decimalPresent = false;
});

//DELETE NUMBERS
deleteBtn.addEventListener('click', () => {
	if (mainDisplay.textContent === '') {
		return;
	}
	mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
});

let decimalPresent = false;

//DECIMAL Operator
decimal.addEventListener('click', () => {
	if (decimalPresent === true) {
		return;
	}
	decimalPresent = true;
	mainDisplay.textContent += '.';
});

const allButton = document.querySelectorAll('.button')



allButton.forEach(button =>{
    button.addEventListener('click', e =>{
        gsap.fromTo(e.target, {scale:.8, ease:'expo.out'}, {scale:1, ease:'expo.out'})
    })

    button.addEventListener('pointerenter', e =>{
        gsap.to(e.target, {outline: 'solid 1px #C69F68' , ease:'expo.out'})
    })

    button.addEventListener('pointerleave', e =>{
        gsap.to(e.target, {outline: 'none' , ease:'expo.out'})
    })
    
})

github.addEventListener('pointerenter', () => {
	gsap.fromTo(
		github,
		{ rotate: 0, ease: 'expo.inout' },
		{ rotate: 360, ease: 'expo.inout' }
	);
});

github.addEventListener('pointerleave', () => {
	gsap.fromTo(
		github,
		{ rotate: 360, ease: 'expo.inout' },
		{ rotate: 0, ease: 'expo.inout' }
	);
});

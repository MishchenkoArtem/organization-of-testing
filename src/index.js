import './index.css';

import { input, btn, numberCard, span } from './components/constans.js';

const checkLuhn = (numbers) => {
    const num = numbers;
    let sum = 0;

    const parity = (num.length) % 2;

    for (let i = 0; i < num.length; i += 1) {
        let digit = Number(num[i]);
        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    return Number(sum % 10) === 0;
}

const checkNumbersCard = (numbers) => {
    let items = [];

    Array.from(numbers).forEach((element) => {
        items.push(element);
    });

    // for (let i = 0; i > items.length; i++) {
    //     console.log(items[i]);
    // }
}

input.addEventListener('input', (e) => {
    const numbers = span.innerHTML = e.target.value;

    if (numbers.length <= 0) {
        console.log('Не очень');
    }
    else if (checkLuhn(numbers)) {
        console.log('Всё хорошо');
    }
    else {
        console.log('Не очень');
    }

    checkNumbersCard(numbers);
});

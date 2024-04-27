import { input, btn, numberCard, span, numbersMir, images } from './components/constans.js';
import { checkLuhn } from './luhnAlgorithm.js';

const checkNumbersCard = (numbers) => {
    let items = [];

    Array.from(numbers).forEach((element) => {
        items.push(element);
    });
}

input.addEventListener('input', (e) => {
    const numbers = span.innerHTML = e.target.value;

    if(numbers === numbersMir) {
        images.forEach(element => {
            element.classList.add('negative-scale');
        });
        
        images[5].classList.add('scale');
    }

    if (numbers.length <= 0) {
        console.log('Не очень');
    }
    else if (checkLuhn(numbers)) {
        clickButton();
        console.log('Всё хорошо');
    }
    else {
        console.log('Не очень');
    }

    checkNumbersCard(numbers);
});

const clickButton = () => {
    btn.addEventListener('click', () => {
        input.classList.add('input__field_successful-check');
    });
}

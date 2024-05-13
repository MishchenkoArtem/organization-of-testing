import {
    input,
    btn,
    span,
    images,
    numbersMaestro,
    numberVisa,
    numberMasterCard,
    numberAmericanExpress,
    numberDiscover,
    numberMir,
    cardMaestro,
    cardVisa,
    cardMaster,
    cardAmericanExpress,
    cardDiscover,
    cardMir,
} from "./constans.js";
import { checkLuhn } from "./luhnAlgorithm.js";

input.addEventListener("input", (e) => {
    const numbers = (span.innerHTML = e.target.value);

    // --- Проверка ввода с номерами карты
    const findNumbers = (item) => {
        const number = item.find((element) => element === numbers);
        return number;
    };

    // --- Увиличение изображения лого карты
    const changeImages = (card) => {
        images.forEach((item) => {
            item.classList.add("hiding-objects");
        });

        card.classList.add("card-xl");
    };

    
    if (findNumbers(numbersMaestro)) {
        changeImages(cardMaestro);
    } 
    else if (numbers === "4" || findNumbers(numberVisa)) {
        changeImages(cardVisa);
    } 
    else if (findNumbers(numberMasterCard)) {
        changeImages(cardMaster);
    } 
    else if (findNumbers(numberAmericanExpress)) {
        changeImages(cardAmericanExpress);
    } 
    else if (findNumbers(numberDiscover)) {
        changeImages(cardDiscover);
    } 
    else if (findNumbers(numberMir)) {
            changeImages(cardMir);
        }
    else {
        images.forEach((element) => {
            element.classList.remove("hiding-objects", "card-xl");
        });
    }

    const buttonClick = () => {
        btn.addEventListener("click", () => {
            input.classList.add("successful-check");
        });
        input.addEventListener("keyup", (e) => {
            if (e.code === "Enter") {
                input.classList.add("successful-check");
            }
        });
    }

    // --- Кнопка активна если номер введен корректно
    if (numbers.length >= 16) {
        if (checkLuhn(numbers)) {
            btn.disabled = false;
            btn.classList.add("field__button_btn_active");
            buttonClick();
        }
    }
    // --- Кнопка не активна если номер введен не корректно
    else {
        btn.disabled = true;
        btn.classList.remove("field__button_btn_active");
        input.classList.remove("successful-check");
    }
});

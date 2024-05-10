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

  // --- Проверка карты "Маестро"
  if (findNumbers(numbersMaestro)) {
    changeImages(cardMaestro);
  }
  // --- Проверка карты "Виза"
  else if (numbers === "4" || findNumbers(numberVisa)) {
    changeImages(cardVisa);
  }
  // --- Проверка карты "Мастер Кадр"
  else if (findNumbers(numberMasterCard)) {
    changeImages(cardMaster);
  }
  // --- Проверка карты "Америка экспресс"
  else if (findNumbers(numberAmericanExpress)) {
    changeImages(cardAmericanExpress);
  }
  // --- Проверка карты "Дисковер"
  else if (findNumbers(numberDiscover)) {
    changeImages(cardDiscover);
  }
  // --- Проверка карты "Мир"
  else if (findNumbers(numberMir)) {
    changeImages(cardMir);
  }
  // --- Если проверка не прошла
  else {
    images.forEach((element) => {
      element.classList.remove("hiding-objects", "card-xl");
    });
  }

  const enabledButton = () => {
    btn.style = "opacity: 1;";
    btn.disabled = false;
    input.classList.add("successful-check");
  }

  const disabledButton = () => {
    btn.style = "opacity: .5;";
    btn.disabled = true;
    input.classList.remove("successful-check");
  }

  if (numbers.length >= 16) {
    if (checkLuhn(numbers)) {
      btn.addEventListener("click", enabledButton);
    }
  } else if (numbers.length < 16) {
    disabledButton();
    btn.removeEventListener("click", enabledButton);
  }
});

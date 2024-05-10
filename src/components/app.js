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
  cardMir
} from "./constans.js";
import { checkLuhn } from "./luhnAlgorithm.js";
import { addNumbers } from "./addNumber.js";

input.addEventListener("input", (e) => {
  const numbers = (span.innerHTML = e.target.value);

  const findNumbers = (item) => {
    const number = item.find((element) => element === numbers);
    return number;
  };

  const changeImages = (card) => {
    images.forEach((item) => {
      item.classList.add("hiding-objects");
    });

    card.classList.add("card-xl");
  };

  if (findNumbers(numbersMaestro)) {
    changeImages(cardMaestro);
  } else if (numbers === "4" || findNumbers(numberVisa)) {
    changeImages(cardVisa);
  } else if (findNumbers(numberMasterCard)) {
    changeImages(cardMaster);
  } else if (findNumbers(numberAmericanExpress)) {
    changeImages(cardAmericanExpress);
  } else if (findNumbers(numberDiscover)) {
    changeImages(cardDiscover);
  } else if (findNumbers(numberMir)) {
    changeImages(cardMir);
  } else {
    images.forEach((element) => {
      element.classList.remove("hiding-objects", "card-xl");
    });
  }

  if (numbers.length <= 0) {
    console.log("Не очень");
  } else if (checkLuhn(numbers)) {
    clickButton();
    console.log("Всё хорошо");
  } else {
    console.log("Не очень");
  }

  addNumbers(numbers);
});

const clickButton = () => {
  btn.addEventListener("click", () => {
    input.classList.add("input__field_successful-check");
  });
};

import {
  input,
  btn,
  span,
  images,
  numbersMaestro,
  cardMaestro,
} from "./constans.js";
import { checkLuhn } from "./luhnAlgorithm.js";
import { addNumbers } from "./addNumber.js";

input.addEventListener("input", (e) => {
  const numbers = (span.innerHTML = e.target.value);

  const findNumbers = (item) => {
    const number = item.find((element) => element === numbers);
    return number;
  };

  const changeImages = (img) => {
    images.forEach((item) => {
      item.classList.add("negative-scale");
    });

    img.classList.add("scale");
  };

  if (findNumbers(numbersMaestro)) {
    changeImages(cardMaestro);
  }

  // --- Проверка карты "Мир"
  if (numbers === "22") {
    images.forEach((element) => {
      element.classList.add("negative-scale");
    });

    images[5].classList.add("scale");
  }
  // --- Проверка карты "Visa"
  else if (numbers === "4") {
    images.forEach((element) => {
      element.classList.add("negative-scale");
    });

    images[0].classList.add("scale");
  }
  // --- Проверка карты "Master Card"
  else if (numbers === "5") {
    images.forEach((element) => {
      element.classList.add("negative-scale");
    });

    images[1].classList.add("scale");
  }
  // --- Проверка карты "American Express"
  else if (numbers === "3") {
    images.forEach((element) => {
      element.classList.add("negative-scale");
    });

    images[2].classList.add("scale");
  }
  // --- Проверка карты "Dicscover"
    // else if (numbers === "6") {
    //   images.forEach((element) => {
    //     element.classList.add("negative-scale");
    //   });

    //   images[3].classList.add("scale");
    // }
  // --- Проверка на несоответствие, сброс к начальному состоянию
  else {
    images.forEach((element) => {
      element.classList.remove("negative-scale", "scale");
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
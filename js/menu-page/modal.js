// ========================================================================================
//
// ========================================================================================
import JSON from "./products.json" with  { type: "json" };

const prducts = [...JSON];
const price = {
  S: 0.0,
  M: 0.5,
  L: 1.0,
};

const overlay = document.querySelector(".overlay");
const menuBlock = document.querySelector(".menu__block");
const modal = document.createElement("div");
const body = document.querySelector(".body");

//  функция отрисовки модального окна
function drawModal(itemTitle) {
  //обьект выбранной карточки
  let [product] = prducts.filter((item) => item.name === itemTitle);
  let { img, name, description, price, category, sizes, additives } = product;
  //   массив с буквенным обозначением размера
  let sizesArr = Object.entries(sizes).reduce((acc, item) => {
    acc.push(item[0]);
    return acc;
  }, []);
  //   массив с обьемами
  let volumeArr = Object.entries(sizes).reduce((acc, item) => {
    acc.push(item[1].size);
    return acc;
  }, []);
  // массив с добавками
  let additivesArr = additives.reduce((acc, item) => {
    acc.push(item.name);
    return acc;
  }, []);
  let modalPriceForSize = 0;
  modal.classList.add("modal");
  const modalInner = `<div class="modal__image">
<img
  src='${img}'
  alt=${name}
>
</div>
<div class="modal__content">
<h2 class="modal__title">${name}</h2>
<p class="modal__description">
${description}
</p>
<h3 class="modal__subtitle">Size</h3>
<div class="modal__button-container">
  <div class="modal__button modal__button-size modal__button-selected">
    <div class="modal__sign-button">${sizesArr[0]}</div>
    ${volumeArr[0]}
  </div>
  <div class="modal__button modal__button-size">
    <div class="modal__sign-button">${sizesArr[1]}</div>
    ${volumeArr[1]}
  </div>
  <div class="modal__button modal__button-size">
    <div class="modal__sign-button">${sizesArr[2]}</div>
    ${volumeArr[2]}
  </div>
</div>
<h3 class="modal__subtitle">Additives</h3>
<div class="modal__button-container">
  <div class="modal__button modal__button-additives">
    <div class="modal__sign-button">1</div>
    ${additivesArr[0]}
  </div>
  <div class="modal__button modal__button-additives">
    <div class="modal__sign-button">2</div>
    ${additivesArr[1]}
  </div>
  <div class="modal__button modal__button-additives">
    <div class="modal__sign-button">3</div>
    ${additivesArr[2]}
  </div>
</div>
<div class="modal__total">
  <div>Total:</div>
  <div class="modal__price">$${price}</div>
</div>
<div class="modal__information">
  The cost is not final. Download our mobile app to see the final
  price and place your order. Earn loyalty points and enjoy your
  favorite coffee with up to 20% discount.
</div>
<div class="modal__button-close">Close</div>
</div>`;

  modal.innerHTML = modalInner;
  overlay.prepend(modal);
}

// Закрытие модального окна
function closeModal() {
  overlay.classList.remove("modal-open");
  modal.classList.remove("modal-open");
  body.classList.remove("overflow-hidden");
}
// открытие модального окна
function openModal() {
  overlay.classList.add("modal-open");
  modal.classList.add("modal-open");
  body.classList.add("overflow-hidden");
}

// ========================================================================================
// Обработка события по клику на block__showcase
// ========================================================================================
menuBlock.addEventListener("click", function (e) {
  const clicktedItem = e.target.closest(".item");
  if (!clicktedItem) {
    return;
  }

  let itemTitle = clicktedItem.querySelector(".item__title").textContent;

  drawModal(itemTitle);
  openModal();
});

// ========================================================================================
// обработка событя по клику на overlay и modal__button-close
// ========================================================================================

overlay.addEventListener("click", function (e) {
  const clickedCloseButton = e.target.closest(".modal__button-close");

  if (!clickedCloseButton && overlay !== e.target) {
    return;
  } else {
    closeModal();
  }
});

// ========================================================================================
// обработка событя по клику на модалье окно
// ========================================================================================
modal.addEventListener("click", function (e) {
  const clickedModalSizeButtons = document.querySelectorAll(
    ".modal__button-size"
  );
  let modalPrice = +document
    .querySelector(".modal__price")
    .textContent.slice(1);

  const clickedModalButtonSize = e.target.closest(".modal__button-size");
  const clickedModalButtonAdditives = e.target.closest(
    ".modal__button-additives"
  );
  //   если нажали на выбор добавок
  if (clickedModalButtonAdditives) {
    console.log(clickedModalButtonAdditives);
    clickedModalButtonAdditives.classList.toggle("modal__button-selected");
    if (
      clickedModalButtonAdditives.classList.contains("modal__button-selected")
    ) {
      modalPrice += 0.5;
    } else {
      modalPrice -= 0.5;
    }
    // меняем конечную цену
    document.querySelector(
      ".modal__price"
    ).textContent = `$${modalPrice.toFixed(2)}`;
  }
  //   если нажали на выбор размера (обьема)
  else if (clickedModalButtonSize) {
    // считаем цену при изменении размера
    clickedModalSizeButtons.forEach((item) => {
      if (item.classList.contains("modal__button-selected")) {
        modalPrice -=
          price[item.querySelector(".modal__sign-button").textContent];
      }

      item.classList.remove("modal__button-selected");
    });
    clickedModalButtonSize.classList.add("modal__button-selected");
    modalPrice +=
      price[
      clickedModalButtonSize.querySelector(".modal__sign-button").textContent
      ];
    // меняем конечную цену
    document.querySelector(
      ".modal__price"
    ).textContent = `$${modalPrice.toFixed(2)}`;
  } else if (!clickedModalButtonSize || !clickedModalButtonAdditives) {
    return;
  }
});

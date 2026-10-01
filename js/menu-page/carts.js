import JSON from "./products.json" with  { type: "json" };
const prducts = [...JSON];




//  функция карточки
function drawProductCard(img, name, description, price) {

  const item = document.createElement('div')
  item.classList.add('lock__item')
  item.classList.add('item')
  const itemImage = document.createElement('div')
  itemImage.classList.add('item__image')
  const image = document.createElement('img')
  image.src = img;
  image.alt = name;


  const itemContent = document.createElement('div')
  itemContent.classList.add('item__content')
  const itemTitle = document.createElement('p')
  itemTitle.classList.add('item__title')
  itemTitle.textContent = name
  const itemDescription = document.createElement('p')
  itemDescription.classList.add('item__description')
  itemDescription.textContent = description
  const itemPrice = document.createElement('p')
  itemPrice.classList.add('item__price')
  itemPrice.textContent = `$${price}`
  itemContent.appendChild(itemTitle);
  itemContent.appendChild(itemDescription);
  itemContent.appendChild(itemPrice);

  itemImage.appendChild(image);
  item.appendChild(itemImage);
  item.appendChild(itemContent)
  return item


}



document.addEventListener('DOMContentLoaded', () => {

  const blockShowcase1 = document.querySelector(".block__showcase-1");
  const blockShowcase2 = document.querySelector(".block__showcase-2");
  const blockShowcase3 = document.querySelector(".block__showcase-3");

  for (let i = 0; i <= prducts.length - 1; i++) {

    let { img, name, description, price, category, others } = prducts[i]
    const productCard = drawProductCard(img, name, description, price)
    if (category === "coffee") { blockShowcase1.appendChild(productCard); }
    if (category === "tea") { blockShowcase2.appendChild(productCard); }
    if (category === "dessert") { blockShowcase3.appendChild(productCard); }
  }
});

const nodes = {}
// ========================================================================================
// mobile menu
// ========================================================================================
function headerBurgerHeandler() {
  nodes.headerBurger.classList.toggle("burger-open");
  nodes.body.classList.toggle("overflow-hidden");
  nodes.menuHeader.classList.toggle("burger-open");
}

function menuHeaderHeandler() {
  if (nodes.headerBurger.classList.contains("burger-open")) {
    nodes.body.classList.remove("overflow-hidden");
    nodes.menuHeader.classList.remove("burger-open");
    nodes.headerBurger.classList.remove("burger-open");
  }
}


export function initBurger() {
  nodes.headerBurger = document.querySelector(".header__burger");
  nodes.body = document.querySelector(".body");
  nodes.menuHeader = document.querySelector(".menu-header");
  nodes.headerBurger.addEventListener("click", headerBurgerHeandler);
  nodes.menuHeader.addEventListener("click", menuHeaderHeandler);
  document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

      menuHeaderHeandler()
    }
  });

}




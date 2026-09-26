
const nodes = {}

function swithDarkTheme() {
  if (nodes.logo)
    nodes.logo.src = "./../assets/images/logo_dark_theme.svg"
  if (nodes.headerBtnImg)
    nodes.headerBtnImg.src = "./../assets/images/icons/coffee-cup_dark.svg"
  if (nodes.enjoyBtnImg)
    nodes.enjoyBtnImg.src = "./../assets/images/icons/coffee-cup_dark.svg"
}


function swithLightTheme() {
  if (nodes.logo)
    nodes.logo.src = "./../assets/images/logo.svg"
  if (nodes.headerBtnImg)
    nodes.headerBtnImg.src = "./../assets/images/icons/coffee-cup.svg"
  if (nodes.enjoyBtnImg)
    nodes.enjoyBtnImg.src = "./../assets/images/icons/coffee-cup.svg"
}



function handleToggleBtn() {
  nodes.htmlEl.classList.toggle('dark');
  if (nodes.htmlEl.classList.contains('dark')) {
    swithDarkTheme()
    localStorage.setItem('theme', 'dark');
  } else {
    swithLightTheme()
    localStorage.setItem('theme', 'light');
  }
}

export function initSwithTheme() {
  nodes.toggleBtn = document.getElementById('theme-toggle');
  nodes.headerBtnImg = document.getElementById('header__button');
  nodes.enjoyBtnImg = document.getElementById('enjoy__button');
  nodes.logo = document.querySelector('.logo').firstElementChild;
  nodes.htmlEl = document.documentElement;
  nodes.savedTheme = localStorage.getItem('theme');
  nodes.toggleBtn.addEventListener('click', () => { handleToggleBtn() });
  if (nodes.savedTheme === 'dark') {
    nodes.htmlEl.classList.add('dark');
    swithDarkTheme()
  }
  if (nodes.savedTheme === 'light') {
    swithLightTheme()
  }
}

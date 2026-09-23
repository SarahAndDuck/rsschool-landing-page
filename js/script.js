const toggleBtn = document.getElementById('theme-toggle');
const headerBtnImg = document.getElementById('header__button');
const enjoyBtnImg = document.getElementById('enjoy__button');
const logo = document.querySelector('.logo').firstElementChild;
// const switchDarkBtn = document.querySelector('.theme-switch-header__dark').getElementsByTagName('svg')[0].getElementsByTagName('path')[0];

const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('theme');


// toggleBtn.addEventListener('mouseenter', () => {
//   if (switchDarkBtn) switchDarkBtn.setAttribute('fill', '#403e3c');
// });
// toggleBtn.addEventListener('mouseleave', () => {
//   if (switchDarkBtn) switchDarkBtn.setAttribute('fill', '#E1D4C9');
// });


function swithDarkTheme() {
  if (logo)
    logo.src = "./../assets/images/logo_dark_theme.svg"
  if (headerBtnImg)
    headerBtnImg.src = "./../assets/images/icons/coffee-cup_dark.svg"
  if (enjoyBtnImg)
    enjoyBtnImg.src = "./../assets/images/icons/coffee-cup_dark.svg"


}


function swithLightTheme() {
  if (logo)
    logo.src = "./../assets/images/logo.svg"
  if (headerBtnImg)
    headerBtnImg.src = "./../assets/images/icons/coffee-cup.svg"
  if (enjoyBtnImg)
    enjoyBtnImg.src = "./../assets/images/icons/coffee-cup.svg"


}
if (savedTheme === 'dark') {
  htmlEl.classList.add('dark');
  swithDarkTheme()
}
if (savedTheme === 'light') {
  swithLightTheme()
}

// 2. Обрабатываем клик по кнопке
toggleBtn.addEventListener('click', (e) => {

  console.log(toggleBtn);


  htmlEl.classList.toggle('dark');

  // 3. Сохраняем текущее состояние в localStorage
  if (htmlEl.classList.contains('dark')) {
    swithDarkTheme()
    localStorage.setItem('theme', 'dark');

  } else {
    swithLightTheme()
    localStorage.setItem('theme', 'light');
  }
});
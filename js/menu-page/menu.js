const blockTabContainer = document.querySelector(".block__tab-container");
const blockTabs = document.querySelectorAll(".block__tab");
const blockShowcases = document.querySelectorAll(".block__showcase");
const blockRefresh = document.querySelector(".block__refresh");

let screenWidth = window.screen.width;
let blockItems = document
  .querySelector(".block__showcase-active")
  .querySelectorAll(".block__item");
let activBlockShowcase = blockShowcases[0];

// ========================================================================================
// switching categories
// ========================================================================================

blockTabContainer.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".block__tab");
  //  Guard clause
  if (!clickedTab) {
    return;
  }

  blockTabs.forEach((item) => {
    item.classList.remove("block__tab-active");
  });

  blockShowcases.forEach((item) => {
    item.classList.remove("block__showcase-active");
  });

  clickedTab.classList.add("block__tab-active");

  const activBlockShowcase = document.querySelector(
    `.block__showcase-${clickedTab.dataset.tab}`
  );
  activBlockShowcase.classList.add("block__showcase-active");

  toggleRefresh();
});

// ========================================================================================
//
// ========================================================================================
function toggleRefresh() {
  let blockItemsCount = document
    .querySelector(".block__showcase-active")
    .querySelectorAll(".block__item").length;
  blockItems = document
    .querySelector(".block__showcase-active")
    .querySelectorAll(".block__item");

  if (screenWidth <= 768 && blockItemsCount > 4) {
    blockRefresh.classList.add("active");
    blockItems.forEach((item, i) => {
      if (i > 3) {
        item.classList.add("remove");
      }
    });
  } else {
    blockRefresh.classList.remove("active");
    blockItems.forEach((item, i) => {
      if (i > 3) {
        item.classList.remove("remove");
      }
    });
  }
}
toggleRefresh();

window.addEventListener("resize", (e) => {
  screenWidth = e.target.innerWidth;
  console.log(screenWidth);
  toggleRefresh();

});

blockRefresh.addEventListener("click", function () {
  blockRefresh.classList.remove("active");
  blockItems = document
    .querySelector(".block__showcase-active")
    .querySelectorAll(".block__item");
  blockItems.forEach((item, i) => {
    if (i > 3) {
      item.classList.remove("remove");
    }
  });
});

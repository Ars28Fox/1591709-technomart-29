const tabsBtn = document.querySelectorAll('.tab__button');
const tabsItems = document.querySelectorAll('.tab__item');
const removeActiveFromTabBtn = () => tabsBtn.forEach(btn => btn.classList.remove('tab__button--active'));

tabsBtn.forEach(function (btnItem) {

  btnItem.addEventListener('click', function (e) {
    e.preventDefault();
    let currentBtn = btnItem;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    removeActiveFromTabBtn();
    btnItem.classList.add('tab__button--active');

    if (!currentTab.classList.contains('tab__item--active')) {
      tabsItems.forEach(function (tabItem) {
        tabItem.classList.remove('tab__item--active');
      });

      currentTab.classList.add('tab__item--active');
    }

  });

  btnItem.addEventListener('focus', function (e) {
    e.preventDefault();
    let currentBtn = btnItem;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    removeActiveFromTabBtn();
    btnItem.classList.add('tab__button--active');

    if (!currentTab.classList.contains('tab__item--active')) {
      tabsItems.forEach(function (tabItem) {
        tabItem.classList.remove('tab__item--active');
      });

      currentTab.classList.add('tab__item--active');
    }

  });
});

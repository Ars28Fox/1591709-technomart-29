const buyLink = document.querySelectorAll('.product-item__actions-button-buy');
const buyPopup = document.querySelector('.modal-buy');
const buyClose = buyPopup.querySelector('.modal__close');
const buyCloseShopLink = buyPopup.querySelector('.modal-buy__shop-link');
const orderLink = buyPopup.querySelector('.modal-buy__order-link');

// Const for tabs repeat
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const firstFocusableElement = buyPopup.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = buyPopup.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

let currentBuyLink = null;

buyLink.forEach(function (buyBtn) {
  buyBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    currentBuyLink = buyBtn;
    buyPopup.classList.add('modal--active');
    orderLink.focus();
  });
});

buyClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove('modal--active');
  currentBuyLink.closest('.product-item').focus();
  currentBuyLink.focus();
});

buyCloseShopLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove('modal--active');
  currentBuyLink.closest('.product-item').focus();
  currentBuyLink.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains('modal--active')) {
      evt.preventDefault();
      buyPopup.classList.remove('modal--active');
      currentBuyLink.closest('.product-item').focus();
      currentBuyLink.focus();
    }
  }
});

window.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();

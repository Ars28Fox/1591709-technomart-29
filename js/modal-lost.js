const lostLink = document.querySelector('.contacts__lost-link');
const lostPopup = document.querySelector('.modal-lost');
const lostClose = lostPopup.querySelector('.modal__close');
const lostName = document.getElementById('fullname-field');
const lostForm = lostPopup.querySelector('.modal-lost__form');
const lostEmail = document.getElementById('email-field');
const lostMessage = lostPopup.querySelector('.modal-lost__field-textarea');

// Const for tabs repeat
const focusableElementsLost = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const firstFocusableElementLost = lostPopup.querySelectorAll(focusableElementsLost)[0]; // get first element to be focused inside modal
const focusableContentLost = lostPopup.querySelectorAll(focusableElementsLost);
const lastFocusableElementLost = focusableContentLost[focusableContentLost.length - 1]; // get last element to be focused inside modal

let isStorageSupport = true;
let fullname = "";
let email = "";

try {
  fullname = localStorage.getItem('fullname');
  email = localStorage.getItem('email');
  if (fullname) {
    lostName.value = fullname;
  }
  if (email) {
    lostEmail.value = email;
  }
} catch (err) {
  isStorageSupport = false;
}

lostLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  lostPopup.classList.add('modal--active');

  if (fullname && !email) {
    lostEmail.focus();
  }
  if (email && !fullname) {
    lostName.focus();
  }
  if (email && fullname) {
    lostMessage.focus();
  }
});

lostClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  lostPopup.classList.remove('modal--active');
  lostPopup.classList.remove('modal--error');
  lostLink.focus();
});

lostForm.addEventListener('submit', function (evt) {
  if (!lostName.value || !lostEmail.value || !lostMessage.value) {
    evt.preventDefault();
    lostPopup.classList.remove('modal--error');
    lostPopup.offsetWidth = lostPopup.offsetWidth;
    lostPopup.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('fullname', lostName.value);
      localStorage.setItem('email', lostEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains('modal--active')) {
      evt.preventDefault();
      lostPopup.classList.remove('modal--active');
      lostPopup.classList.remove('modal--error');
      lostLink.focus();
    }
  }
});

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElementLost) {
      lastFocusableElementLost.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElementLost) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElementLost.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElementLost.focus();

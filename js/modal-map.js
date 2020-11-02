const mapLink = document.querySelector('.contacts__map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal__close');
const mapTabTrap = mapPopup.querySelector('.modal-map__tab-trap');

// Const for tabs repeat
const focusableElementsMap = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const firstFocusableElementMap = mapPopup.querySelectorAll(focusableElementsMap)[0]; // get first element to be focused inside modal
const focusableContentMap = mapPopup.querySelectorAll(focusableElementsMap);
const lastFocusableElementMap = focusableContentMap[focusableContentMap.length - 1]; // get last element to be focused inside modal

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal--active');
  mapTabTrap.focus();
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal--active');
  mapLink.focus();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal--active')) {
      mapPopup.classList.remove('modal--active');
      mapLink.focus();
    }
  }
});

window.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElementMap) {
      lastFocusableElementMap.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElementMap) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElementMap.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElementMap.focus();

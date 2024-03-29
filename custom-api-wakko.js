console.log('Working Custom API Wakko ! ...');

// ! variables

let urlColorsCustomApiWakko = 'https://agusc01.github.io/api-wakko/colors-custom-api-wakko.json';
// let urlColorsCustomApiWakko = './colors-custom-api-wakko.json'
let lastScroll = 0;
const timeToUpdateJsonColorsAfterScrollingDonw = 2000;
let jsonColors = null;
let onceColorsOnFilter = true;
let lastQuantityOfProducts = 0;

// ! Functions
ajaxCustomApiWakko(urlColorsCustomApiWakko, functionColorsCustomApiWakko);
functionFAQOnProduct();

// ! Events

window.addEventListener(
  'scroll',
  functionDebounce(() => {
    if (functionIncreaseQuantityOfProducts() && functionScrollDownDetect()) {
      ajaxCustomApiWakko(urlColorsCustomApiWakko, functionColorsCustomApiWakko);
      console.log('update colours & ask price remove');
      // console.log('down');
    }
    // else {
    //   console.log('up');
    // }
  }, timeToUpdateJsonColorsAfterScrollingDonw)
);

// ! Function's declarations

function functionRemoveAskPriceAndWithoutStock() {
  let products = document.querySelectorAll('input.js-addtocart');
  products.forEach((product) => {
    let string = product.value.toLowerCase();
    if (string == 'consultar precio' || string == 'sin stock') {
      product.style.display = 'none';
    }
  });
}

function functionIncreaseQuantityOfProducts() {
  let now = document.querySelectorAll('.js-item-product').length;
  if (now > lastQuantityOfProducts) {
    lastQuantityOfProducts = now;
    return true;
  }
  return false;
}

function functionScrollDownDetect() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

  if (currentScroll > 0 && lastScroll <= currentScroll) {
    lastScroll = currentScroll;
    // ? true when it's down
    return true;
  }
  //  else {
  //   lastScroll = currentScroll;
  //   // ? false when it's up
  //   return false;
  // }
  return false;
}

function functionDebounce(callback, wait) {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

function functionFAQOnProduct() {
  try {
    let container = document.querySelector('.product-description.user-content');
    if (container) {
      container.innerHTML += `<p><a href="/preguntas-frecuentes" target="_blank" style="text-decoration:underline"><strong>PREGUNTAS FRECUENTES</strong></a><br><br> # Muchas Gracias por confiar en nosotros.</p>`;
    }
  } catch (error) {
    console.warn(error);
  }
}

function ajaxCustomApiWakko(url, cFunction) {
  if (jsonColors == null) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      jsonColors = JSON.parse(this.response);
      cFunction(jsonColors);
    };
    xhttp.open('GET', url);
    xhttp.send();
  } else {
    cFunction(jsonColors);
  }
  // functionRemoveAskPriceAndWithoutStock();
}

function functionColorsCustomApiWakko(xhttp) {
  functionColorsOnProductCustomApiWakko('div a .btn-variant-content', xhttp);

  if (onceColorsOnFilter) {
    functionColorsOnFiltersCustomApiWakko("[data-store='filters-group'] label span.checkbox", xhttp);
    onceColorsOnFilter = false;
  }
}

function functionColorsOnProductCustomApiWakko(selector, jsonColors) {
  try {
    let selectorColors = document.querySelectorAll(selector);
    let lenghtColours = jsonColors.length;
    selectorColors.forEach((selectorColor) => {
      for (let i = 0; i < lenghtColours; i++) {
        if (jsonColors[i].name == selectorColor.textContent) {
          let link = selectorColor.parentElement;
          link.style.backgroundColor = jsonColors[i].backGround;
          link.style.color = jsonColors[i].color;
          break;
        }
      }
    });
  } catch (error) {
    console.warn(error);
  }
}

function functionColorsOnFiltersCustomApiWakko(selector, jsonColors) {
  try {
    let selectorColors = document.querySelectorAll(selector);
    selectorColors.forEach((selectorColor) => {
      jsonColors.forEach((jsonColor) => {
        if (jsonColor.name == selectorColor.innerText.split(' (')[0]) {
          let span = document.createElement('span');
          span.classList.add('checkbox-color');
          span.style.backgroundColor = jsonColor.backGround;
          selectorColor.append(span);
        }
      });
    });
  } catch (error) {
    console.warn(error);
  }
}

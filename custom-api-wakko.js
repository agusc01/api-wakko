console.log('Working Custom API Wakko ! ...');

let urlColorsCustomApiWakko = 'https://agusc01.github.io/api-wakko/colors-custom-api-wakko.json';
// let urlColorsCustomApiWakko = './colors-custom-api-wakko.json'
ajaxCustomApiWakko(urlColorsCustomApiWakko, functionColorsCustomApiWakko);
functionFAQOnProduct();

// ? You have to use when you use "silent" interface
// ? Now, we are using "rio" interface
// functionStayCenterPills();
// bannerWrapper();
// functionSeeSizes();
// document.addEventListener('scroll', functionSeeSizes);

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
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    cFunction(this);
  };
  xhttp.open('GET', url);
  xhttp.send();
}

function functionColorsCustomApiWakko(xhttp) {
  let response = JSON.parse(xhttp.response);

  functionColorsOnProductCustomApiWakko('div a .btn-variant-content', response);

  functionColorsOnFiltersCustomApiWakko("[data-store='filters-group'] label span.checkbox", response);
}

function functionColorsOnProductCustomApiWakko(selector, jsonColors) {
  try {
    let selectorColors = document.querySelectorAll(selector);
    selectorColors.forEach((selectorColor) => {
      jsonColors.forEach((jsonColor) => {
        if (jsonColor.name == selectorColor.textContent) {
          selectorColor.style.backgroundColor = jsonColor.backGround;
          selectorColor.style.color = jsonColor.color;
        }
      });
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

// ! Not use with "rio" interface. You could use with "silent" interface or a similar interface
/*
function functionStayCenterPills() {
  try {
    document.querySelector('.pills-container').classList.remove('text-left-xs');
  } catch (error) {
    console.warn(error);
  }
}

function bannerWrapper() {
  try {
    let banner = document.querySelector('.banner-wrapper');
    let categories = document.querySelectorAll('.banner-wrapper > .span6');
    if (categories.length < 3) {
      let newCategory = `
                <div class="row-fluid banner-wrapper custom-banner1" data-store="banner-home-categories">
                    <div class="span4">
                        <div class="textbanner text-center">
                            <a class="banner-with-text-link" href="https://wakko.mitiendanube.com/bazar/" title="Bazar" aria-label="Bazar">
                                <div class="textbanner-image overlay">
                                    <img class="textbanner-image-background lazyautosizes lazyload blur-up-big" src="https://agusc01.github.io/api-wakko/assets/images/banner/4432.jpg" data-sizes="auto" data-expand="-10" alt="Bazar"> 
                                    <div class="placeholder-shine"></div>
                                </div>
                                <div class="textbanner-text">
                                    <div class="textbanner-title">Bazar</div>
                                    <div class="textbanner-paragraph">Productos Nacionales !</div>
                                    <div class="btn btn-primary">Ver más productos</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="span4">
                        <div class="textbanner text-center">
                            <a class="banner-with-text-link" href="https://wakko.mitiendanube.com/estancia-don-juan/" title="Estancia Don Juan" aria-label="Estancia Don Juan">
                                <div class="textbanner-image overlay">
                                    <img class="textbanner-image-background lazyautosizes lazyload blur-up-big" src="https://agusc01.github.io/api-wakko/assets/images/banner/721.jpg" data-sizes="auto" data-expand="-10" alt="Estancia Don Juan"> 
                                    <div class="placeholder-shine"></div>
                                </div>
                                <div class="textbanner-text">
                                    <div class="textbanner-title">Estancia Don Juan</div>
                                    <div class="textbanner-paragraph">Productos Nacionales !</div>
                                    <div class="btn btn-primary">Ver más productos</div>
                                </div>
                            </a>
                        </div>
                    </div>    
                </div>               
                `;
      // TODO: Take off jQuery . jQuery is on tiendanube by default
      $('.banner-wrapper > .span6').closest('div.container-fluid').append(newCategory);
      banner.classList.add('custom-banner1');
      categories.forEach((category) => {
        category.classList.add('span4');
        category.classList.remove('span6');
      });
    }
  } catch (error) {
    console.warn(error);
  }
}

function renderVariante(mensaje, href) {
  return `
    <div class="js-color-variant-available-1 js-color-variant-active" data-value="variation_1" data-option="0">
        <div class="item-colors">
            <a href="${href}" class="item-colors-bullet item-colors-bullet-text visible-phone">${mensaje}</a>
                <div class="hidden-phone">
                    <a href="${href}" class="item-colors-bullet item-colors-bullet-text" title="">${mensaje}</a>
                </div>
        </div>
    </div>`;
}


function functionSeeSizes() {
  let items = document.querySelectorAll('.js-item-variants');
  items.forEach((item) => {
    try {
      let variant = item.querySelector('.variant-label').innerText;
      variant = variant.toLowerCase().trim();
      if (variant == 'tamaño') {
        let cantidades = item.querySelectorAll('form select option').length;
        if (cantidades > 1) {
          let href = item.parentNode.querySelector('a').href;
          let message = `${cantidades} ${variant}S`;
          let render = renderVariante(message, href);
          item.insertAdjacentHTML('afterend', render);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  });
}
*/

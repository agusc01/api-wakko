console.log("Working Custom API Wakko ! ...");

let urlColorsCustomApiWakko = 'https://agusc01.github.io/api-wakko/colors-custom-api-wakko.json'
// let urlColorsCustomApiWakko = './colors-custom-api-wakko.json'
ajaxCustomApiWakko(urlColorsCustomApiWakko, functionColorsCustomApiWakko);
functionStayCenterPills();
bannerWrapper();
 
function ajaxCustomApiWakko(url, cFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}

function functionColorsCustomApiWakko(xhttp) {
    let response = JSON.parse(xhttp.response);
    
    functionColorsOnProductCustomApiWakko("div a .btn-variant-content",response );

    functionColorsOnFiltersCustomApiWakko("[data-store='filters-group'] label span.checkbox",response );
}

function functionColorsOnProductCustomApiWakko(selector,jsonColors){
    try {
        let selectorColors = document.querySelectorAll(selector);
        selectorColors.forEach(selectorColor=>{
            jsonColors.forEach(jsonColor=>{
                if(jsonColor.name == selectorColor.textContent){
                    selectorColor.style.backgroundColor = jsonColor.backGround;
                    selectorColor.style.color = jsonColor.color;
                }
            })
        })
    } catch (error) {
        console.warn(error)
    }
}

function functionColorsOnFiltersCustomApiWakko(selector,jsonColors){
    try {
        let selectorColors = document.querySelectorAll(selector);
        selectorColors.forEach(selectorColor=>{
            jsonColors.forEach(jsonColor=>{
                if(jsonColor.name == selectorColor.innerText.split(" (")[0]){
                    let span =  document.createElement("span");
                    span.classList.add("checkbox-color");
                    span.style.backgroundColor = jsonColor.backGround;
                    selectorColor.append(span);
                }
            })
        })
    } catch (error) {
        console.warn(error)
    }
}

function functionStayCenterPills(){
    try {
        document.querySelector(".pills-container").classList.remove("text-left-xs")
    } catch (error) {
        console.warn(error)
    }
}


function bannerWrapper(){
    try {
        // let banner = document.querySelector(".banner-wrapper");
        let categories = document.querySelectorAll(".banner-wrapper > .span6");
        if(categories.length < 3){
            let newCategory = `
                <div class="span4">
                    <div class="textbanner text-center">
                        <a class="banner-with-text-link" href="https://wakko.mitiendanube.com/decoracion/" title="Decoración" aria-label="Decoración">
                            <div class="textbanner-image overlay">
                                <img class="textbanner-image-background lazyautosizes lazyload blur-up-big" src="https://agusc01.github.io/api-wakko/assets/images/banner/12220.jpg" data-sizes="auto" data-expand="-10" alt="Decoración"> 
                                <div class="placeholder-shine"></div>
                            </div>
                            <div class="textbanner-text">
                                <div class="textbanner-title">Decoración</div>
                                <div class="textbanner-paragraph">Productos Nacionales !</div>
                                <div class="btn btn-primary">Ver más productos</div>
                            </div>
                        </a>
                    </div>
                </div>`;
            // TODO: Take off jQuery . jQuery is on tiendanube by default
            $(".banner-wrapper").append(newCategory);
            categories.forEach(category =>{
                category.classList.add("span4");
                category.classList.remove("span6");
            });
        }
        
    } catch (error) {
        console.warn(error);
    }
}
console.log("Working Custom API Wakko ! ...");

let urlColorsCustomApiWakko = 'https://agusc01.github.io/api-wakko/colors-custom-api-wakko.json'
// let urlColorsCustomApiWakko = './colors-custom-api-wakko.json'
ajaxCustomApiWakko(urlColorsCustomApiWakko, functionColorsCustomApiWakko);
 
function ajaxCustomApiWakko(url, cFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}

function functionColorsCustomApiWakko(xhttp) {
    let jsonColorsCustomApiJson = JSON.parse(xhttp.response);
    //on products
    functionColorsInProductCustomApiWakko("div a .btn-variant-content");

    //on filters
    functionColorsInProductCustomApiWakko("[data-store='filters-group'] label span.checkbox")
}

function functionColorsInProductCustomApiWakko(selector){
    try {
        let selectorColors = document.querySelectorAll(selector);
        selectorColors.forEach(selectorColor=>{
            jsonColorsCustomApiJson.forEach(jsonColor=>{
                if(jsonColor.name == selectorColor.textContent){
                    selectorColor.style.backgroundColor = jsonColor.backGround;
                    //TODO: text-color !
                }
            })
        })
    } catch (error) {
        console.warn(error)
    }
}

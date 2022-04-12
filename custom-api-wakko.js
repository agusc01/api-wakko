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
    let response = JSON.parse(xhttp.response);
    //on products
    functionColorsInProductCustomApiWakko("div a .btn-variant-content",response );

    //on filters
    functionColorsInProductCustomApiWakko("[data-store='filters-group'] label span.checkbox",response );
}

function functionColorsInProductCustomApiWakko(selector,jsonColors){
    try {
        let selectorColors = document.querySelectorAll(selector);
        selectorColors.forEach(selectorColor=>{
            jsonColors.forEach(jsonColor=>{
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

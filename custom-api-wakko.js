console.log("Working Custom API Wakko ! ...");

var urlColorsCustomApiWakko = 'https://agusc01.github.io/api-wakko/colors-custom-api-wakko.json'
var urlColorsCustomApiWakko = './colors-custom-api-wakko.json'
ajaxCustomApiWakko(urlColorsCustomApiWakko, functionColorsCustomApiWakko);
 
function ajaxCustomApiWakko(url, cFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}

var jsonColorsCustomApiJson;

function functionColorsCustomApiWakko(xhttp) {
    jsonColorsCustomApiJson = JSON.parse(xhttp.response);
    // global.forEach(color=>{console.log(color.nombre)})
    // global.forEach(color=>{console.log(color.backGround)})
    try {
        let colorsInProductCustomApiWakko = document.querySelectorAll("div a .btn-variant-content");
        colorsInProductCustomApiWakko.forEach(color=>{
            jsonColorsCustomApiJson.forEach(jsonColor=>{
                if(jsonColor.name == color.textContent){
                    color.style.backgroundColor = jsonColor.backGround;
                }
            })
        })
    } catch (error) {
        console.warn(error)
    }
    
}





// let coloress = document.querySelectorAll("[data-store='filters-group'] label span.checkbox")
// coloress.forEach(color=>{console.log(color.innerText.split(".")[0])})
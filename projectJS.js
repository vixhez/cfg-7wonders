var head = document.getElementsByTagName('HEAD')[0];

link.rel = 'stylesheet';  
link.type = 'text/css';     
link.href = './projectStyle.css';  


var map = document.getElementById("countries"),
Info = document.getElementById("Info"),
allCountries = map.querySelectorAll("g");
map.addEventListener("click", function(e){ 
    var country = e.target.parentNode;
    if(e.target.nodeName == "path") {
    for (var i=0; i < allCountries.length; i++) {
        allCountries[i].classList.remove("active");
    }
    country.classList.add("active");
    var countryName = country.querySelector("title").innerHTML,
    countryPara = country.querySelector("desc p");
    
    Info.innerHTML = "";
    Info.insertAdjacentHTML("afterbegin", "<h1>"+countryName+"</h1><p>"+countryPara.innerHTML+"</p>");
    Info.classList.add("show");
    }
})

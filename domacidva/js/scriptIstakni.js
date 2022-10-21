var uItems = document.getElementsByTagName("u");

var paragraf = document.getElementById("istakni");

paragraf.addEventListener("mouseover", function(){

    for(var i=0; i < uItems.length; i++) {
        uItems[i].style.fontWeight = "bold";
    }
});


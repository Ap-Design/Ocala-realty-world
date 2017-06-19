if(!jQuery().carousel){
    var carousel = document.createElement("script");
    carousel.src = "js/plugin/jquery.carousel.min.js";
    document.body.appendChild(carousel);
}

if(!jQuery().chosen && $(".chosen-select").length || $(".chosen-select-deselect").length){
    var chosen = document.createElement("script");
    chosen.src = "js/plugin/jquery.chosen.min.js";
    document.body.appendChild(chosen);
}
// VARIABLES
let map;
var acc = document.getElementsByClassName("accordion");
var i;

// ACCORDION
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// INIT SMALL INDEX MAP
function initMap() {
  map = new google.maps.Map(document.getElementById("small-map"), {
    center: {
      lat: 52.022,
      lng: 8.532,
    },
    zoom: 13,
    // mapTypeId: 'hybrid'
  });
}

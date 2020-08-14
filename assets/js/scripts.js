let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("small-map"), {
    center: {
      lat: 52.022,
      lng: 8.532,
    },
    zoom: 13,
    mapTypeId: 'hybrid'
    
  });
}

// ANIMATIONS
// var tl = gsap.timeline();

// tl.fromTo(".banner-container", {height: 0}, {height: 600, duration: 0.5});
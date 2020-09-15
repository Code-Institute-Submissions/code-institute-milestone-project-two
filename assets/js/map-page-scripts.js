var restaurants = "assets/data/restaurants.json";
var hotels = "assets/data/hotels.json";
var thingsToDo = "assets/data/thingsToDo.json";

// This is in Bielefeld
const initialPosition = {
    'lat': 52.022,
    'lng': 8.532
}
const zoomLevel = 12;
var infowindow;
var openMarker;

var restaurantMarkers = [];
var hotelMarkers = [];
var thingsToDoMarkers = [];

// LIST BUTTONS FUNCTION

$('.buttons button').click(function (){
        $('#toggleArea').empty();
        $('#toggleArea').html($("#" + $(this).data('link')).html());
    });
    
$('.reset button').click(function(){
        $('#toggleArea').empty();
});

$('#restaurantButton').on("click", function() {
        loadMarkers(restaurants, "assets/images/icons/restaurantIcon.png", restaurantDisplayFunction);
    });
$('#hotelsButton').on("click", function() {
        loadMarkers(hotels, "assets/images/icons/hotelIcon.png", hotelDisplayFunction);
    });
$('#todoButton').on("click", function() {
        loadMarkers(thingsToDo, "assets/images/icons/thingsToDoIcon.png", thingsToDoDisplayFunction);
    });
$('#resetButton').on("click", function() {
        initMap();
    });
//

// MAP FUNCTIONS

$(document).ready(function () {
    initMap(); // init map
});

function initMap() {
    map = new google.maps.Map(document.getElementById("large-map"), {
        center: {
            lat: initialPosition.lat,
            lng: initialPosition.lng,
        },
        zoom: zoomLevel,
        

    });
}

function addMarkerListener(infoContent, marker) {
    marker.info = new google.maps.InfoWindow({
        content: infoContent,
        maxWidth: 200
    });

    google.maps.event.addListener(marker, "click", function () {
        if (openMarker != null) {
            openMarker.info.close();
        }
        marker.info.open(map, marker);
        openMarker = marker;
    });

}


function restaurantDisplayFunction(data) {
    // Set info window content
    infoContent = "<h4>" + data.restaurantName + "</h4>";
    infoContent += "<p>" + data.foodType + "</p>";
    infoContent += "<p>" + data.rating + "</p>";
    infoContent += "<p>" + "'" + data.reviews1 + "'" + "</g>";
    infoContent += "<p>" + "'" + data.reviews2 + "'" + "</p>";
    return infoContent;
}

function hotelDisplayFunction(data) {
    // Set info window content
    infoContent = "<h4>" + data.hotelName + "</h4>";
    infoContent += "<p>" + data.customerRating + "</p>";
    infoContent += "<p>" + data.feature1 + "</g>";
    infoContent += "<p>" + data.feature2 + "</p>";
    return infoContent;
}

function thingsToDoDisplayFunction(data) {
    // Set info window content
    infoContent = "<h4>" + data.activityName + "</h4>";
    infoContent += "<p>" + data.activityRating + "</p>";
    infoContent += "<p>" + data.activityInfo + "</g>";
    return infoContent;
}

function loadMarkers(jsonData, iconPath, infoDisplayFunction) {
    $.getJSON(jsonData, function (data) {
        // Loop through the data
        $.each(data, function (key, data) {
            let myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position
            let marker = new google.maps.Marker({
                position: myLatlng,
                icon: iconPath,
                animation: google.maps.Animation.DROP,
                map: map,
            });

            let content = infoDisplayFunction(data);
            addMarkerListener(content, marker);
            
            
        });
    });
}




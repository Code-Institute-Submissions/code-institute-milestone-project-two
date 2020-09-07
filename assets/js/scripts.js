let map;

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
(function($) {
    

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);




  
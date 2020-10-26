// Google Maps

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -6.177795, lng: 106.858943 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY >150) {
    document.querySelector('#navbar').style.opacity =0.8;
  }
  else {
    document.querySelector('#navbar').style.opacity =1;
  }
});

// Smooth scrolling with JQuery
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !=='') {
    event.preventDefault();

    const hash =this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      }, 800
    );
  }
});
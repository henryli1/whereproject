<html>
  <head>
    <style type="text/css">
      html, body { height: 100%; margin: 0; padding: 0; }
      #map { height: 100%; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script type="text/javascript">

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
<<<<<<< HEAD
    zoom: 9
=======
    zoom: 8
>>>>>>> origin/master
  });
}

    </script>
    <script async defer
<<<<<<< HEAD
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFW46SFKnyJnURY1mlz2stpV9I3RK_BJ0&callback=initMap">
=======
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
>>>>>>> origin/master
    </script>
  </body>
</html>

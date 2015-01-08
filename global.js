    < script >

    //document.addEventListener('DOMContentLoaded', drawMap);
    //    google.maps.event.addDomListener(window, 'load', drawMap);
    // make map available in global scope
    document.getElementById('tab-header-2').addEventListener('click', drawMap)
    var map;

    function drawMap() {
        var storeLocationOrig = new google.maps.LatLng(19.006433, 73.107737),
            storeLocationNew = new google.maps.LatLng(18.9409708, 72.8346536);

        var mapOptions = {
            'center': new google.maps.LatLng(28.033886, 1.659626),
            'zoom': 2,
            'mapTypeId': google.maps.MapTypeId.ROADMAP,
            'draggable': true
        };

        map = new google.maps.Map(document.getElementById("my-map1"), mapOptions);

        var markerOrig = new google.maps.Marker({
                position: storeLocationOrig,
                map: map,
                title: 'Find us here (PC)'
            }),
            markerNew = new google.maps.Marker({
                position: storeLocationNew,
                map: map,
                title: "Here's is our new store (PC)"
            });

        var popupContentOrig = 'Plot # 2 &amp 3, Sector -16,<br /> Near Thana Naka, <br />Khanda Gaon, New Panvel,<br /> Navi Mumbai. 410206';

        var popupContentNew = 'Anjuman-I-Islam,<br /> D.N. Road, Opposite CST,<br /> Mumbai – 400 001';


        var infowindowOrig = new google.maps.InfoWindow({
                content: popupContentOrig,
                maxWidth: 470
            }),
            infowindowNew = new google.maps.InfoWindow({
                content: popupContentNew,
                maxWidth: 470
            });

        google.maps.event.addListener(markerOrig, 'click', function () {
            console.log("clicked the marker");
            infowindowOrig.open(map, markerOrig);
        });

        google.maps.event.addListener(markerNew, 'click', function () {
            console.log("clicked the marker");
            infowindowNew.open(map, markerNew);
        });



    } < /script>


    
    
    
    
    
    
    
       <script>
        document.addEventListener('DOMContentLoaded', drawMap);

         / / make map available in global scope
    var map;

    function drawMap() {
        var storeLocationOrig = new google.maps.LatLng(19.006433, 73.107737),
            storeLocationNew = new google.maps.LatLng(18.9409708, 72.8346536);

        var mapOptions = {
            'center': new google.maps.LatLng(19.006433, 73.107737),
            'zoom': 10,
            'mapTypeId': google.maps.MapTypeId.ROADMAP,
            'draggable': true
        };

        map = new google.maps.Map(document.getElementById("my-map"), mapOptions);

        var markerOrig = new google.maps.Marker({
                position: storeLocationOrig,
                map: map,
                title: 'Find us here (PC)'
            }),
            markerNew = new google.maps.Marker({
                position: storeLocationNew,
                map: map,
                title: "Here's is our new store (PC)"
            });

        var popupContentOrig = 'Plot # 2 &amp 3, Sector -16,<br /> Near Thana Naka, <br />Khanda Gaon, New Panvel,<br /> Navi Mumbai. 410206';

        var popupContentNew = 'Anjuman-I-Islam,<br /> D.N. Road, Opposite CST,<br /> Mumbai – 400 001';


        var infowindowOrig = new google.maps.InfoWindow({
                content: popupContentOrig,
                maxWidth: 470
            }),
            infowindowNew = new google.maps.InfoWindow({
                content: popupContentNew,
                maxWidth: 470
            });

        google.maps.event.addListener(markerOrig, 'click', function () {
            console.log("clicked the marker");
            infowindowOrig.open(map, markerOrig);
        });

        google.maps.event.addListener(markerNew, 'click', function () {
            console.log("clicked the marker");
            infowindowNew.open(map, markerNew);
        });



    } < /script>
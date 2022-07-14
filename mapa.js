var map = L.map('map').setView([-1.556509302122726, -78.70635790036773], 7);
L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

/* fetch('connectDB.php')
.then(rest => console.log(rest));
. */

var pdvIcon = L.icon({
    iconUrl: 'icons/tienda.png',
    iconSize:     [40, 45], // size of the icon
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -36]  // point from which the popup should open relative to the iconAnchor
});

jQuery.getJSON('http://localhost:80/AppMapa2.0/connectDB.php', function (data) {
    for (i = 0; i < data.length; i++) {
        lng = data[i].longitud;
        lat = data[i].latitud;
        nombre = data[i].pos_name;
        dir = data[i].address;
        supervisor = data[i].supervisor;
        foto = data[i].foto;
        var marker = L.marker([lat, lng],{icon: pdvIcon}).addTo(map).bindPopup(
            '<p>'+
            "<img src="+foto+" align='right' width=100>"+
            "Lugar:"+nombre+
            "<br>Direccion:"+dir+
            "<br>Supervisor:"+supervisor+
            "</p>"
            );
    }
});



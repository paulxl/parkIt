//const { default: Axios } = require("axios");

const day1 = new Date();
//console.log(day1);

let year = day1.getFullYear();
//console.log("month  :" + day1.getMonth());
let month = day1.getMonth() + 1;
//console.log("day  :" + day1.getDate());
let day = day1.getDate();

fetch(
  `https://api.sunrise-sunset.org/json?lat=47.61294&lng=-122.48215,&date=${year}-${month}-${day}&formatted=0`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);

    let sunrise1 = data.results.sunrise;
    let lrise = new Date(sunrise1);
    lrise = lrise.toLocaleTimeString("en-US");

    let sunset1 = data.results.sunset;
    let lset = new Date(sunset1);
    lset = lset.toLocaleTimeString("en-US");

    let dawn1 = data.results.civil_twilight_begin;
    let ldawn = new Date(dawn1);
    ldawn = ldawn.toLocaleTimeString("en-US");

    let dusk1 = data.results.civil_twilight_end;
    let ldusk = new Date(dusk1);
    ldusk = ldusk.toLocaleTimeString("en-US");

    document.getElementById("todayDawn").innerHTML = "Dawn:   " + ldawn;
    document.getElementById("todayRise").innerHTML = "Sunrise:  " + lrise;
    document.getElementById("todaySet").innerHTML = "Sunset:   " + lset;
    document.getElementById("todayDusk").innerHTML = "Dusk:  " + ldusk;
  });

const mymap = L.map("mapid").setView([47.5473, -121.184], 11);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 7,
    maxZoom: 10,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    icon: '<i class="fas fa-tree fa-1x"></i>',
    accessToken:
      "pk.eyJ1IjoicGF1bHhsIiwiYSI6ImNraWl5enU3czBlNW8yeG4wMGVienhpa24ifQ.4KusJ-8HFO_APJdMPs8vWA",
  }
).addTo(mymap);

const fedPoints = [];

// GET Fed Parks from backside
fetch("https://parkbackside.herokuapp.com/fedParks")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("fedParks data " + data);
    for (let i = 0; i < data.length; i++) {
      let name = data[i].name;
      let lat = data[i].lat;
      let long = data[i].long;
      fedPoints.push({ name, lat, long });
    }
    for (let i = 0; i < fedPoints.length; i++) {
      let marker = new L.marker([fedPoints[i].lat, fedPoints[i].long], {
        icon: myIcon,
      })
        .bindPopup(fedPoints[i].name)
        .addTo(mymap);
    }
  });

const locPoints = [];
// GET Local Parks from backside
fetch("https://parkbackside.herokuapp.com/localParks")
  .then((response) => {
    return response.json();
  })
  .then((data1) => {
    for (let j = 0; j < data1.length; j++) {
      let name = data1[j].TR_NM;
      let lat = data1[j].geometry.paths[1];
      let long = data1[j].geometry.paths[0];
      locPoints.push({ name, lat, long });
    }
    for (let k = 0; k < locPoints.length; k++) {
      marker = new L.marker([locPoints[k].lat, locPoints[k].long], {
        icon: myIcon,
      })
        .bindPopup(locPoints[k].name)
        .addTo(mymap);
    }
  });

const statePoints = [];
// GET State Parks from backside
fetch("https://parkbackside.herokuapp.com/stateParks")
  .then((response) => {
    return response.json();
  })
  .then((data2) => {
    for (let k = 0; k < data2.length; k++) {
      let name = data2[k].ParkName;
      let lat = data2[k].Lat;
      let long = data2[k].Long;
      statePoints.push({ name, lat, long });
    }
    for (let j = 0; j < statePoints.length; j++) {
      marker = new L.marker([statePoints[j].lat, statePoints[j].long], {
        icon: myIcon,
      })
        .bindPopup(statePoints[j].name)
        .addTo(mymap);
    }
  });
// const overlays = {
//   Marker: marker,
//   Roads: roadsLayer,
// };
// const baseLayers = {
//   Marker: marker,
// };
// L.control.layers(baseLayers, overlays).addTo(mymap);
const myIcon = L.divIcon({
  html: '<i class="fas fa-tree fa-2x"></i>',
  className: "myDivIcon",
  color: "#27823F",
});

// const marker1 = L.marker([47.61294, -122.48215], { icon: myIcon }).addTo(mymap);
// marker1.bindPopup("Seattle");

//const { default: Axios } = require("axios");
const fedPoints = [{}];
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
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    icon: '<i class="fas fa-tree fa-2x"></i>',
    accessToken:
      "pk.eyJ1IjoicGF1bHhsIiwiYSI6ImNraWl5enU3czBlNW8yeG4wMGVienhpa24ifQ.4KusJ-8HFO_APJdMPs8vWA",
  }
).addTo(mymap);

//const marker1 = L.marker([47.61294, -122.48215]).addTo(mymap); // test marker : sits E. of Seattle

const myIcon = L.divIcon({
  html: '<i class="fas fa-tree fa-2x"></i>',
  className: "myDivIcon",
});

const p1 = L.marker([48.21403036, -122.6877213], { icon: myIcon }).addTo(mymap);
const p2 = L.marker([45.62234841, -122.6617043], { icon: myIcon }).addTo(mymap);
const p3 = L.marker([47.5993663, -122.3319664], { icon: myIcon }).addTo(mymap);
const p4 = L.marker([48.17148735, -118.3513713], { icon: myIcon }).addTo(mymap);
const p5 = L.marker([41.2646141052246, -95.9245147705078], {
  icon: myIcon,
}).addTo(mymap);

const p6 = L.marker([46.21178735, -123.9638583], { icon: myIcon }).addTo(mymap);
const p7 = L.marker([39.76948167, -100.8429548], { icon: myIcon }).addTo(mymap);
const p8 = L.marker([42.80586068, -114.4449868], { icon: myIcon }).addTo(mymap);
const p9 = L.marker([46.86075416, -121.7043885], { icon: myIcon }).addTo(mymap);
const p10 = L.marker([46.07019093, -115.8761258], { icon: myIcon }).addTo(
  mymap
);
const p11 = L.marker([48.71171756, -121.2069423], { icon: myIcon }).addTo(
  mymap
);
const p12 = L.marker([47.80392754, -123.6663848], { icon: myIcon }).addTo(
  mymap
);
const p13 = L.marker([48.51241933, -123.0610277], { icon: myIcon }).addTo(
  mymap
);
const p14 = L.marker([46.04119286, -118.4629388], { icon: myIcon }).addTo(
  mymap
);
const p15 = L.marker([47.59820858665, -122.322891226625], {
  icon: myIcon,
}).addTo(mymap);

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
      fedPoints.push(name, lat, long);
      // console.log(
      //   "point " + i + " name " + name + "  lat " + lat + "  long " + long
      // );
      // fedPit(lat, long);
      // const fP = L.marker([`${lat}`, `${long}`], { icon: myIcon }).addTo(mymap);
    }
    //console.log("outside for loop .....");
    console.log("on line 116  " + fedPoints);
  });
function fedPit(lat, long) {
  console.log("inside fedPit");

  const fP = L.marker([lat, long], { icon: myIcon }).addTo(mymap);
}
fetch("https://parkbackside.herokuapp.com/localParks")
  .then((response) => {
    return response.json();
  })
  .then((data1) => {
    //console.log("localParks " + data1);
  });

fetch("https://parkbackside.herokuapp.com/stateParks")
  .then((response) => {
    return response.json();
  })
  .then((data2) => {
    // console.log("stateParks " + data2);
    // push data into Layer
    // then un-pack Layer to put onto map
  });
//const p16 = L.marker([, ], { icon: myIcon }).addTo(mymap);
//const p17 = L.marker([, ], { icon: myIcon }).addTo(mymap);
//bindPopup("<b></b><br>");

// for loop to bring in json lat & long of parks
// const = L.marker([], { icon: myIcon }).addTo(mymap);
// bindPopup('<b></b><br>');

// example below **************

// const homeMarker = L.marker([27.34365, -82.4515]).addTo(mymap);
// homeMarker.bindPopup("<b>Home Base</b><br>Starting Point");

// const nbPark = L.marker([27.3709813, -82.4495922], { icon: myIcon }).addTo(
//   mymap
// );
// nbPark.bindPopup(
//   "<b>Nathan Benderson Park</b><br>Large multi-purpose park<br>Dog Friendly"
// );
// const axios = require("axios");

// axios.get("https://parkbackside.herokuapp.com/fedParks").then((res) => {
//   const fedParks = res.data1;
//   console.log(fedParks);
// });

/*  Swaps out the words "It" and "You" in the logo when clicked */
// var button = document.getElementById("it_you");
// button.addEventListener('click', function() {
//   if (button.getAttribute("data-text-swap") == button.innerHTML) {
//     button.innerHTML = button.getAttribute("data-text-original");
//   } else {
//     button.setAttribute("data-text-original", button.innerHTML);
//     button.innerHTML = button.getAttribute("data-text-swap");
//   }
// }, false);

// /* Transforms the hamburg menu icon when clicked */
// function transformIcon(x) {
//     x.classList.toggle("change");
// }

window.onload = init();
const arrTrips = [];

function init() {
  axios.get(" https://parkbackside.herokuapp.com/connections").then((res) => {
    const stored = res.data;

    for (let i = 0; i < res.data.length; i++) {
      arrTrips.push(res.data[i]);
      createCard(res.data[i]);
    }
  });
}

const userInput = document.getElementById("user_Input");
userInput.onsubmit = (event) => {
  event.preventDefault();
  console.log("inside dataInput");
  // grab dateTimeStamp and equal to id
  let id = Date.now();
  let type = document.getElementById("pullDownType").value;
  let organizer = document.getElementById("organizer").value;

  let date1 = document.getElementById("date1").value;
  let time1 = document.getElementById("time1").value;

  console.log(time1);

  let trail = document.getElementById("trail").value;
  let meetLocation = document.getElementById("meet").value;

  console.log({
    id,
    type,
    organizer,
    date1,
    time1,
    trail,
    meetLocation,
  });

  axios
    .post("https://parkbackside.herokuapp.com/connections", {
      id,
      type,
      organizer,
      date1,
      time1,
      trail,
      meetLocation,
    })
    .then(init());
};

function createCard(trip) {
  // <<<<< sending array in
  // // when we create card, also create an UPDATE button and a DELETE button
  document.getElementById("card_carousel").innerHTML += `
        <div class="card" id="${trip.id}">
            <div class="row1">
                <div class="card_type">${trip.type}</div>
                <div class="card_trail_name">${trip.trail}</div>
        </div>
        <div class="row2">
            <ul class="card_hike_data">
                <li>Date: ${trip.date1}</li>
                <li>Time: ${trip.time1}</li>
                <li>Location: ${trip.meetLocation}</li>
                <li>Organizer: ${trip.organizer}</li>
                <li>RSVP: 2 Hiker(s)</li>
            </ul>
            <img src="generic_card_photo.jpg" alt="stock trail photo">
        </div>
        <div class="row3">
            <button class="join_btn">JOIN</button>
            <button class="update_btn">UPDATE</button>
            <button class="delete_btn">DELETE</button>
        </div>`;
}

// send in trip to DELETE
function deleteTrip(tripId) {
  // document.querySelector("#delete_Form").addEventListener("click")
  axios
    .delete(`https://parkbackside.herokuapp.com/connections/${tripId}`)
    .then(init());
  // listen to all values, and put them into an array

  //call backened and send array to DELETE

  //refresh page with deleted trip not showing.
}

function updateTrip(trip) {
  document.querySelector("#update_Trip").addEventListener("click");
  axios
    .put(`https://parkbackside.herokuapp.com/connections/${trip}`)
    .then(init());
  // listen to all value, add them to an exsisting array

  // on submit, call array, and preform a PUT request

  // come up with a trip id
}

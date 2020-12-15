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

window.onload =init();
const arrTrips = []
function init() {
    // we are going to call backend, and then GET arrTrips.
    // then PUSH results into arrTrips
    // create for loop to create a container/cards in bottom div (#container)
    axios.get(" https://parkbackside.herokuapp.com/connections").then((res) => {
        const stored = res.data;
        // console.log("i got the data")
        // let i = 0
        // let id = stored[i].id ;
        // console.log(id)

        for (let i = 0; i< stored.length; i++) {
            let id = stored[i].id;
            let type = stored[i].type;
            let organizer = stored[i].organizer;
            let date1 =stored[i].date1; 
            let time1 = stored[i].time1; 
            let trail = stored[i].trail; 
            let meetLocation = stored[i].meetLocation;
            arrTrips.push({id, type, organizer, date1, time1, trail, meetLocation})
            
            createCard(arrTrips[i]); 
        
        
        }
        
// console.log("arrTrips line 44" + arrTrips)
    });  
    }
    




// on submit bring in user input values
// PUSH values into arrTrips
// make a PUT (update) request into backend

const userInput = document.getElementById("user_Input");
userInput.onsubmit = (event) => {
    event.preventDefault();
    console.log("inside dataInput");
    // grab dateTimeStamp and equal to id
    let id = Date.now();  
    let type = document.getElementById("pullDownType").value;
    let organizer = document.getElementById("organizer").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let trail = document.getElementById("trail").value;
    let meet = document.getElementById("meet").value;

    console.log({id, type, organizer, date, time, trail, meet})
// POST request on the backend
    // axios.post(`https://parkbackside.herokuapp.com/connections/${tempTrip}`).then(init());
    axios.post("https://parkbackside.herokuapp.com/connections",
    {
         id,
          type,
           organizer,
           date,
           time,
           trail,
           meet
    }).then(init())
    };



// document.querySelector("#user_Input").addEventListener("submit", dataInput);
// function dataInput(e) {
//     e.preventDefault();
//     console.log("inside dataInput");
//     // grab dateTimeStamp and equal to id
//     let id = Date.now();  
//     let type = document.getElementById("pullDownType").value;
//     let organizer = document.getElementById("organizer").value;
//     let date = document.getElementById("date").value;
//     let time = document.getElementById("time").value;
//     let trail = document.getElementById("trail").value;
//     let meet = document.getElementById("meet").value;
    
//     // arrTrips.push(id, type, organizer, date, time, trail, meet);
//     // let tempTrip = {id, type, organizer, date, time, trail, meet};
//     // createCard(tempTrip);
// // let id = tempTrimp.id
// // let type = tempTrip.type
// // let organizer = tempTrip.organizer




// console.log("Line 81")






//     // POST request on the backend
//     // axios.post(`https://parkbackside.herokuapp.com/connections/${tempTrip}`).then(init());
//     axios.post("https://parkbackside.herokuapp.com/connections",
//     {
//          "id": `${id}`,
//           "type": `${type}`,
//            "organizer": `${organizer}`,
//            "date1": `${date}`,
//            "time1": `${time}`, 
//            "trail": `${trail}`,
//            "meetLocation": `${meet}`
//     }).then((res) => {
//         console.log(res.data)
//     });

//     //     method: 'post',
//     //     url: 'https://parkbackside.herokuapp.com/connections',
//     //     data: {
//     //     //   "id": `${id}`,
//     //     //   "type": `${type}`,
//     //     //   "organizer": `${organizer}`,
//     //     //   "date1": `${date}`,
//     //     //   "time1": `${time}`, 
//     //     //   "trail": `${trail}`,
//     //     //   "meetLocation": `${meet}`




//     //     }
//     //   }).then(console.log(response.data));
      

// }



function createCard(trip) {  // <<<<< sending array in


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
    </div>
</div>`;



}




    // send in trip to DELETE

function deleteTrip(tripId) {
    // document.querySelector("#delete_Form").addEventListener("click")
    axios.delete(`https://parkbackside.herokuapp.com/connections/${tripId}`).then(init())
    // listen to all values, and put them into an array
    
    


    //call backened and send array to DELETE



    //refresh page with deleted trip not showing.



}

function updateTrip(trip) {
    document.querySelector("#update_Trip").addEventListener("click");
    axios.put(`https://parkbackside.herokuapp.com/connections/${trip}`).then(init())
    // listen to all value, add them to an exsisting array

    // on submit, call array, and preform a PUT request
    
    // come up with a trip id



}
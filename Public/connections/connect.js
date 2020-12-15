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
        console.log("i got the data")
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
document.querySelector("#user_Input").addEventListener("submit", dataInput);

function dataInput(e) {
    e.preventDefault();
    console.log("inside dataInput");
    // grab dateTimeStamp and equal to id
    let id = e.timeStamp;  
    let type = document.getElementById("pullDownType").value;
    let organizer = document.getElementById("organizer").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let trail = document.getElementById("trail").value;
    let meet = document.getElementById("meet").value;
    
    arrTrips.push(id, type, organizer, date, time, trail, meet);
    let tempTrip = [id, type, organizer, date, time, trail, meet];
    createCard(tempTrip);
    // PUT request on the backend
    axios.put("https://parkbackside.herokuapp.com/connections").then(init());

}   



function createCard(trip) {  // <<<<< sending array in
    console.log("Line 81" + trip)
    console.log("Line 82" + trip.id)
    
        



    // create the card, and send to #container
// let div = document.getElementById("container")
let card = document.createElement("div")
let name = document.createElement("h1")
card.setAttribute("class", "card")
// card.style.width = "25em"
// card.style.margin = "5em"




let img = document.createElement("img")
img.setAttribute("class", "cardImg")
img.setAttribute("src", "generic_card_photo.jpg")

let savedInfo = document.createElement("p")
savedInfo.innerHTML = trip.type;
savedInfo.setAttribute("class", "card_type")
let trail = document.createElement("p")
trail.innerHTML = trip.trail
let date = document.createElement("p")
date.innerHTML = trip.date1
let time = document.createElement("p")
time.innerHTML = trip.time1
let meet = document.createElement("p")
meet.innerHTML = trip.meetLocation
let org = document.createElement("p")
org.innerHTML = trip.organizer
let newId = document.createElement("h2")
newId.innerHTML = trip.id

let deleteBtn = document.createElement("button")
deleteBtn.innerHTML = "Delete"
deleteBtn.id = "delete_Form"
deleteBtn.setAttribute("class", "delete_btn")
let updateBtn = document.createElement("button")
updateBtn.innerHTML = "Update"
updateBtn.setAttribute("class", "update_btn")
updateBtn.id = "update_Form"
let joinBtn = document.createElement("button")
joinBtn.innerHTML = "Join"
joinBtn.setAttribute("class", "join_btn")

// create divs for each new element
let card_cara = document.createElement("div")
card_cara.setAttribute("class", "carousel")
let divRow = document.createElement("div")
divRow.setAttribute("class", "row1")

let diveType = document.createElement("div")
diveType.setAttribute("class", "card_type")
diveType.innerHTML = trip.type;
let divTrailName = document.createElement("div")
divTrailName.setAttribute("class", "card_trail_name")
divTrailName.innerHTML = trip.trail;

divRow.append(diveType, divTrailName)

let divRow2 = document.createElement("div")
divRow2.setAttribute("class", "row2")
let list = document.createElement("ul");
list.setAttribute("class", "card_hike_data");

let listDate = document.createElement("li")
listDate.appendChild(document.createTextNode(trip.date1))
let listTime = document.createElement("li")
listTime.appendChild(document.createTextNode(trip.time1))
let listMeet = document.createElement("li")
listMeet.appendChild(document.createTextNode(trip.meetLocation))
let listOrganizer = document.createElement("li")
listOrganizer.appendChild(document.createTextNode(trip.organizer))
let listRsvp = document.createElement("li")
listRsvp.appendChild(document.createTextNode("RSVP: N/A"))
list.style.listStyleType = "dot"
list.append(listDate, listTime, listMeet, listOrganizer, listRsvp)

divRow2.append(list, img)

let divRow3Btn = document.createElement("div")
divRow3Btn.setAttribute("class", "row3")
divRow3Btn.append(joinBtn, updateBtn, deleteBtn)





//append divs and create card
card_cara.append(card)
card.append(divRow, divRow2, divRow3Btn)

// div.append(card, name, img,  savedInfo, deleteBtn, updateBtn);
document.querySelector("#page_body").appendChild(card)

// when we create card, also create an UPDATE button and a DELETE button
    
     
    







}
    // send in trip to DELETE
function deleteTrip(tripId) {
    document.querySelector("#delete_Form").addEventListener("click")
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
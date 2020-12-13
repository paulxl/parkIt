const arrTrips = []
function init() {
    // we are going to call backend, and then GET arrTrips.
    // then PUSH results into arrTrips
    // create for loop to create a container/cards in bottom div (#container)
    for (let i = 0; i< arrTrips.length; i++) {
        createCard(arrTrips[i]); 
    }
        

}



// on submit bring in user input values
// PUSH values into arrTrips
// make a PUT (update) request into backend
document.querySelector("#input_Form").addEventListener("submit", dataInput);

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

}   



function createCard(trip) {  // <<<<< sending array in
    
    // create the card, and send to #container


    // when we create card, also create an UPDATE button and a DELETE button







}
    // send in trip to DELETE
function deleteTrip(tripId) {
    document.querySelector("#delete_Form").addEventListener("submit");
    // listen to all values, and put them into an array
    
    for (let index = 0; index < tripId.length; index++) {
        // const element = array[index];
       // when array[index].id === tripId


       
    }


    //call backened and send array to DELETE



    //refresh page with deleted trip not showing.



}

function updateTrip(trip) {
    document.querySelector("#update_Trip").addEventListener("submit");

    // listen to all value, add them to an exsisting array

    // on submit, call array, and preform a PUT request
    
    // come up with a trip id



}
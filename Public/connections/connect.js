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
        arrTrips.push(stored);

        for (let i = 0; i< arrTrips.length; i++) {
            createCard(arrTrips[i]); 




        }
    })
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
    let div = document.getElementById("container")
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.style.width = "25em"
    card.style.margin = "5em"
    let img = document.createElement("img")
    img.setAttribute("class", "cardImg")
    img.setAttribute("src", "/parkIt/Public/Parkit_photos/compassRose.png")
    

    let savedInfo = document.createElement("p")
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.id = "delete_Form"
    let updateBtn = document.createElement("button")
    updateBtn.innerHTML = "Update"
    updateBtn.id = "update_Form"
    // savedInfo.id = ""
    // savedInfo.innerHTML = stored
    card.appendChild
    div.append(card, savedInfo, deleteBtn, updateBtn);
    newDiv.innerHTML = arrTrips;

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
/*  Swaps out the words "It" and "You" in the logo when clicked */
var button = document.getElementById("it_you");
button.addEventListener('click', function () {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
        button.innerHTML = button.getAttribute("data-text-original");
    } else {
        button.setAttribute("data-text-original", button.innerHTML);
        button.innerHTML = button.getAttribute("data-text-swap");
    }
}, false);

/* Transforms the hamburg menu icon when clicked */
function transformIcon(x) {
    x.classList.toggle("change");
}

window.onload = init();

function init() {
    document.getElementById("card_carousel").innerHTML = "";
    axios.get(" https://parkbackside.herokuapp.com/connections").then((res) => {
        const stored = res.data;

        for (let i = 0; i < res.data.length; i++) {
            createCard(res.data[i]);
        }
    });
}

const userInput = document.getElementById("user_Input");
userInput.onsubmit = (event) => {
    event.preventDefault();

    let id = Date.now();
    let type = document.getElementById("pullDownType").value;
    let organizer = document.getElementById("organizer").value;
    let date1 = document.getElementById("date1").value;
    let time1 = document.getElementById("time1").value;
    let trail = document.getElementById("trail").value;
    let meetLocation = document.getElementById("meet").value;

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
                <button class="update_btn" id="upd8" value="${trip.id}">UPDATE</button>
                <button class="delete_btn" id="dlt" value="${trip.id}">DELETE</button>
            </div>
        </div>`;
}

var currId = -1;
onclick = (event) => {
    if (event.target.matches("button#dlt")) {
        let cardId = parseInt(event.target.value, 10);

        axios
            .delete(`https://parkbackside.herokuapp.com/connections/${cardId}`)
            .then(init());
    } else if (event.target.matches("button#upd8")) {
        currId = parseInt(event.target.value, 10);
        openForm();
    }else if (event.target.matches("button#send_upd8_btn")){
        event.preventDefault();

        let id = currId;
        let type = document.getElementById("pullDownTypePU").value;
        let organizer = document.getElementById("organizerPU").value;
        let date1 = document.getElementById("datePU").value;
        let time1 = document.getElementById("timePU").value;
        let trail = document.getElementById("trailPU").value;
        let meetLocation = document.getElementById("meetPU").value;

        closeForm();
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
        .put(`https://parkbackside.herokuapp.com/connections/${id}`, {
            id,
            type,
            organizer,
            date1,
            time1,
            trail,
            meetLocation,
        })
        .then((res) => {
            console.log(res.data);
          });
        init();
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
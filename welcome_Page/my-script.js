    var i = 0;
    var txt = "let it = you;";
    var speed = 50;

// creates the typeWriter effect. TODO: eiter keep it a button or infinite animation style
// on site launch...decisions...
function pageIntroText() {
    

    if (i < txt.length) {
        document.getElementById("intro-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(pageIntroText, speed);
    }
}
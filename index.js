let scoreHome = 0;
let scoreAway = 0;

let homeEl = document.querySelector(".home")
let awayEl = document.querySelector(".guest")


function incrementOne() {
	scoreHome += 1;
	homeEl.textContent = scoreHome;
}
function incrementTwo() {
	scoreHome += 2;
	homeEl.textContent = scoreHome;
}
function incrementThree() {
	scoreHome += 3;
	homeEl.textContent = scoreHome;
}
function awayIncrementOne() {
	scoreAway += 1;
	awayEl.textContent = scoreAway
}
function awayIncrementTwo() {
	scoreAway += 2;
	awayEl.textContent = scoreAway;
}
function awayIncrementThree() {
	scoreAway += 3;
	awayEl.textContent = scoreAway;
}

function reset() {
	scoreHome = 0;
	scoreAway = 0;
	homeEl.textContent = scoreHome;
	awayEl.textContent = scoreAway;
}

let homeStoreH = document.getElementById("home-score"); //for Home
let guestStoreH = document.getElementById("guest-score"); // for Guest

let homeScoreButton1 = document.getElementById("home-score-btn-1"); //buttons for home
let homeScoreButton2 = document.getElementById("home-score-btn-2"); //buttons for home
let homeScoreButton3 = document.getElementById("home-score-btn-3"); //buttons for home

let homeScore = 0;

function plus1() {
	homeScore += 1;
	homeStoreH.textContent = homeScore;
}
function plus2() {
	homeScore += 2;
	homeStoreH.textContent = homeScore;
}
function plus3() {
	homeScore += 3;
	homeStoreH.textContent = homeScore;
}
function reset() {
	homeScore = 0;
	homeStoreH.textContent = homeScore;
}

let guestScore = 0;

function plus1G() {
	guestScore += 1;
	guestStoreH.textContent = guestScore;
}
function plus2G() {
	guestScore += 2;
	guestStoreH.textContent = guestScore;
}
function plus3G() {
	guestScore += 3;
	guestStoreH.textContent = guestScore;
}
function resetG() {
	guestScore = 0;
	guestStoreH.textContent = guestScore;
}

let count = 0;
let count2 = 0;

let home = document.querySelector(".home")
let guest = document.querySelector(".guest")

console.log(home)
console.log(guest)
console.log(count)
console.log(count2)

function incrementOne() {
	count += 1;
	home.textContent = count;
}
function incrementTwo() {
	count += 2;
	home.textContent = count;
}
function incrementThree() {
	count += 3;
	home.textContent = count;
}
function gincrementOne() {
	count2 += 1;
	guest.textContent = count2
}
function gincrementTwo() {
	count2 += 2;
	guest.textContent = count2;
}
function gincrementThree() {
	count2 += 3;
	guest.textContent = count2;
}

function zero() {
	count = 0;
	count2 = 0;
	home.textContent = count;
	guest.textContent = count2;
}

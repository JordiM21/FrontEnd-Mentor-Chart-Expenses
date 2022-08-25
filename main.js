import data from "./data.json" assert { type: "json" };
// console.log(data)

let chartBarsContainer = document.querySelector(".barsContainer");

let amountValues = [];

data.forEach((element) => {
	amountValues.push(element.amount);
	chartBarsContainer.innerHTML += `
    <div class="barElement">
        <div class="amount">$${element.amount}</div>
        <div class="bar"></div>
        <div class="day">${element.day}</div>
    </div>`;
});
let maxValue = Math.max(...amountValues);
let maxHeightPx = 120;
/*
52.36 => 200px
17.45 => ????
CurrentHeight = (amount * maxHeightPx)/ maxValue
*/

let bars = document.querySelectorAll(".bar");
bars = [...bars];

bars.forEach((bar) => {
	let amount = parseFloat(bar.previousElementSibling.innerText.slice(1));
	let CurrentHeight = (amount * maxHeightPx) / maxValue;
	bar.style.height = `${CurrentHeight}px`;
	// console.log(parseInt(amount));
	// console.log(maxValue);
	if (parseInt(amount) === parseInt(maxValue)) {
		bar.style.backgroundColor = "hsl(186, 34%, 60%)";
	}
	bar.addEventListener("mouseover", (event) => {
		let labelElement = event.srcElement.previousElementSibling;
		labelElement.style.display = "block";
	});
	bar.addEventListener("mouseout", (event) => {
		let labelElement = event.srcElement.previousElementSibling;
		labelElement.style.display = "none";
	});
});

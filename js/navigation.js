const aboutNavigator = document.getElementById("nav-about");
const portfolioNavigator = document.getElementById("nav-portfolio");
const contactNavigator = document.getElementById("nav-contact");
const underlines = document.getElementsByClassName("underline");
const cards = document.getElementsByClassName("card");

const TIME = 1250;

const timer = async time => {
	return new Promise(res => setTimeout(res, time));
};

const upScroll = () => {
	if (underlines[0].className === "underline underline-selected")
		contactNavigator.click();
	else if (underlines[1].className === "underline underline-selected")
		aboutNavigator.click();
	else if (underlines[2].className === "underline underline-selected")
		portfolioNavigator.click();
};

const downScroll = () => {
	if (underlines[0].className === "underline underline-selected")
		portfolioNavigator.click();
	else if (underlines[1].className === "underline underline-selected")
		contactNavigator.click();
	else if (underlines[2].className === "underline underline-selected")
		aboutNavigator.click();
};

aboutNavigator.addEventListener("click", async e => {
	underlines[0].classList.add("underline-selected");
	underlines[0].classList.remove("underline-not-selected");
	underlines[1].classList.remove("underline-selected");
	underlines[1].classList.add("underline-not-selected");
	underlines[2].classList.remove("underline-selected");
	underlines[2].classList.add("underline-not-selected");

	if (cards[2].className === "card pos-3") {
		portfolioNavigator.click();
		await timer(TIME);
		aboutNavigator.click();
	}

	cards[0].className = "card";
	cards[1].className = "card";
	cards[2].className = "card";

	cards[0].classList.add("pos-3");
	cards[1].classList.add("pos-4");
	cards[2].classList.add("pos-5");
});

portfolioNavigator.addEventListener("click", e => {
	underlines[1].classList.add("underline-selected");
	underlines[1].classList.remove("underline-not-selected");
	underlines[0].classList.remove("underline-selected");
	underlines[0].classList.add("underline-not-selected");
	underlines[2].classList.remove("underline-selected");
	underlines[2].classList.add("underline-not-selected");

	cards[0].className = "card";
	cards[1].className = "card";
	cards[2].className = "card";

	cards[1].classList.add("pos-3");
	cards[0].classList.add("pos-2");
	cards[2].classList.add("pos-4");
});

contactNavigator.addEventListener("click", async e => {
	underlines[2].classList.add("underline-selected");
	underlines[2].classList.remove("underline-not-selected");
	underlines[1].classList.remove("underline-selected");
	underlines[1].classList.add("underline-not-selected");
	underlines[0].classList.remove("underline-selected");
	underlines[0].classList.add("underline-not-selected");

	if (cards[0].className === "card pos-3") {
		portfolioNavigator.click();
		await timer(TIME);
		contactNavigator.click();
	}

	cards[0].className = "card";
	cards[1].className = "card";
	cards[2].className = "card";

	cards[2].classList.add("pos-3");
	cards[1].classList.add("pos-2");
	cards[0].classList.add("pos-1");
});

document.addEventListener("keydown", e => {
	if (e.keyCode === 38) {
		upScroll();
	} else if (e.keyCode === 40) {
		downScroll();
	}
});

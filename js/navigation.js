const aboutNavigator = document.getElementById("nav-about");
const portfolioNavigator = document.getElementById("nav-portfolio");
const contactNavigator = document.getElementById("nav-contact");
const underlines = document.getElementsByClassName("underline");
const cards = document.getElementsByClassName("card");

aboutNavigator.addEventListener("click", e => {
    underlines[0].classList.add("underline-selected");
    underlines[0].classList.remove("underline-not-selected");
    underlines[1].classList.remove("underline-selected");
    underlines[1].classList.add("underline-not-selected");
    underlines[2].classList.remove("underline-selected");
    underlines[2].classList.add("underline-not-selected");

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

contactNavigator.addEventListener("click", e => {
    underlines[2].classList.add("underline-selected");
    underlines[2].classList.remove("underline-not-selected");
    underlines[1].classList.remove("underline-selected");
    underlines[1].classList.add("underline-not-selected");
    underlines[0].classList.remove("underline-selected");
    underlines[0].classList.add("underline-not-selected");

    cards[0].className = "card";
    cards[1].className = "card";
    cards[2].className = "card";

    cards[2].classList.add("pos-3");
    cards[1].classList.add("pos-2");
    cards[0].classList.add("pos-1");
});

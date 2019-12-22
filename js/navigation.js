const aboutNavigator = document.getElementById("nav-about");
const portfolioNavigator = document.getElementById("nav-portfolio");
const contactNavigator = document.getElementById("nav-contact");
const underlines = document.getElementsByClassName("underline");

aboutNavigator.addEventListener("click", e => {
    underlines[0].classList.add("underline-selected");
    underlines[0].classList.remove("underline-not-selected");
    underlines[1].classList.remove("underline-selected");
    underlines[1].classList.add("underline-not-selected");
    underlines[2].classList.remove("underline-selected");
    underlines[2].classList.add("underline-not-selected");
});

portfolioNavigator.addEventListener("click", e => {
    underlines[1].classList.add("underline-selected");
    underlines[1].classList.remove("underline-not-selected");
    underlines[0].classList.remove("underline-selected");
    underlines[0].classList.add("underline-not-selected");
    underlines[2].classList.remove("underline-selected");
    underlines[2].classList.add("underline-not-selected");
});

contactNavigator.addEventListener("click", e => {
    underlines[2].classList.add("underline-selected");
    underlines[2].classList.remove("underline-not-selected");
    underlines[1].classList.remove("underline-selected");
    underlines[1].classList.add("underline-not-selected");
    underlines[0].classList.remove("underline-selected");
    underlines[0].classList.add("underline-not-selected");
});

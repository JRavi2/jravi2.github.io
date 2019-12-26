const hmIcon = document.getElementById("hamburger-icon");
const sidebar = document.getElementById("sidebar");

var isSidebarOpen = true;

const timer = async time => {
    return new Promise(res => setTimeout(res, time));
};

hmIcon.addEventListener("click", e => {
    if (isSidebarOpen) {
        sidebar.classList.remove("open-anim");
        sidebar.classList.add("close-anim");
    } else {
        sidebar.classList.remove("close-anim");
        sidebar.classList.add("open-anim");
    }
    isSidebarOpen = !isSidebarOpen;
});

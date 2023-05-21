const click_user = document.querySelector("#fa-user");
const profile_dom = document.querySelector(".header-profile");
click_user.addEventListener("click", () => {
    profile_dom.classList.toggle("active");
});
const close_sideBar = document.querySelector("#sideBar-close-btn > i");
const sidebar = document.querySelector(".sideBar");
const menuBar = document.querySelector(".header-icons .fa-bars");
const body = document.querySelector("body");

close_sideBar.addEventListener("click", () => {
    sidebar.classList.remove("active");
    body.classList.remove("active");
});
menuBar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    body.classList.toggle("active");
});
window.onscroll = () => {
    profile_dom.classList.remove("active");
    // search.classList.remove("active");

    if (window.innerWidth < 1200) {
        sideBar.classList.remove("active");
        body.classList.remove("active");
    }
};
// Làm nút dark mode
const toggleBtn = document.querySelector("#toggle-theme");
let darkMode = localStorage.getItem("dark-mode");
const enableDarkMode = () => {
    toggleBtn.classList.replace("fa-sun", "fa-moon");
    body.classList.add("dark");
    localStorage.setItem("dark-mode", "enabled");
};
const disableDarkMode = () => {
    toggleBtn.classList.replace("fa-moon", "fa-sun");
    body.classList.remove("dark");
    localStorage.setItem("dark-mode", "disabled");
};
if (darkMode === "enabled") {
    enableDarkMode();
}
toggleBtn.onclick = (e) => {
    console.log("ghg");
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disable") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};

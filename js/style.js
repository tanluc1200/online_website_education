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
// Lấy trạng thái giao diện từ localStorage, nếu không có thì mặc định là light mode
let isDarkMode = localStorage.getItem("isDarkMode") === "true" ? true : false;

// Thiết lập trạng thái ban đầu của giao diện
if (isDarkMode) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

// Hàm xử lý sự kiện khi nhấn nút chuyển đổi giữa light và dark mode
function toggleMode() {
    // Thay đổi trạng thái của biến isDarkMode
    isDarkMode = !isDarkMode;

    // Thêm hoặc xóa class dark-mode vào thẻ body
    if (isDarkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    // Lưu trạng thái giao diện vào localStorage
    localStorage.setItem("isDarkMode", isDarkMode);
}

// Gán hàm xử lý sự kiện cho nút chuyển đổi giữa light và dark mode
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", toggleMode);


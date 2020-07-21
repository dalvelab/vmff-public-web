// SIDEBAR
// MAIL SUBSCRIPTION
const openSidebarBtn = document.querySelector("#open-sidebar");
const closeSidebarbtn = document.querySelector("#close-sidebar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

const links = document.querySelectorAll(".sidebar .menu .link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.left = "-300px";
    overlay.style.display = "none";
  });
});

const openSidebar = () => {
  sidebar.style.left = "0";
  overlay.style.display = "block";
};

const closeSidebar = () => {
  sidebar.style.left = "-300px";
  overlay.style.display = "none";
};

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarbtn.addEventListener("click", closeSidebar);

overlay.addEventListener("click", () => {
  sidebar.style.left = "-300px";
  overlay.style.display = "none";
  modal.style.display = "none";
});

// MAIL SUBSCRIPTION
const modal = document.querySelector(".modal");
const emailSubscribe = document.querySelector(".send-email-btn");
const closeModal = document
  .querySelector("#close_modal")
  .addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

emailSubscribe.addEventListener("click", showModal);

function showModal(e) {
  e.preventDefault();
  modal.style.display = "grid";
  overlay.style.display = "block";
}

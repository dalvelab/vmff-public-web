const openSidebarBtn = document.querySelector("#open-sidebar");
const closeSidebarbtn = document.querySelector("#close-sidebar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

const links = document.querySelectorAll(".sidebar .menu .link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.marginLeft = "-300px";
    sidebar.style.opacity = "0";
    overlay.style.display = "none";
  });
});

const openSidebar = () => {
  sidebar.style.marginLeft = "0px";
  sidebar.style.opacity = "1";
  overlay.style.display = "block";
};

const closeSidebar = () => {
  sidebar.style.marginLeft = "-300px";
  sidebar.style.opacity = "0";
  overlay.style.display = "none";
};

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarbtn.addEventListener("click", closeSidebar);

overlay.addEventListener("click", () => {
  sidebar.style.marginLeft = "-300px";
  overlay.style.display = "none";
});

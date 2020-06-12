const openSidebarBtn = document.querySelector("#open-sidebar");
const closeSidebarbtn = document.querySelector("#close-sidebar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

const openSidebar = () => {
  sidebar.style.marginLeft = "0px";
  overlay.style.display = "block";
};

const closeSidebar = () => {
  sidebar.style.marginLeft = "-300px";
  overlay.style.display = "none";
};

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarbtn.addEventListener("click", closeSidebar);

overlay.addEventListener("click", () => {
  sidebar.style.marginLeft = "-300px";
  overlay.style.display = "none";
});

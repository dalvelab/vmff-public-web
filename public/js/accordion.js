const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) =>
  accordion.addEventListener("click", () => {
    const content = accordion.nextElementSibling;
    if (content.classList.contains("accordion-opened")) {
      accordion.children[1].style.transform = "rotate(45deg)";
      content.classList.remove("accordion-opened");
    } else {
      accordion.children[1].style.transform = "rotate(-90deg)";
      content.classList.add("accordion-opened");
    }
  })
);

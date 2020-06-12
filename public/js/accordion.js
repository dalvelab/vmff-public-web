const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) =>
  accordion.addEventListener("click", () => {
    const content = accordion.nextElementSibling;
    console.log(content);
    if (content.classList.contains("accordion-opened")) {
      content.classList.remove("accordion-opened");
      accordion.children[1].style.transform = "rotate(45deg)";
    } else {
      content.classList.add("accordion-opened");
      accordion.children[1].style.transform = "rotate(-90deg)";
    }
  })
);

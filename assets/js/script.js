const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#F28B30"; // aqui você pode escolher a cor que desejar
  });

  link.addEventListener("mouseout", () => {
    link.style.color = ""; // aqui você pode definir a cor padrão dos textos
  });
});

let items = document.querySelectorAll(".carousel .carousel-item");
console.log("file: bootstrap.html:174 - items:", items);

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      //   wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

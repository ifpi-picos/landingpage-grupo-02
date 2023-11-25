const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#F28B30"; // aqui você pode escolher a cor que desejar
  });

  link.addEventListener("mouseout", () => {
    link.style.color = ""; // aqui você pode definir a cor padrão dos textoss
  });
});
// Código para o primeiro carrossel (minPerSlide = 4)
let itemsFirstCarousel = document.querySelectorAll(
  "#carouselExampleControls .carousel-item"
);
console.log("file: bootstrap.html:174 - items:", itemsFirstCarousel);

itemsFirstCarousel.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;

  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // Wrap carousel by using first child
      next = itemsFirstCarousel[0];
    }

    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

let itemsSecondCarousel = document.querySelectorAll(
  "#organizacao .carousel-item"
);

itemsSecondCarousel.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;

  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // Se não houver próximo slide, volte ao primeiro slide
      next = itemsSecondCarousel[0];
    }

    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
function openImageModal(imagePath) {
  let modalImage = document.getElementById("modalImage");
  modalImage.src = imagePath;
  $("#imageModal").modal("show");
}

// Botão  fale conosco tela inicial
document.addEventListener("DOMContentLoaded", function () {
  const btnFaleConosco = document.querySelector("#btnFaleConosco");
  btnFaleConosco.addEventListener("click", () => {
    window.open("https://www.instagram.com/acarte1111/");
  });
});

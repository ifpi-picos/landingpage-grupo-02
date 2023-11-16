const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#F28B30'; // aqui você pode escolher a cor que desejar
  });

  link.addEventListener('mouseout', () => {
    link.style.color = ''; // aqui você pode definir a cor padrão dos textos
  });
});

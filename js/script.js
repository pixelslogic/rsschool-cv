fetch('img/led-example.svg')
  .then(res => res.text())
  .then(svgText => {
    document.querySelector('.preloader-ex').innerHTML = svgText;
  });

const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(el => el.classList.remove('nav__item--active'));
    item.classList.add('nav__item--active');
  });
});
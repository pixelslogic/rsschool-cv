fetch('img/led-example.svg')
  .then(res => res.text())
  .then(svgText => {
    document.querySelector('.preloader-ex').innerHTML = svgText;
  });
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#00ff00',
      lineColor: '#00ff11'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 25 + 'px';
  }, false);
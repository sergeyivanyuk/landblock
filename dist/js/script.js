let linkNav = document.querySelectorAll('[href^="#"]'); //выбираем все ссылки к якорю на странице
    V = 0.47;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        let w = window.pageYOffset,  // производим прокрутку
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

const hamburger = document.querySelector('.burger'),
      menu = document.querySelector('.menu__list'),
      closeElem = document.querySelector('.menu__close'),
      menuLinkOne = document.getElementById('1');
      menuLinkTwo = document.getElementById('2');
      menuLinkThree = document.getElementById('3');
      menuLinkFour = document.getElementById('4');
      menuLinkFive = document.getElementById('5');

hamburger.addEventListener('click', () =>  {
    menu.classList.add('active');
    closeElem.classList.add('active');
});
closeElem.addEventListener('click', () =>  {
    menu.classList.remove('active');
    closeElem.classList.remove('active');
});
menuLinkOne.addEventListener('click', () =>  {
    menu.classList.remove('active');
    closeElem.classList.remove('active');
});
menuLinkTwo.addEventListener('click', () =>  {
    menu.classList.remove('active');
    closeElem.classList.remove('active');
});
menuLinkThree.addEventListener('click', () =>  {
    menu.classList.remove('active');
    closeElem.classList.remove('active');
});
menuLinkFour.addEventListener('click', () =>  {
    menu.classList.remove('active');
    closeElem.classList.remove('active');
});
menuLinkFive.addEventListener('click', () =>  {
    menu.classList.remove('active');
    closeElem.classList.remove('active');
});
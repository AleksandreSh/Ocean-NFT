const body = document.body;
const scrollDown = "scroll-down";
let lastScroll = 0;
const header = document.getElementById('header');
const burger = document.getElementById('burger-menu');
const menu = document.getElementById('dropdown-menu');
const content = document.querySelectorAll('.collection');
const tab = document.querySelectorAll('.collections__item');
const slider = document.querySelector('.collections__items');
const list = document.querySelectorAll('.footer__list-title');
const items = document.querySelectorAll('.footer__top-list');

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollDown);
      return;
    }
    else if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.add(scrollDown);
    }
    lastScroll = currentScroll;
});



burger.addEventListener('change', e => {
    if(e.target.checked === true) {
        menu.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('hidden');
    }
    if(e.target.checked === false) {
        menu.classList.remove('active');
        header.classList.remove('active');
        body.classList.remove('hidden');
    }
});

const nft = new Swiper('.top-nft__content-swiper', {
    grabCursor: true,
    width: 1370,
    slidesPerView: 3,
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            width: 250,
        },
        549: {
          slidesPerView: 1,
          width: 435,
        },
        935: {
          slidesPerView: 2,
          width: 935,
        },
        1370: {
            width: 1370,
            slidesPerView: 3,
        }
    }
});

const profile = new Swiper('.profiles__swiper', {
    grabCursor: true,
    width: 1370,
    slidesPerView: 3,
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            width: 270,
        },
        536: {
          slidesPerView: 1,
          width: 438,
        },
        935: {
          slidesPerView: 2,
          width: 935,
        },
        1370: {
            width: 1370,
            slidesPerView: 3,
        }
    }
});

function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove('collections__item--active');
    });
}
function showTabContent(i = 0) {
    content[i].style.display = 'block';
    tab[i].classList.add('collections__item--active');
}
hideTabContent();
showTabContent();
slider.addEventListener("click", (e) => {
    const target = e.target;
    if (target) {
        tab.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

list.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        const target = e.target.closest('.footer__list-title');
        if (target == item) {
            items[i].classList.toggle('active');
            items.forEach((listItem, j) => {
                if (j != i && items[j].classList.contains('active')) {
                    listItem.classList.toggle('active');
                }
            })
        }
    })
});





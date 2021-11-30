'use strict';

(function () {
  var headerButton = document.querySelector('.page-header__button');
  var headerButtonToggle = document.querySelector('.page-header__block');
  var headerContact = document.querySelector('.page-header__box-contact');
  var headerBoxToggle = document.querySelector('.page-header__block');
  var headerMenu = document.querySelector('.main-nav');
  var headerMenuSub = document.querySelector('.main-nav__sub');
  var header = document.querySelector('.page-header');
  var popupOverlay = document.querySelector('.overlay');
  var pageBody = document.querySelector('.page-body');

  var resetHeader = function () {
    if (header) {
      header.style.marginTop = '0';
    }
    if (headerMenu) {
      headerMenu.style.top = '0';
      headerMenu.classList.remove('main-nav--active');
      // pageBody.classList.remove('overlay');
    }
    if (headerButton) {
      headerButton.removeAttribute('disabled');
      headerButton.classList.remove('page-header__button--active');
    }
    if (headerButtonToggle) {
      headerButtonToggle.classList.remove('page-header__block--active');
    }
  };

  resetHeader();

  var toggleMenu = function (element, selector) {
    if (element.classList.contains(selector)) {
      element.classList.remove(selector);
    } else {
      element.classList.add(selector);
    }
  };
  if (headerButton) {
    headerButton.addEventListener('click', function () {
      toggleMenu(headerButton, 'page-header__button--active');
      toggleMenu(headerButtonToggle, 'page-header__block--active');
      toggleMenu(headerMenu, 'main-nav--active');
      toggleMenu(pageBody, 'overlay');
      if (header.hasAttribute('style')) {
        header.removeAttribute('style');
      } else {
        header.style.marginTop = '0';
      }
    });
  }
  if (headerContact) {
      headerContact.addEventListener('click', function () {
        toggleMenu(headerMenuSub, 'main-nav__sub--block');
      });
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      headerButton.classList.remove('page-header__button--active');
      headerButtonToggle.classList.remove('page-header__block--active');
      headerMenu.classList.remove('main-nav--active');
      headerMenu.classList.remove('overlay');
      header.style.marginTop = '0';
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      pageBody.classList.remove('overlay');
      headerMenu.classList.remove('main-nav--active');
      header.style.marginTop = '0';
      headerButton.classList.remove('page-header__button--active');
      headerButtonToggle.classList.remove('page-header__block--active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.team__swiper')) {
      const readySwiper = new Swiper('.team__swiper', {
        spaceBetween: 50,
        navigation: {
          prevEl: '.team__btn-prev',
          nextEl: '.team__btn-next',
        },
        pagination: {
          el: '.team__pagination',
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          }
        }
      });
    }

    if (document.querySelector('.meeting__swiper')) {
      const readySwiper = new Swiper('.meeting__swiper', {
        autoHeight: true,
        spaceBetween: 70,
        navigation: {
          prevEl: '.meeting__btn-prev',
          nextEl: '.meeting__btn-next',
        },
        pagination: {
          el: '.meeting__pagination',
          clickable: true,
        },
        breakpoints: {
          0: {
            centeredSlides: true,
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          }
        }
      });
    }

    if (document.querySelector('.partners__swiper')) {
      const readySwiper = new Swiper('.partners__swiper', {
        spaceBetween: 10,
        navigation: {
          prevEl: '.partners__btn-prev',
          nextEl: '.partners__btn-next',
        },
        pagination: {
          el: '.partners__pagination',
          clickable: true,
        },
        breakpoints: {
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          750: {
            
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 5,
          }
        }
      });
    }
  });
})();
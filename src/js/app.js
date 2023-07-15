/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
} from './modules';

import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

import AOS from 'aos'

import Swiper, { Navigation, Pagination } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// =======================================================================================================
// const tabs = new Tabs('default-tabs', {});

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()
// =======================================================================================================

/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='email'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
import { validForm } from './modules/validFrom.js'
const popupTranks = document.querySelector('.popup-thanks')
const formAbout = document.getElementById('about__form')
validForm(formAbout)
const formTeam = document.getElementById('form-team')
validForm(formTeam, popupTranks)
// =======================================================================================================


//  Получаем все input элементы
const inputs = document.querySelectorAll('input[type="radio"]');
// Добавляем обработчик события "change" для каждого input элемента
inputs.forEach(input => {
  // Получаем соответствующий label элемент для текущего input элемента
  const label = document.querySelector(`label[for="${input.id}"]`);
  if (input.checked) {
    label.classList.add('active');
  }
  input.addEventListener('click', () => {
    inputs.forEach(int => {
      const lab = document.querySelector(`label[for="${int.id}"]`);
      if (int.name === input.name) {
          lab.classList.remove('active');
       } 
    })

    // Добавляем или удаляем класс "active" в зависимости от состояния "checked"
    if (input.checked) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
});


// Находим все элементы input с типом checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Проходимся по каждому checkbox
checkboxes.forEach((checkbox) => {
  // Добавляем обработчик события 'click'
  checkbox.addEventListener('click', () => {
    // Находим связанный label
    // Проверяем состояние checkbox
    if (checkbox.checked) {
      // Если checkbox отмечен, добавляем класс "active" к item
      checkbox.parentElement.classList.add('active');
    } else {
      // Если checkbox не отмечен, удаляем класс "active" у item
      checkbox.parentElement.classList.remove('active');
    }
  });
});



window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});



const swiper = new Swiper('.swiper-first', {
  speed: 0,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl:'.slider-cheked__buttom-next, .slider-cheked__buttom-miss, .slider-first__button',
    prevEl: '.slider-cheked__buttom-back',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: false, 
  autoHeight: true,
});
const swiperS1 = new Swiper('.swiper-scen1', {
  speed: 0,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl:'.slider-cheked__buttom-next1, .slider-cheked__buttom-miss1',
    prevEl: '.slider-cheked__buttom-back',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: false, 
  autoHeight: true,
});
const swiperS2 = new Swiper('.swiper-scen2', {
  speed: 0,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl:'.slider-cheked__buttom-next2, .slider-cheked__buttom-miss2',
    prevEl: '.slider-cheked__buttom-back',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: false, 
  autoHeight: true,
});
const swiperS3 = new Swiper('.swiper-scen3', {
  speed: 0,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl:'.slider-cheked__buttom-next3, .slider-cheked__buttom-miss3',
    prevEl: '.slider-cheked__buttom-back',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: false, 
  autoHeight: true,
});
const swiperS4 = new Swiper('.swiper-scen4', {
  speed: 0,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl:'.slider-cheked__buttom-next4, .slider-cheked__buttom-miss4',
    prevEl: '.slider-cheked__buttom-back',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: false, 
  autoHeight: true,
});
// функционал квиза по сценариям
const inputScen = document.querySelectorAll('.input-scen'); 
const swiperScen = document.querySelectorAll('.swiper-scen'); 
const swiperFirst = document.querySelector('.swiper-first'); 
const buttonScen = document.querySelector('.slider-cheked__buttom-scen'); 

buttonScen.addEventListener('click', () => {
    swiperFirst.classList.add('_disablet')
    for (let index = 0; index < swiperScen.length; index++) {
      const swiper = swiperScen[index];
      if (inputScen[index].checked) {
        swiper.classList.add('_active')
      }
    }
})
const buttonBackScen = document.querySelectorAll('.slider-cheked__buttom-back-scen'); 

  for (let index = 0; index < swiperScen.length; index++) {
    buttonBackScen[index].addEventListener('click', () => {
    const swiper = swiperScen[index];
    if (inputScen[index].checked) {
      swiper.classList.remove('_active')
    }
    swiperFirst.classList.remove('_disablet')
  })
}



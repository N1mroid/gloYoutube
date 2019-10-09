'use strict';

document.addEventListener('DOMContentLoaded', () => {

  //экранная клавиатура
  {
    const keyboardButton = document.querySelector('.search-form__keyboard');
    const keyboard = document.querySelector('.keyboard');
    const closeKeyBoardButton = document.getElementById('close-keyboard');
    const searchInput = document.querySelector('.search-form__input');


    const toggleKeyboard = () => keyboard.style.top = keyboard.style.top ? '' : '50%';

    const typing = () => {
      const target = event.target;

      if (target.tagName.toLowerCase() === 'button') {
        searchInput.value += target.textContent.trim();
      }
      //backspace
      //пробел
    };

    keyboardButton.addEventListener('click', toggleKeyboard);
    closeKeyBoardButton.addEventListener('click', toggleKeyboard);
    keyboard.addEventListener('click', typing);
  }

  //меню
  {
    const burger = document.querySelector('.spinner');
    const sideBarMenu = document.querySelector('.sidebarMenu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      sideBarMenu.classList.toggle('rollUp');
    });

    sideBarMenu.addEventListener('click', e => {
      let target = e.target;
      target = target.closest('a[href="#"]');

      if (target) {
        const parentTarget = target.parentElement;
        sideBarMenu.querySelectorAll('li').forEach(elem => {
          if (elem === parentTarget) {
            elem.classList.add('active');
          } else {
            elem.classList.remove('active');
          }
        });

      }

    });
  }

  //модальное окно
  {
    const divYoutuber = document.createElement('div');

  }

});

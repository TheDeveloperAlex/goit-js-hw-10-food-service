// Кнопка переключения
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let theme = localStorage.getItem('theme');
if (!theme) theme = Theme.LIGHT;
    

const btnThemeNode = document.querySelector('#theme-switch-toggle');
const bodyNode = document.body;

bodyNode.classList.add(theme);



btnThemeNode.checked = theme === Theme.DARK;
btnThemeNode.addEventListener('change', e => {
    
    console.log(e.target.checked);

    bodyNode.classList.remove(Theme.LIGHT);
    bodyNode.classList.remove(Theme.DARK);

    bodyNode.classList.add(e.target.checked ? Theme.DARK : Theme.LIGHT);
    localStorage.setItem('theme', e.target.checked ? Theme.DARK : Theme.LIGHT);
});


// Шаблонизация
const galeryNode = document.querySelector('.js-menu');

import galery from './menu.json';
import galeryTpl from './tpl/galery.handlebars';

galeryNode.innerHTML = galeryTpl(galery);

// 



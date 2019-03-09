'use strict'

let menuItems = document.getElementsByClassName('menu-item'),
	item = document.createElement('li'),
	ul = document.querySelector('ul.menu'),
	title = document.getElementById('title');


menuItems[2].parentNode.insertBefore(menuItems[2], menuItems[1]);
item.textContent = 'Пятый пункт';
item.setAttribute('class', 'menu-item');
ul.appendChild(item);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.innerHTML = "Мы продаем только подлинную технику Apple";

document.querySelector('div.adv').remove();
document.querySelector('div.prompt').innerHTML += prompt('Ваше отношение к технике Apple: ', '');
 


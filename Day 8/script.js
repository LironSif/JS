const liElement = document.querySelector('li.start-here');
liElement.textContent = 'main title';

const newLi = document.createElement('li')
newLi.innerText = ' title 4'
const nestedUl = document.querySelector('ul li ul');
nestedUl.appendChild(newLi)
const firstuL = document.querySelector('ul')
const il = firstuL.querySelector('li')
const lastLi= il.nextElementSibling.nextElementSibling.nextElementSibling
firstuL.removeChild(lastLi)
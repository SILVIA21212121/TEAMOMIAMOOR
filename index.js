const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
   alert('sabia que ibas a decir que si uwu, PORQUE LO EREES MI BEBÉ, psdt: te amoo mi amorcito precioso, ERES EL MEJOOOR <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function() {
   const randomX = parseInt(Math.random()*100);
   const randomY = parseInt(Math.random()*100);
   noBtn.style.setProperty('top',randomY+'%');
   noBtn.style.setProperty('left',randomX+'%');
   noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});
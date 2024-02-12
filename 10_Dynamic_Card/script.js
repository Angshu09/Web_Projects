const imageDiv = document.getElementById('imageDiv');
const textDiv = document.getElementById('textDiv');
const durationC = document.getElementById('duration');
const button = document.getElementById('button');

function setCard(title, cName, views, monthsOld, duration, thumbnail){

    imageDiv.style.background = `url(${thumbnail})`
    imageDiv.style.backgroundPosition = 'center';
    imageDiv.style.backgroundRepeat = 'no-repeat';
    imageDiv.style.backgroundSize = 'cover'

    textDiv.innerHTML = `<h3>${title}</h3><p>${cName} | ${views} | ${monthsOld} months old</p>`;

    durationC.innerHTML = `${duration}`;
    durationC.style.backgroundColor = '#212121';

}

button.addEventListener('click', function(){
    setCard("Hi! This is a dynamic card 🚀", "Angshu Das", 3400, 3, "23.45", 'dynamic.jpg' );
})


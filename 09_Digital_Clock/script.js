
const time = document.getElementById('time');

setInterval(function(){
    const date = new Date();
    time.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`;
}, 1000);

let min = 9
let sec = 60

setInterval(function(){
    if(min == 0 && sec == 1){
        document.getElementById('time').innerHTML = '00 : 00'
    }
    else{
        sec--;
        if(sec == 0){
            min--;
            sec = 60;

            if(min == 0){
                min = min;
            }
        }
        if(min.toString().length == 1){
            min = "0"+min
        }
        if(sec.toString().length == 1){
            sec = "0"+sec
        }
        
        document.getElementById('time').innerHTML =    `${min} : ${sec}`
    }
}, 1000);


const formDiv = document.getElementById('formDiv');
setTimeout(function(){
    formDiv.classList.toggle('active');
}, 10000);


const cross = document.getElementById('cross');
cross.addEventListener('click', ()=>{
    formDiv.style.display = 'none';
});



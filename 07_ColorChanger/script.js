const button = document.querySelectorAll(".box");
const body = document.querySelector("body");

button.forEach(function (e){
    e.addEventListener('click', function(ele){
        if(ele.target.id === 'yellow'){
            body.style.backgroundColor = ele.target.id;
        }
        else if(ele.target.id === 'red'){
            body.style.backgroundColor = ele.target.id;
        }
        else if(ele.target.id === 'aqua'){
            body.style.backgroundColor = ele.target.id;
        }
        else if(ele.target.id === 'green'){
            body.style.backgroundColor = ele.target.id;
        }
        else if(ele.target.id === 'pink'){
            body.style.backgroundColor = ele.target.id;
        }
       
    })
})
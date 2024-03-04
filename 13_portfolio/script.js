const tabs = document.getElementsByClassName('tabs')
const tabcontents = document.getElementsByClassName('tabs-content');

Array.from(tabs).forEach(function(e) {
    e.addEventListener('click', function() {

      for(let tab of tabs){
        tab.classList.remove('active');
      }

      for(let content of tabcontents){
        content.classList.remove('active-content');
      }

      e.classList.add("active")
      document.getElementById(`${e.innerHTML}`).classList.add('active-content')
    });
});

const workCard = document.querySelectorAll('.work-list>div')
workCard.forEach((e)=>{
  e.addEventListener('click', ()=>{
    console.log(e.innerHTML);
    const h2 = e.querySelector('h2');
  
    if(h2.innerHTML.toLowerCase() === "web development" ){
      window.open("https://github.com/Angshu09/Web_Projects", "_blank");
    }
    else if(h2.innerHTML.toLowerCase() === "java"){
      window.open("https://github.com/Angshu09/revise_DSA");
    }
    else if(h2.innerHTML.toLowerCase() === "javascript"){
      window.open("https://github.com/Angshu09/JavaScript");
    }
  })
})

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', ()=>{
  document.querySelector('.ul').style.right = '0';
})

const cross = document.querySelector(".cross");
cross.addEventListener('click', ()=>{
  document.querySelector('.ul').style.right = '-200%';
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxbiOK4NNiCQDHigoUS3Nq8-XV_QnjvIFRB82gbluN1Tz99KRpqfn3HSvVTAA8YnDxmBw/exec'
  const form = document.forms['google-sheet'];

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response) =>{
        alert("Your message have been sent successfully")
        form.reset();
      })
      .catch((error) => {
        alert("An error has occurred");
        form.reset();
      })
  })
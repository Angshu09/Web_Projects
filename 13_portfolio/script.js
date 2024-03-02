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
console.log(workCard);
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

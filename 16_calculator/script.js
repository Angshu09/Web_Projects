function main(){
    const buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((e)=>{
        e.addEventListener('click', ()=>{
            if(e.classList.contains('clear')){
                document.getElementById('display').innerHTML = '';
            }
            else if(e.classList.contains('equal')){
                // if(document.getElementById('display').innerHTML.includes('%')){
                //     const arr = document.getElementById('display').innerHTML.split('%');
                //     console.log(arr);
                // }
                document.getElementById('display').innerHTML = eval(document.getElementById('display').innerHTML);
            }
            else if(e.classList.contains('backSpace')){
                document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.slice(0,-1);
            }
            else{
                document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + e.innerHTML;
            }
            
        })
    })
}

main();
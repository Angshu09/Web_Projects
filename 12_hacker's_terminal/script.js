

const addItem = async (item)=> {
    await randomDelay();
    const div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);
    for(let i=1; i<=3; i++){
        setTimeout(()=>{
            div.innerText += '.'
        },i*1000 )
    }
}

const randomDelay = ()=> {
    return new Promise(function(resolve, reject){
        let num = 1+ 6 * Math.random();
        setTimeout(function(){
            resolve();
        }, num * 1000)
    })
}

async function main(){

    const arr = ["loading", "If you leave the page then your data will lost", "Initializing", "Reading Files", "Fetch passwords", "Sending passwords and personal files to server", "Hacking Complete" ]

    for (const item of arr) {
        await addItem(item);
    }
}

main();




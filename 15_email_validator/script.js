document.querySelector('.btn').addEventListener('click', async (e)=>{
    e.preventDefault();
    document.querySelector('.info').innerHTML = `<img width="30" src="loading.gif">`;
    const key = 'YOUR_API_KEY_HERE';
    const email = document.querySelector('.input').value;
    const res = await fetch(`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`)
    const result = await res.json();
    let div = document.createElement('div');
    for(key of Object.keys(result)){
        if(result[key] != ""){
            div.innerHTML = div.innerHTML + `<p>${key} : ${result[key]}</p>`
        }
    }
    document.querySelector('.info').innerHTML = div.outerHTML;
})
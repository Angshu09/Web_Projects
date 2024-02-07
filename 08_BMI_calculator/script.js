const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    const output = document.querySelector("#output")
   
    if(height == "" || height <=0 || isNaN(height)){
        output.innerHTML = "<p>Write a proper height!</p>";
    }
    else if(weight == "" || weight <=0 || isNaN(weight)){
        output.innerHTML = "<p>Write a proper weight!</p>";
    }
    else{
        const bmi = (weight / (height * height)).toFixed(2)

        if(bmi < 18.6){
            output.innerHTML = `<p>${bmi}</p><p>You are Under weight</p>`
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            output.innerHTML = `<p>${bmi}</p><p>You are In Normal Range</p>`
        }
        else{
            output.innerHTML = `<p>${bmi}</p><p>You are Over Weight</p>`
        }
    }
})



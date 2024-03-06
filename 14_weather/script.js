
const a = '1x39y6y37cxf4ex64yx5axy9d3afbyycb2x157x7x58y5xd4';
async function searchWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${a.replace(/x/g, '').replace(/y/g, '')}&units=metric`
    try{
        const response = await fetch(url);
        if(!response.ok){
            document.querySelector('.weather-img img').src = `img/404.png`;
            document.querySelector('.description-div h2').innerHTML = `<h2>404 not found</h2>`
            throw new Error('Response was not OK');
        }
        const data = await response.json();
        console.log(data);

        document.querySelector('.description-div').innerHTML = `
                                                                <h1>${Math.floor(data.main.temp)}<sup>°C</sup></h1>
                                                                <h2>${data.weather[0].main} - ${data.name}</h2>
                                                                                                                `
        document.querySelector('.humidity-des').innerHTML = `${data.main.humidity}`;
        document.querySelector('.wind-des').innerHTML = `${Math.round(data.wind.speed)}Km/hr`;

        if(data.weather[0].main.toLowerCase() === 'clear'){
            document.querySelector('.weather-img img').src = `img/clear.png`;
        }
        else if(data.weather[0].main.toLowerCase() === 'clouds'){
            document.querySelector('.weather-img img').src = `img/cloud.png`;
        }
        else if(data.weather[0].main.toLowerCase() === 'mist'){
            document.querySelector('.weather-img img').src = `img/mist.png`;
        }
        else if(data.weather[0].main.toLowerCase() === 'rain'){
            document.querySelector('.weather-img img').src = `img/rain.png`;
        }
        else if(data.weather[0].main.toLowerCase() === 'snow'){
            document.querySelector('.weather-img img').src = `img/snow.png`;
        }
        else if(data.weather[0].main.toLowerCase() === 'haze'){
            document.querySelector('.weather-img img').src = `img/cloud.png`;
        }
        else{
            document.querySelector('.weather-img img').src = `img/cloud.png`;
        }
    }
    catch(error){
        console.error('There was a problem to fetch the data from the server:', error);
    }
}

const city = document.querySelector('.search-input');
document.querySelector('.search-btn').addEventListener('click', ()=>{
    searchWeather(city.value.toLowerCase())
})

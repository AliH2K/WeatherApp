import { useState } from "react";
import Results from "./results";


function Search() {

    const [weather, updateWeather] = useState({
        temp: '-',
        weather: {
            desc: '-',
            icon: 'http://openweathermap.org/img/wn/04d@2x.png',
        },
        feelsLike: '-',
        humid: '-',
        wind: '-',
        city: '-',
        country: '-',
    })

    async function Api(url) {       
        const response = await fetch(url);
        const weatherData = await response.json();
        
        if(weatherData.message){
            document.querySelector('#error').classList.remove('hiddenErr');
        } else {
            updateWeather({
                temp: weatherData.main.temp,
                weather: {
                    desc: weatherData.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                },
                feelsLike: weatherData.main.feels_like,
                humid: weatherData.main.humidity,
                wind: weatherData.wind.speed,
                city: weatherData.name,
                country: weatherData.sys.country,
            })
            document.querySelector('#search').classList.add('up')
            document.querySelector('#results').classList.remove('hidden', 'down');
            document.querySelector('#error').classList.add('hiddenErr');
            document.querySelector('.resultSection').classList.remove('hidden', 'down');
            document.querySelector('.x').classList.remove('hiddenX');
        }
        
        
    }

    function Weather(e) {
    
        if (e.key === 'Enter'){
                const cityName = e.target.value.toLowerCase();
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=2ac304fdce0e28d3698608e255f89049`
                Api(url);
        }
    }

    function remove () {
        document.querySelector('#search').classList.remove('up')
        document.querySelector('.x').classList.add('hiddenX');
        document.querySelector('#results').classList.add('down');
        document.querySelector('.resultSection').classList.add('down');
        document.querySelector('.location').value = '';
        setTimeout(() => {
            document.querySelector('#results').classList.add('hidden');
            document.querySelector('.resultSection').classList.add('hidden');
        }, 400)
    }


    return (
    <>
        <div id='search' className='search'>
            <div className='searchField'>
                <h1>Search Location</h1>
                <input className="location" type="text" name="location" placeholder='ex: Tehran' autocomplete='off' onKeyDown={(e) =>{Weather(e)}} /> <span className="x hiddenX" onClick={remove}> X</span>
                <h3 id="error" className="hiddenErr">Please enter a valid city name.</h3>
            </div>
        </div>
        <Results temp={weather.temp} feelsLike={weather.feelsLike} weatherImg={weather.weather.icon} weatherDesc={weather.weather.desc} humid={weather.humid} wind={weather.wind} city={weather.city} country={weather.country} />
    </>
    )
}

export default Search
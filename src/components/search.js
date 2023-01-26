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
    })

    async function Api(url) {       
        const response = await fetch(url);
        const weatherData = await response.json();
        
        if(weatherData.message){
            document.getElementById('error').classList.remove('hiddenErr');
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
            })
            document.getElementById('search').classList.add('up')
            document.getElementById('results').classList.remove('hidden')
            document.getElementById('error').classList.add('hiddenErr');
        }
        
        
    }

    function Weather(e) {
    
        if (e.key === 'Enter'){
            if (e.target.value){
                const cityName = e.target.value.toLowerCase();
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=2ac304fdce0e28d3698608e255f89049`
                Api(url);
            } else {
                alert('Please enter a city name.')
            }
        }
    }


    return (
    <>
        <div id='search' className='search'>
            <div className='searchField'>
                <h1>Search Location</h1>
                <input type="text" name="location" placeholder='ex: Tehran' onKeyDown={(e) =>{Weather(e)}} />
                <h3 id="error" className="hiddenErr">Please enter a valid city name.</h3>
            </div>
        </div>
        <Results temp={weather.temp} feelsLike={weather.feelsLike} weatherImg={weather.weather.icon} weatherDesc={weather.weather.desc} humid={weather.humid} wind={weather.wind} />
    </>
    )
}

export default Search
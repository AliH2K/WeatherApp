function Results(props) {
    return (
    <>
        <div id="results" className='results hidden down'>
            <div className='resultSection hidden down'>
                <h2>{props.city} . {props.country}</h2>
                <div className="flex">
                    <div className='temp'>
                        <h1>Temp</h1>
                        <img src="https://img.icons8.com/external-kosonicon-solid-kosonicon/96/null/external-high-temperatures-temperature-kosonicon-solid-kosonicon.png" alt='-' />
                        <h2>{props.temp} °C</h2>
                    </div>
                    <div className='desc'>
                        <h1>Weather</h1>
                        <img src={props.weatherImg} alt="WeatherImage" className="weatherImg" />
                        <h2>{props.weatherDesc}</h2>
                    </div>
                    <div className='feels'>
                        <h1>Feels like</h1>
                        <img src="https://img.icons8.com/external-kosonicon-outline-kosonicon/64/null/external-temperatures-temperature-kosonicon-outline-kosonicon.png" alt='-' />    
                        <h2>{props.feelsLike} °C</h2>
                    </div>
                    <div className="humidity">
                        <h1>Humidity</h1>
                        <img src="https://img.icons8.com/ios-glyphs/60/null/humidity.png" alt="-" />
                        <h2>{props.humid} %</h2>
                    </div>
                    <div className="wind">
                        <h1>Wind speed</h1>
                        <img src="https://img.icons8.com/ios/50/null/wind--v1.png" alt="-" />
                        <h2>{props.wind} km/h</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Results;
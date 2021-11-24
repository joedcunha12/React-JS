import React, {useState,useEffect} from 'react';


function WeatherHooks(){
    const [title] = useState('London')
    const [weather, setWeather] = useState(0)


    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29")
            .then(res => res.json())
            .then(res => {
                setWeather(res.list[0].temp.max);
                //console.log((res.list[0].temp.max))
            })
    }, [weather]);
    return(
        <div>
            <div className="jumbotron">
                <h2>{title}</h2>
                <strong>Temp: {weather} °C</strong> 
            </div>
            
        </div>
    )
}

export default WeatherHooks;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


//2a8a0301d863431c666f94f116273b69
//https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=

const Weather = ()=>{
  let apiKey = "2a8a0301d863431c666f94f116273b69";
  const [name, setName]=useState("");
  const [icon, setIcon]=useState("");
  const [iconDescrib, setIconDescribe]=useState("");
  const [temp, setTemp]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [windSpeed, setWindSpeed]=useState(0);
  const [windDegree, setWindDegree]=useState(0);
  


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
    .then((response)=>{
    setName(response.data.name);
    setIcon(response.data.weather[0].icon);
    setIconDescribe(response.data.weather[0].description);
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setWindDegree(response.data.wind.deg);
    })
    })
  })

  return(
    <div>
      vous souhaitez trouver la météo dans une autre ville ? 
     <Link to='/search'><button>Cliquez ici</button></Link>
      <h2>Vous vous trouvez actuellement à  :</h2>
      <p>{name}</p>
      <p>Le ciel est :</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={iconDescrib}/>
      <p>Il fait : {temp}°C</p>
      <hr/>
      <p>Taux d'humidité : {humidity}%</p>
      <hr/>
      <p>Vitesse du vent dans votre ville : {Math.round(windSpeed)*3.6}km/h</p>
      <img src={`${process.env.PUBLIC_URL}/assets/arrow.png`} width="50px" style={{transform: `rotate(${windDegree}deg)`}}/>
      </div>
  )
}

export default Weather;
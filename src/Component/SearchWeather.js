import React, { useState }  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Weather.css';


const SearchWeather = () =>{
  let apiKey = "2a8a0301d863431c666f94f116273b69";
  const[valueInput, setValueInput]=useState("");
  const [name, setName]=useState("");
  const [icon, setIcon]=useState("");
  const [iconDescrib, setIconDescribe]=useState("");
  const [temp, setTemp]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [windSpeed, setWindSpeed]=useState(0);
  const [windDegree, setWindDegree]=useState(0);

  let handleInput = (event)=>{
    setValueInput(event.target.value)
  }

  let handleCity=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&units=metric&appid=${apiKey}`)
    .then((response)=>{
      setName(response.data.name);
      setIcon(response.data.weather[0].icon);
      setIconDescribe(response.data.weather[0].description);
      setTemp(response.data.main.temp);
      setHumidity(response.data.main.humidity);
      setWindSpeed(response.data.wind.speed);
      setWindDegree(response.data.wind.deg);
    })
    setValueInput("")
  }

  return(
    <div>
      <input type="text" value={valueInput} onChange={handleInput}></input>
      <button onClick={handleCity}>entrer</button>
      <p>{name}</p>
      <p>Le ciel est :</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={iconDescrib}/>
      <p>Il fait {temp}°C à {name}</p>
      <hr/>
      <p>Taux d'humidité à {name} : {humidity}%</p>
      <hr/>
      <p>Vitesse du vent à {name}: {Math.round(windSpeed)*3.6}km/h</p>
      <img className="arrow"src={`${process.env.PUBLIC_URL}/assets/arrow.png`} width="50px" style={{transform: `rotate(${windDegree}deg)`}}/>
     <div><Link to='/'><button>retour</button></Link></div>
    </div>
  )
}

export default SearchWeather;
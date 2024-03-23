import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox'

export default function WeatherApp(){

    const[weatherInfo,setweatherInfo] = useState({
            city:"Delhi",
            feelslike:23.32,
            temp:25.05,
            tempMin:25.05,
            tempmax:28.30,
            humidity:47,
            weather: "haze",
        }
    );
let updateInfo = (newInfo)=>{
    setweatherInfo(newInfo);
}

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather Site by Piyush </h2>
             <SearchBox updateInfo = {updateInfo}/>
             <InfoBox info = {weatherInfo}/>
        </div>
    );
}
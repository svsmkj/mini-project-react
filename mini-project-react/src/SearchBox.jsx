import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "903c5f8e2cf3620287fba9c8f304a64f";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
        throw err;
        }

    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSumit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            seterror("");
        } catch (err) {
            seterror(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSumit}>
                <TextField id="city" label="City Name" variant="outlined" required
                    value={city} onChange={handleChange} />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No Such Place in our Data</p>}
            </form>
        </div>
    );
}
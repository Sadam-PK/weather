import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiKey = 'bca8f74903c5bd332c06eb286695d843'
  const [data, setData] = useState({})
  const [inputCity, setInputCity] = useState('')


  const getWeatherDetails = (cityName) => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    axios.get(apiUrl).then((res) => {
      console.log('response = ', res.data)
      setData(res.data)
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }

  const handleChangeInput = (e) => {
    setInputCity(e.target.value)
  }

  useEffect(() => {
    getWeatherDetails('islamabad')
  }, [])


  return (
    <div>
      <div className="col-mid-12">
        <div className="weatherBg">
          <h1 className='heading'>Weather App</h1>
          <div className="d-grid col-4 mt-4">
            <input type="text" className='form-control' value={inputCity} onChange={handleChangeInput} />
            <button className='btn btn-primary my-3' type='button' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weather-result-box">
          <img className='weather-icon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
          <h5 className='weather-city'>{data?.name}</h5>
          <h6 className='weather-temp'>{((data?.main?.temp) - 273).toFixed(0)} C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;

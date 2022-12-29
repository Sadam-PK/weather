import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div className="col-mid-12">
        <div className="weatherBg">
          <h1 className='heading'>Weather App</h1>
          <div className="d-grid col-4 mt-4">
            <input type="text" className='form-control' />
            <button className='btn btn-primary my-3' type='button'>Search</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weather-result-box">
          <img className='weather-icon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div className="col-mid-12">
        <div className="weatherBg">
          <h1 className='heading'>Weather App</h1>
          <div className="d-grid col-4 mt-4">
            <input type="text" className='form-control'/>
            <button className='btn btn-primary my-3' type='button'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { WeatherInfo } from './components/WeatherInfo';
import { cities } from './Assets/city_info'
import './App.css';

const App = () => {
  const [cityId, setCityId] = useState([]);
 
/* 
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
  
  var requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  useEffect(() => {
        setLoading(true)
        fetch("https://bh-weather-data.s3.amazonaws.com/stations.json", requestOptions).then(
            res => {
                cityList = res.data;
                setLoading(false)}
        ).catch(err => {
            setHasError(true))
            setLoading(false)})
    }, [])
  */

//This reformats the city object to allow the dropdown to understand it
var cityList = cities.map((e) =>{
  return{
    key: e.name,
    text: e.name,
    value: e.id
  }
});

 /*  handeDropdownChange
   *    Def:
   *      Handles the functionality for when select city dropdown is Clicked
   *    Params:
   *      e (event) - event of the click
   *      value (string) - value(id) of the City
   *    Returns:
   *      Updates the Correct States
   */
  const handleDropdownChange = (e, { value }) => {
    setCityId(value)
  };

  return (
    <>
      <header className="App-header">
        <h1>
          Weather App 2000
        <Dropdown
          id="select-city-dropdown"
          options={cityList} 
          placeholder="Add City +"
          onChange={handleDropdownChange}
          multiple
        />
        {cityId ?
        <WeatherInfo cities={cityId} listOfCities={cityList}/>:
        null
        }
      </h1>
      </header>
        
    </>
    )
}

export default App;

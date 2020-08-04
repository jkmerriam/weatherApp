import React from 'react';
import { Card, Header } from 'semantic-ui-react'
import { newyorkWeather, baltimoreWeather, losangelesWeather, chicagoWeather, torontoWeather, kokomoWeather } from '../Assets/city_info';


/*  CurrentWeather
   *    Def:
   *      Handles the functionality for displaying current weather info
   *    Props:
   *      cityID: ID of the requested city current weather
   *   Returns:
   *       React Fragment with a Card to display City Time, Temperature, Humidity
   */

export const CurrentWeather = (props) => {
    const { cityID } = props;
    let currentWeather = [];
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
      fetch(`https://bh-weather-data.s3.amazonaws.com//current/${cityID}.json`, requestOptions).then(
          res => {
              currentWeather = res.data;
              setLoading(false)}
      ).catch(err => {
          setHasError(true))
          setLoading(false)})
  }, [])
*/

//NOTE this Switch statement would not be necessary with API
    if (cityID) {
        switch (cityID) {
            case "KJRB0": currentWeather = newyorkWeather;
                break;
            case "KMTN0": currentWeather = baltimoreWeather;
                break;
            case "KPWK0": currentWeather = chicagoWeather;
                break;
            case "KOKK0": currentWeather = kokomoWeather;
                break;
            case "72295": currentWeather = losangelesWeather;
                break;
            case "71508": currentWeather = torontoWeather;
                break;
            default: return console.log("uknown category");
        }
    }



    return (
        <>
            <Card fluid>
                <Card.Content>
                    <div>
                        <Header as="h6">
                            Current Time: {currentWeather.time_local}
                        </Header>
                    </div>
                    <div>
                        <Header as="h6">
                            Current temperature: {currentWeather.temperature}
                        </Header>
                    </div>
                    <div>
                        <Header as="h6">
                            Current Humidity: {currentWeather.humidity}
                        </Header>
                    </div>
                </Card.Content>
            </Card>
        </>
    )
}
import React from 'react';
import { Card, List, Grid, Header } from 'semantic-ui-react'
import { CurrentWeather } from './CurrentWeather';
import { HistoricalGraph } from './HistoricalGraph'

 /*  WeatherInfo
   *    Def:
   *      Handles the functionality for displaying current and historical Data
   *    Props:
   *      cities(array): city IDs selected in dropdown
    *      listOfCities(array): list of cities used by Dropdown
   *   
   */
export const WeatherInfo = (props) => {
  const { cities, listOfCities } = props;
  //creates a new array based on selected IDs in dropdown
  const displayCities = listOfCities.filter(({ value }) => cities.includes(value));




  return (
    <>
      {displayCities.map((city, index) => (
        <Card fluid key={index}>
          <Card.Content>
            <Grid width={8} divided>
              <Grid.Column width ={4}>
                <div className="city-current-header">
                  <Header textAlign="center">{city.text}</Header>
                </div>
                <List>
                  <List.Item>
                    <CurrentWeather cityID={city.value} />
                  </List.Item>
                  </List>
              </Grid.Column>
              <Grid.Column width={9}>
                <HistoricalGraph cityID={city.value} />
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      ))}
    </>
  )
}

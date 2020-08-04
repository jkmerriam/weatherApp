import React from 'react';
import { newyorkHistory, baltimoreHistory, kokomoHistory, chicagoHistory, losangelesHistory, torontoHistory } from '../Assets/city_info';
import { ResponsiveLine } from '@nivo/line';

/*  HistoricalWeather
   *    Def:
   *      Handles the functionality for displaying hisotrical weather info in a Graph
   *    Props:
   *      cityID: ID of the requested city current weather
   *   Returns:
   *       React Fragment with a Grid to responsive Line graph that displays Time vs Temperature
   */

export const HistoricalGraph = (props) => {
    const { cityID } = props;
    let historicalWeather = [];
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
                  historicalWeather = res.data;
                  setLoading(false)}
          ).catch(err => {
              setHasError(true))
              setLoading(false)})
      }, [])
    */
    if (cityID) {
        switch (cityID) {
            case "KJRB0": historicalWeather = newyorkHistory;
                break;
            case "KMTN0": historicalWeather = baltimoreHistory;
                break;
            case "KPWK0": historicalWeather = chicagoHistory;
                break;
            case "KOKK0": historicalWeather = kokomoHistory;
                break;
            case "72295": historicalWeather = losangelesHistory;
                break;
            case "71508": historicalWeather = torontoHistory;
                break;
            default: return console.log("uknown category");
        }
    }
    //Format the object to be an Array of Objects
    var formatData = Object.keys(historicalWeather).map(key => ({ [key]: historicalWeather[key] }));

    //map out the data object to use time and temperature as x and y respectively
    formatData = formatData[1].data.map((e) => {
        return {
            x: e.time,
            y: e.temperature
        }
    })
    //create new array with id field for Graph to build
    var graphedData = [{ id: "weather", data: formatData }];
    return (
        <>
            <div style={{ height: '600px', width: '900px' }}>
                <ResponsiveLine
                    data={graphedData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Time',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Temperature',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </>
    )
}
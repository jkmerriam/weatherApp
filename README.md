#To Start the Project
* npm install
* npm start

# Take Home Exercise

The exercise is to create a simple dashboard that allows the user to select cities for which they
would like to see current and historical weather data.

# User Stories

As a user, I should be able to

* add new cities to the dashboard -Completed
* re-arrange the order the cities are displayed in - incomplete
* remove a city from the dashboard- completed
* see the historical data shown in a graph-completed
* see the details for a given timepoint in the historical data when hovering or clicking - incomplete

# Wireframe

This is what we envision the app to look like:

    ┌───────────────────────────────────────────┐ ┌─────────────────────┐
    │            Weather Report 2000            │ │     + Add City      │
    └───────────────────────────────────────────┘ └─────────────────────┘
    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │    ┌────────────┐ ┌──────────────────────────────────────────┐    │
    │    │   City 1   │ │                                          │    │
    │    └────────────┘ │                                          │    │
    │    ┌────────────┐ │                                          │    │
    │    │            │ │             Historical Data              │    │
    │    │  Current   │ │                                          │    │
    │    │  Weather   │ │                                          │    │
    │    │            │ │                                          │    │
    │    └────────────┘ └──────────────────────────────────────────┘    │
    └───────────────────────────────────────────────────────────────────┘
    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │    ┌────────────┐ ┌──────────────────────────────────────────┐    │
    │    │   City 2   │ │                                          │    │
    │    └────────────┘ │                                          │    │
    │    ┌────────────┐ │                                          │    │
    │    │            │ │             Historical Data              │    │
    │    │  Current   │ │                                          │    │
    │    │  Weather   │ │                                          │    │
    │    │            │ │                                          │    │
    │    └────────────┘ └──────────────────────────────────────────┘    │
    └───────────────────────────────────────────────────────────────────┘
                        (etc, for each city added)

# Design

Don't worry too much about the visual design. We are not looking for your design skills here, but
your coding skills. So just keep the design basic.

# Constraints

The application needs to be written in Typescript, React, and HTML. You can use any other frameworks
and libraries that you like. And you are welcome to use a template such as
[create-react-app](https://github.com/facebook/create-react-app) or similar, Or not. It's entirely
up to you. Just let us know if you have used a template and which one.

# Optimize for

* Correct use of React and Typescript
* Readability

# APIs

These are the APIs that we expose. They are all hosted on:
`https://bh-weather-data.s3.amazonaws.com/`.

## `/stations.json`

Returns the list of valid cities in an array:

    [
        {
            'name': 'New York, NY',
            'id': 1
        },
        {
            'name': 'Baltimore, MD',
            'id': 2
        },

        ...
    ]

## `/current/<city_id>.json`

Get current weather for the given `city_id`. Each data point will have this structure:

    {
        "time": "2019-05-01 23:00:00",
        "time_local": "2019-05-02 00:00",
        "temperature": 12.2,
        "dewpoint": 7.9,
        "humidity": 75,
        "precipitation": 0.1,
        "precipitation_3": null,
        "precipitation_6": null,
        "snowdepth": null,
        "windspeed": 9.3,
        "peakgust": 16.7,
        "winddirection": 270,
        "pressure": 1016,
        "condition": 4
    }

We do not envision that you display all the data.

## `/historical/<city_id>.json`

Get historical weather data for the given `city_id`. The data point returned will be the same as the
above.

# Time limit

We hope you can spend about two hours on this little project. If you finish faster, go you! :) If
not, please limit yourself and don't spend much longer than two hours.



# Skyfall

## Overview 

This app was created for Chingu Voyage 45 by Team 27. The app displays meteorite data retrieved from the [NASA Open Data Portal Meteorite Landings API]((https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh)) when a user searches for the name, year of strike, composition, and mass range of a meteorite.

Live Site: https://team27-skyfall.netlify.app/

## Features 

This app includes:

- A search component enabling users to filter meteorite data by name, composition, mass range, and year of strike
- A search button that will perform the search based on the user's input and display the filtered details.
- A clear button that will reset the search criteria.
- A table that displays a row for each meteorite data based on the search criteria.
- A row at the top of the table that will show the specific search the user inputted.
- A geolocation display that converts the longitude and latitude of the meteorite strike into a location 
- Three different charts (Radar, Radio, and Scatter) that graphically displays year, composition, and mass 
metrics of either a specific meteorite or all meteorite strikes. 
- Light/Dark mode 

## Running the Project 

1. Clone repo on local machine 
```
git clone git@github.com:chingu-voyages/v45-tier2-team-27.git
```
2. Change to project directory 
```
cd v45-tier2-team-27
```
3. Install dependencies
```
npm install 
```
4. Start server 
```
npm run dev
```
5. Build and deploy app
```
npm run build 
```

## Dependencies

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Tailwindcss](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/)
- [Leaflet](https://leafletjs.com/) 
- [Vite](https://vitejs.dev/)

## Contributors

- **Alexandra Akinyemi** (Developer)
    - [Github](https://github.com/AOA19)
    - [Linkedin](https://www.linkedin.com/in/alexandraak/)

- **David Riley** (Developer)
    - [Github](https://github.com/Drayved)
    - [Linkedin](https://www.linkedin.com/in/david-riley-dev/)

- **Emma Ma** (Developer)
    - [Github](https://github.com/EmmaBin)
    - [Linkedin]()

- **John Foughty** (Designer)
    - [Linkedin](https://www.linkedin.com/in/john-foughty-8ab43026/)

- **Sarah Murphee** (Voyage Guide)
    - [Linkedin](https://www.linkedin.com/in/sarah-murphree/)

import axios from 'axios';

export const getMoreInfoAboutPlaceRequest = async (placeId) => {
    try {
        const resolve = await axios({
            method: "get",
            url: 'https://tedirant.github.io/v1/stations/' + placeId + '?fields=livecam,analysis,fires&units.temperature=celsius&units.distance=kilometer&units.pressure=millibar&AQI=US&language=ru',
            // url: 'http://localhost:8080/v1/stations/' + placeId + '?fields=livecam,analysis,fires&units.temperature=celsius&units.distance=kilometer&units.pressure=millibar&AQI=US&language=ru',
            config: {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                }
            }
        });
        return resolve.data;
    } catch (e) {
        return ({
            error: "graphql.js",
            message: e
        });
    }
  };
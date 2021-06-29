<template>
    <div style="display: flex;">
        <CardWithMoreInfo ref="childComponent"/>
        <GoogleMap
            class="google-map"
            api-key="AIzaSyBsJcCIgOhrIAq0Xi-sdOYzz3kEgQMxGdI"
            :center="center.coordinates"
            :zoom="center.zoom"
            :styles="googleMapStyles"
        >
            <Marker v-for="(marker, index) in markers" :key="index" :options="{ icon: marker.icon, position: marker.coordinates }" @click="childComponent.getMoreInfoAboutPlace(marker.id)" />
        </GoogleMap>
    </div>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ cityName.toUpperCase() }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="cityName = 'bishkek'">Bishkek</a>
            <a class="dropdown-item" @click="cityName = 'osh'">Osh</a>
            <a class="dropdown-item" @click="cityName = 'chuy'">Chuy</a>
            <a class="dropdown-item" @click="cityName = 'all'">All Cities</a>
            <!-- <div class="dropdown-divider"></div> -->
        </div>
    </li>
</template>

<script lang="ts">
import { computed, reactive, ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import googleMapStyles from './google-map-style.js';
import CardWithMoreInfo from '../CardWithMoreInfo.vue';
import axios from 'axios';

export default {
    components: { GoogleMap, Marker, CardWithMoreInfo },
    setup() {
        const childComponent = ref();

        const markers = ref([]);
        const cityName = ref('all');

        const center = computed(() => {
            if (cityName.value == 'bishkek') {
                getPlacesByCity('bishkek');
                return {
                    coordinates: {
                        lat: 42.885594798510375,
                        lng: 74.56885029467288
                    },
                    zoom: 12
                }
            }
            if (cityName.value == 'chuy') {
                getPlacesByCity('chuy');
                return {
                    coordinates: {
                        lat: 42.88618344194866,
                        lng: 74.67199616524394
                    },
                    zoom: 13
                }
            }
            if (cityName.value == 'osh') {
                getPlacesByCity('osh');
                return { 
                    coordinates: {
                        lat: 40.5137232943775,
                        lng: 72.81520611601944
                    },
                    zoom: 13
                }
            }
            getPlacesByCity('all');
            return {
                coordinates: {
                    lat: 41.44855894512741,
                    lng: 74.36434600637111
                },
                zoom: 7
            }
        });


        
        const getPlacesByCity = (cityName) => {
            const marker = reactive({
                id: '',
                cityName: '',
                coordinates: {
                    lat: 0,
                    lng: 0
                },
                aqi: 0,
                title: '',
                icon: ''
            });
            axios                                                       
                .get('https://tedirant.github.io/v1/places/map?bbox=72.21563761672184,40.44199805633072,75.4426971893986,43.196796384822015&units.temperature=celsius&units.distance=kilometer&units.pressure=millibar&AQI=US&language=ru')
                .then((allPlaces) => {
                    markers.value.length = 0;
                    if (cityName != 'all')
                        allPlaces.data.forEach(place => {
                            if (place.url.split('/')[2] == cityName) {
                                marker.id = place.id
                                marker.cityName = cityName;
                                marker.coordinates.lat = place.coordinates.latitude; 
                                marker.coordinates.lng = place.coordinates.longitude, 
                                marker.aqi = place.aqi;
                                marker.icon = marker.aqi <= 50 ?
                                    'https://www.airkaz.org/image/markerGreen.png' : marker.aqi <= 100 && marker.aqi > 50 ?
                                    'https://www.airkaz.org/image/markerYellow.png' : marker.aqi <= 150 && marker.aqi > 100 ?
                                    'https://www.airkaz.org/image/markerOrange.png' : 'https://www.airkaz.org/image/markerRed.png';
                                marker.title = place.name,
                                marker.title = marker.title.split(': ')[1];
                                markers.value.push(JSON.parse(JSON.stringify(marker)));
                            }
                        });
                    else {
                        allPlaces.data.forEach(place => {
                            marker.id = place.id
                            marker.cityName = cityName;
                            marker.coordinates.lat = place.coordinates.latitude; 
                            marker.coordinates.lng = place.coordinates.longitude, 
                            marker.aqi = place.aqi;
                            marker.icon = marker.aqi <= 50 ? 'https://www.airkaz.org/image/markerGreen.png'
                                : marker.aqi <= 100 && marker.aqi > 50 ? 'https://www.airkaz.org/image/markerYellow.png'
                                : marker.aqi <= 150 && marker.aqi > 100 ? 'https://www.airkaz.org/image/markerOrange.png'
                                : 'https://www.airkaz.org/image/markerRed.png';
                            marker.title = place.name,
                            marker.title = marker.title.split(': ')[1];
                            markers.value.push(JSON.parse(JSON.stringify(marker)));
                        });
                    }
                })
                .catch((error) => console.log(error));
        }

        return { center, markers, googleMapStyles, childComponent, cityName }
    },
}
</script>

<style scoped>
.google-map {
    width: 70%;
    height: calc(100vh - 154px)
}

.nav-item.dropdown {
    position: absolute;
    right: 0;
    padding: 25px 6rem 25px 1rem;
    list-style: none;
}
</style>
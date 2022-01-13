<template>
    <div style="display: flex;">
        <!-- <CardWithMoreInfo ref="childComponent"/> -->
        <GoogleMap
            class="google-map"
            api-key="AIzaSyBsJcCIgOhrIAq0Xi-sdOYzz3kEgQMxGdI"
            :center="center.coordinates"
            :zoom="center.zoom"
            :styles="googleMapStyles"
        >
                <!-- <Marker v-for="(marker, index) in markers" :key="index" :options="{ icon: marker.icon, position: marker.coordinates }" @click="childComponent.getMoreInfoAboutPlace(marker.id)" /> -->
                <!-- <Circle v-for="(circle, index) in circles" :key="index" :options="circle" /> -->
                
        </GoogleMap>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { GoogleMap } from 'vue3-google-map';
import googleMapStyles from '@/scripts/google-map-style.js';
// import placesJSON from './PlacesJSON.js';
// import CardWithMoreInfo from '../CardWithMoreInfo.vue';
import { useStore } from 'vuex';

export default {
    components: { GoogleMap },
    setup() {
        const store = useStore();

        const childComponent = ref();

        const center = computed(() => {
            if (store.getters.selectedCity == 'Бишкек') {
                return {
                    coordinates: {
                        lat: 42.885594798510375,
                        lng: 74.56885029467288
                    },
                    zoom: 12
                }
            }
            if (store.getters.selectedCity == 'Ош') {
                return { 
                    coordinates: {
                        lat: 40.5137232943775,
                        lng: 72.81520611601944
                    },
                    zoom: 13
                }
            }
            return {
                coordinates: {
                    lat: 41.44855894512741,
                    lng: 74.36434600637111
                },
                zoom: 7
            }
        });

        return { center, googleMapStyles, childComponent }
    },
}
</script>

<style scoped>
.google-map {
    width: 100%;
    height: calc(100vh - 94.6px);
}
</style>
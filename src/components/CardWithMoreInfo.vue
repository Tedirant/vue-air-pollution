<template>
        <div v-if="infoAboutPlace.name" class="card" style="width: 18rem; min-width: 30%; max-width: 30%;">
            <div 
                :class="{
                    'yellow': infoAboutPlace.color == 'yellow',
                    'orange': infoAboutPlace.color == 'orange',
                    'green': infoAboutPlace.color == 'green',
                    'red': infoAboutPlace.color == 'red',
                }" 
                style="min-height: 100px;">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ infoAboutPlace.city }}</h5>
                <h6 class="card-title">{{ infoAboutPlace.breadCrumbs[1].label }}</h6>
                <p class="card-text">
                    {{ infoAboutPlace.breadCrumbs[2].label }}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">AQI={{ infoAboutPlace.current.aqi }}</li>
                <li class="list-group-item">PM2.5={{ infoAboutPlace.current.concentration }}µg/m³</li>
                <li class="list-group-item" v-html="infoAboutPlace.label"></li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>


        <!-- <div v-if="infoAboutPlace.name" class="card" style="width: 18rem; min-width: 30%; max-width: 30%;">
            <div 
                :class="{
                    'yellow': infoAboutPlace.color == 'yellow',
                    'orange': infoAboutPlace.color == 'orange',
                    'green': infoAboutPlace.color == 'green',
                    'red': infoAboutPlace.color == 'red',
                }" 
                style="min-height: 100px;">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ infoAboutPlace.name }}</h5>
                <p class="card-text">
                    {{ infoAboutPlace.fullName }}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">AQI={{ infoAboutPlace.aqi }}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
            </div>
        </div> -->
</template>

<script>
import { reactive, ref } from 'vue';
import { getMoreInfoAboutPlaceRequest } from '../services/api';
// import placesJSON from './GoogleMap/PlacesJSON.js';
export default{
    setup() {
        const info = ref({});

        const infoAboutPlace = reactive({
            breadCrumbs: [
                {
                    label: '',
                    url: ''
                },
                {
                    label: '',
                    url: ''
                },
                {
                    label: '',
                    url: ''
                },
            ],
            city: '',
            current: {},
            label: '',
            name: '',
            sources: {},
            color: ''
        });

        // const infoAboutPlace = reactive({
        //     fullName: '',
        //     name: '',
        //     aqi: '',
        //     color: ''
        // });

        const getMoreInfoAboutPlace = async (placeId) => {
            info.value = await getMoreInfoAboutPlaceRequest(placeId);
            console.log(info);
            infoAboutPlace.breadCrumbs = info.value.breadcrumbs;
            infoAboutPlace.city = info.value.city;
            infoAboutPlace.current = info.value.current;
            infoAboutPlace.label = info.value.label;
            infoAboutPlace.color = info.value.current.aqi <= 50 ?
                                'green' : info.value.current.aqi <= 100 && info.value.current.aqi > 50 ?
                                'yellow' : info.value.current.aqi <= 150 && info.value.current.aqi > 100 ?
                                'orange' : 'red';
            infoAboutPlace.name = info.value.name;
            infoAboutPlace.sources = info.value.sources[0];
            console.log(infoAboutPlace);
        }

        // const getMoreInfoAboutPlace = (placeId) => {
        //     info.value = placesJSON.find(x => x.id == placeId);
        //     infoAboutPlace.fullName = info.value.url;
        //     infoAboutPlace.aqi = info.value.aqi;
        //     infoAboutPlace.color = info.value.aqi <= 50 ?
        //                         'green' : info.value.aqi <= 100 && info.value.aqi > 50 ?
        //                         'yellow' : info.value.aqi <= 150 && info.value.aqi > 100 ?
        //                         'orange' : 'red';
        //     infoAboutPlace.name = info.value.name;
        // }

        return {
            getMoreInfoAboutPlace, infoAboutPlace
        }
    }
}
</script>

<style scoped>
.green {
    background: green;
}
.yellow {
    background: yellow;
}
.orange {
    background: orange;
}
.red {
    background: red;
}

</style>

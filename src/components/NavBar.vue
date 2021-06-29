<template>
    <!-- <img src="../assets/images/logo.png" class="logo" style="border: none;"/> -->

    <header class="header bg-light">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand py-4" href="#">Air-P</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/map">Map</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">info</router-link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { reactive } from 'vue';
import router from '../router'

export default {
    name: 'NavBar',
    setup: () => {
        const currentCity = reactive({
            name: 'bishkek',
            coordinates: {
                lat: 42.885594798510375,
                lng: 74.56885029467288,
            }
        });

    return {
        router,
        currentCity
    }
  }
}
</script>

<style scoped>
.header {
    min-height: 84px;
}

.nav-item,
.navbar-brand {
    margin-right: 50px;
    font-size: 20px;
    font-weight: 600;
}

.nav-item:not(:last-child) a::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background-color: black;
    transform: scale(0);
    transition: all .3s;
}

.nav-item a:hover::after {
    transform: scale(1);
}
</style>

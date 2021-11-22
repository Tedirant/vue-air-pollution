<template>
    <!-- <img src="../assets/images/logo.png" class="logo" style="border: none;"/> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
        <div>
            <router-link class="navbar-brand" to="/">Air-P<span class="sr-only">(current)</span></router-link>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Главная</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/map">Карта</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">Информация</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li v-if="router.currentRoute.value.name == 'Map'" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ selectedCity }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" @click="selectCity('Бишкек')">Бишкек</a>
                        <a class="dropdown-item" @click="selectCity('Ош')">Ош</a>
                        <a class="dropdown-item" @click="selectCity('Джалал-Абад')">Джалал-Абад</a>
                        <a class="dropdown-item" @click="selectCity('Каракол')">Каракол</a>
                        <a class="dropdown-item" @click="selectCity('Кызыл-кия')">Кызыл-кия</a>
                        <a class="dropdown-item" @click="selectCity('Узген')">Узген</a>
                        <a class="dropdown-item" @click="selectCity('Балыкчы')">Балыкчы</a>
                        <a class="dropdown-item" @click="selectCity('Кара-Балта')">Кара-Балта</a>
                        <a class="dropdown-item" @click="selectCity('Нарын')">Нарын</a>
                        <a class="dropdown-item" @click="selectCity('Талас')">Талас</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click="selectCity('Кыргызстан')">Кыргызстан</a>
                    </div>
                </li>
                <li class="nav-item-login d-flex align-items-center">
                    <button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Войти</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Войти</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Имя пользователя</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя пользователя...">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Пароль</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль...">
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-warning" data-dismiss="modal">Регистрация</button>
                                    <button type="button" class="btn btn-outline-success">Войти</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
import router from '@/services/router';
import { useStore } from 'vuex';

export default {
    name: 'NavBar',
    setup: () => {
        const store = useStore();

        const selectedCity = ref('Бишкек')

        const selectCity = (cityName) => {
            selectedCity.value = cityName;
            store.dispatch('saveSelectedCity', cityName);
        }

    return {
        router,
        selectCity,
        selectedCity
    }
  }
}
</script>

<style scoped>
.nav-item,
.navbar-brand {
    padding-block: 1rem;
    margin-right: 20px;
    font-size: 20px;
}

.nav-item-login {
    padding-block: 10px;
    margin-right: 20px;
    font-size: 20px;
}

.nav-item.dropdown:hover {
    background-color: #f8f9fa;
}

.navbar-brand {
    margin-left: 20px;
    font-size: 22px;
    font-weight: 600;
}

.nav-item:hover {
    background-color: rgb(192, 192, 201);
    transition: 0.4s;
    
}

/* .nav-item a::after {
    margin-left: 0;
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
} */
</style>

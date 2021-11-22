import { createStore } from 'vuex'

const store = createStore({
    state: {
        selectedCity: 'Бишкек'
    },
    getters: {
        selectedCity(state) {
            return state.selectedCity
        }
    },
    mutations: {
        Save_Selected_City(state, selectedCity) {
            state.selectedCity = selectedCity
        }
    },
    actions: {
        saveSelectedCity({commit}, selectedCity) {
            commit('Save_Selected_City', selectedCity);
        }
    }
})

export default store;
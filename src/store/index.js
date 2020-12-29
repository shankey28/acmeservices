import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './modules/auth';
import {albumInfo} from './modules/albums'
import {applicantInfo} from './modules/applicantInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        albumInfo,
        applicantInfo
    }
})  
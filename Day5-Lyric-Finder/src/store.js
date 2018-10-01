import Vue from 'vue';
import Vuex from 'vuex';
import http from './http';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        trackList: [],
        heading: 'Top 10 Tracks'
    },
    mutations: {
        setTrackList (state, tracks) {
            state.trackList = tracks;
        },
        setHeading (state, heading) {
            state.heading = heading;
        }
    },
    actions: {
        fetchTopTen ({ commit }) {
            http.get('/chart.tracks.get', {
                params: {
                    page: 1,
                    page_size: 10,
                    country: 'us',
                    f_has_lyrics: 1
                }
            })
                .then(({ data }) => {
                    commit('setTrackList', data.track_list);
                })
                .catch((error) => console.log(error.response));
        },
        showSearchResults ({ commit }, payload) {
            commit('setTrackList', payload.tracks);
            commit('setHeading', payload.heading);
        }
    }
});

<template>
    <div>
        <spinner v-if="isEmptyObject(track) || isEmptyObject(lyrics)"/>
        <template v-else>
            <router-link to="/" class="btn btn-dark btn-sm mb-4">
                Go Back
            </router-link>
            <div class="card">
                <h5 class="card-header">
                    {{ track.track_name }} by <span class="text-secondary">{{ track.artist_name }}</span>
                </h5>
                <div class="card-body">
                    <p class="card-text">{{ lyrics.lyrics_body }}</p>
                </div>
            </div>

            <ul class="list-group mt-3">
                <li class="list-group-item">
                    <strong>Album ID</strong>: {{ track.album_id }}
                </li>
                <li class="list-group-item">
                    <strong>Song Genre</strong>: {{ genre }}
                </li>
                <li class="list-group-item">
                    <strong>Explicit Words</strong>: {{ track.explicit === 0 ? 'No' : 'Yes' }}
                </li>
                <li class="list-group-item">
                    <strong>Release Date</strong>: {{ track.first_release_date | formatDate }}
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
import Spinner from '@/components/layout/Spinner';
import { isEmptyObject } from '@/util/mixins';
import dateFnsFormat from 'date-fns/format';

export default {
    components: { Spinner },
    mixins: [isEmptyObject],
    data () {
        return {
            track: {},
            lyrics: {}
        };
    },
    computed: {
        genre () {
            const musicGenreList = this.track.primary_genres.music_genre_list;
            return musicGenreList.length === 0 ? 'N/A' : musicGenreList[0].music_genre.music_genre_name;
        }
    },
    methods: {
        fetchLyrics () {
            this.$http.get('/track.lyrics.get', {
                params: { track_id: this.$route.params.id }
            })
                .then(({ data }) => {
                    this.lyrics = data.lyrics;
                })
                .catch((error) => console.log(error.response));
        },
        fetchTrack () {
            this.$http.get('/track.get', {
                params: { track_id: this.$route.params.id }
            })
                .then(({ data }) => {
                    this.track = data.track;
                })
                .catch((error) => console.log(error.response));
        }
    },
    created () {
        this.fetchLyrics();
        this.fetchTrack();
    },
    filters: {
        formatDate (value, format = 'MM/DD/YYYY') {
            return dateFnsFormat(value, format);
        }
    }
};
</script>

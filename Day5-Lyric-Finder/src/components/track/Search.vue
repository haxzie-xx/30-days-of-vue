<template>
    <div class="card card-body mb-4 p-4">
        <h1 class="display-4 text-center">
            <icon>music</icon> Search For A Song
        </h1>
        <p class="lead text-center">Get the lyrics for any song</p>
        <form @submit.prevent="onSubmitSearch">
            <div class="form-group">
                <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Song title..."
                    v-model="trackTitle"
                >
            </div>
            <button class="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Track Lyrics</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            trackTitle: ''
        };
    },
    methods: {
        onSubmitSearch () {
            this.$http.get('/track.search', {
                params: {
                    q_track: this.trackTitle,
                    page: 1,
                    page_size: 10,
                    s_track_rating: 'desc'
                }
            })
                .then(({ data }) => {
                    this.$store.dispatch('showSearchResults', {
                        tracks: data.track_list,
                        heading: `Search Results for '${this.trackTitle}'`
                    });
                    this.trackTitle = '';
                })
                .catch((error) => console.log(error.response));
        }
    }
};
</script>

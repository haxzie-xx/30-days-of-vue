<template>
    <div class="col-md-6">
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h5>{{ track.artist_name }}</h5>
                <p class="card-text">
                    <strong>
                        <icon>play</icon> Track
                    </strong>
                    : {{ track.track_name }}
                    <br>
                    <strong>
                        <icon>compact-disc</icon> Album
                    </strong>
                    : {{ track.album_name }}
                </p>
                <router-link :to="`lyrics/track/${track.track_id}`" class="btn btn-dark btn-block">
                    <icon>chevron-right</icon> View Lyrics
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        track: {
            type: Object,
            required: true
        }
    }
};
</script>

<template>
    <div>
        <spinner v-if="trackList === undefined || trackList.length === 0"/>
        <template v-else>
            <h3 class="text-center mb-4">{{ heading }}</h3>
            <div class="row">
                <track-item
                    v-for="track in trackList"
                    :key="track.track_id"
                    :track="track"
                />
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Spinner from '@/components/layout/Spinner';
import TrackItem from './TrackItem';

export default {
    components: { Spinner, TrackItem },
    computed: {
        ...mapState(['trackList', 'heading'])
    }
};
</script>

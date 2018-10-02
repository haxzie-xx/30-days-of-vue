<template>
    <div>
        <search/>
        <tracks/>
    </div>
</template>

<script>
import Tracks from '@/components/track/Tracks';
import Search from '@/components/track/Search';

export default {
    components: { Tracks, Search }
};
</script>

<template>
    <div id="app">
        <navbar/>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
    components: { Navbar },
    created () {
        this.$store.dispatch('fetchTopTen');
    }
};
</script>

<style>
    body {
        background: #ddd;
    }
</style>

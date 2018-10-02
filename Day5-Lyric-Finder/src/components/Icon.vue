<template>
    <span v-if="stack" class="fa-stack fa-lg">
        <i :class="[`fa fa-stack-2x fa-${stack}`, stackClass]"/>
        <i :class="[`fa fa-stack-1x fa-${icon}`, iconClass]"/>
    </span>
    <i v-else :class="[`fa fa-${icon}`, iconClass]"/>
</template>

<script>
export default {
    props: {
        iconClass: {
            type: String,
            default: ''
        },
        stack: {
            type: String,
            default: ''
        },
        stackClass: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            icon: this.$slots.default[0].text
        };
    }
};
</script>

<template>
    <DashhNav />
    <slot>
        <DashBoard/>
    </slot>
</template>


<script>
import DashhNav from '@/components/nav/DashhNav.vue';
import DashBoard from '@/views/DashBoard.vue';

export default {
    name: "DashboardNav",
    components: {
        DashhNav,
        DashBoard
    },
};
</script>
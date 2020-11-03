<template>
    
</template>

<script>
export default {
    name: 'logout',
    data() {
        return {

        };
    },
    methods: {
        logout() {
            sessionStorage.clear('userData');
            this.$router.push('/main');
        }
    },
    created() {
        this.logout();
    }
}
</script>
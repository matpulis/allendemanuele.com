<template>
    <div class="main-footer">
        <div class="left-side">© {{new Date().getFullYear()}} Allen De Manuele</div>  

        <span>Designed by Allen De Manuele & developed by <a href="http://matpulis.com">Matthew Pulis</a></span>

        <div class="right-side">Thank you for visiting</div>  
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        
        },
        data () {
            return {
                show_loading: true
            }
        },
        watch: {

        },
        methods: {

        },
        mounted(){
            var self = this;

        }
    }
</script>

<style lang="scss">
    .main-footer{
        border-top: 1px solid rgba(0,0,0,0.2);
        margin: 0 auto;
        display: block;
        width: 80%;
        margin-top: 40px;
        text-align: center;
        padding: 40px 0;
        color: #000000;
        font-size: 13px;
        .left-side{
            float: left;
        }
        .right-side{
            float: right;
        }
    }
</style>

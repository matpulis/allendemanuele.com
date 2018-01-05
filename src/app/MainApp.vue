<template>
    <div class="wrapper">
        
        <transition name="fade" mode="out-in">
            
            <div v-if="show_loading" key="1" class="loader">
                <img src="/dist/assets/images/logo-loading.png" alt="Allen Demanuele Logo">
                <span class="surname">DEMANUELE</span>
            </div>

            <div v-else key="2" class="main-app">
                <main-header></main-header>

                <div class="main-container">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import MainHeader from './components/MainHeader.vue'
    export default {
        name: 'app',
        components: {
            'main-header' : MainHeader,
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
            setTimeout(function(){ self.show_loading = false; }, 2000);
        }
    }
</script>

<style lang="scss">
    .wrapper{
        height: 100%;
        display: block;
        width: 100%;

        .main-app, .main-container{
            width: 100%;
            height: 100%;
        }
    }

    .loader{
        position: relative;
        z-index: 0;
        background: #0B0B0B;
        height: 100%;
        width: 100%;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        .surname{
            font-family: Gotham;
            font-size: 150px;
            font-weight: bold;
            color: #000000;
            letter-spacing: 0;
        }
        >img{
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            animation: fade infinite 2s linear;
        }
    }
</style>

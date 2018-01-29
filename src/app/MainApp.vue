<template>
    <div class="wrapper">
        
        <transition name="slide-right-fast">
            <div v-if="show_loading" key="1" :class="['loader', {'hide': loader_up}]">
                <div class="content-slide">
                    <div class="loader-content">
                        <img :class="[{'show':show_loading_logo}]" src="/dist/assets/images/logo-loading.png" alt="Allen Demanuele Logo">
                    </div> 
                </div> 

                <div :class="['overlay-slide', {'show':loading_overlay}]"></div>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div v-if="show_main_page" class="main-app">
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
                show_loading: false,
                show_loading_logo: false,
                loading_overlay: false,
                loader_up: false,

                show_main_page: false,
            }
        },
        watch: {

        },
        methods: {
            loading_sequence: function(){
                var self = this;
                self.loading_overlay = false;
                setTimeout(function(){ self.show_loading = true; }, 300);
                setTimeout(function(){ self.show_loading_logo = true; }, 1000);
                setTimeout(function(){ self.loading_overlay = true; }, 3000);
                setTimeout(function(){ self.loader_up = true; }, 3300);
                setTimeout(function(){ self.show_main_page = true; }, 3500);
                setTimeout(function(){ self.show_loading = false; }, 4100);
            },
        },
        mounted(){
            var self = this;
            this.loading_sequence();
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
        position: absolute;
        z-index: 0;
        top: 0;
        background: #0B0B0B;
        height: 100%;
        width: 100%;
        transition: all 0.4s ease;
        &.hide{
            top: -100%;
        }
        .content-slide{
            height: 100%;
            width: 100%;
            display: table;
            .loader-content{
                position: relative;
                text-align: center;
                display: table-cell;
                vertical-align: middle;
                width: 100%;
                >img{
                    position: absolute; top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    transition: opacity 0.5s ease;
                    opacity: 0;
                    &.show{
                        opacity: 1;
                    }
                }
            }
        }
        .overlay-slide{
            position: absolute;
            bottom: 0;
            height: 0;
            width: 100%;
            left: 0;
            background: #171717;
            transition: height 0.4s ease;
            &.show{
                height: 100%;
            }
        }
            
    }
</style>

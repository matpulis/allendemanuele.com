<template>
    <div :class="['main-header', {'menu-open': $store.state.menu_open}]">
        <div class="header-top">
            <transition name="fade-fast" mode="out-in">
                <router-link to="/">
                    <img key="1" v-if="$store.state.menu_open" src="/dist/assets/images/logo-menu.png" alt="Allen.">
                    <img key="2" v-else src="/dist/assets/images/logo-header.png" alt="Allen.">
                </router-link>
            </transition>

            <a @click="toggle_menu()" class="btn-menu">
                <div class="line-1"></div>
                <div class="line-2"></div>
            </a>
        </div>

        <ul v-if="$store.state.menu_open" class="main-menu">
            <transition-group name="fade-left" mode="out-in">
                <li key="1" v-if="show_menu_item > 0"><router-link to="/">Home</router-link></li>
                <li key="2" v-if="show_menu_item > 1"><router-link to="portfolio">Portfolio</router-link></li>
                <li key="3" v-if="show_menu_item > 2"><router-link to="experience">Experience</router-link></li>
                <li key="4" v-if="show_menu_item > 3"><router-link to="about">About</router-link></li>
                <li key="5" v-if="show_menu_item > 4"><router-link to="reach">Reach</router-link></li>
            </transition-group>
        </ul>

        <div v-if="$store.state.menu_open" class="quote">
            <p>Creativity is just</p>
            <p>connecting things.</p>
            <p><strong>- Steve Jobs</strong></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
           
        },
        data () {
            return {
                show_menu_item: 0,
            }
        },
        watch: {

        },
        methods: {
            toggle_menu: function(){
                var self = this;
                if(self.$store.state.menu_open){
                    self.show_menu_item = 0;
                }
                else{
                    for ( var x = 1; x < 6; x++) {
                        setTimeout(function(){
                            self.show_menu_item++;
                        }, (200*x));
                    }
                }

                self.$store.state.menu_open = !self.$store.state.menu_open;
            }
        },
        mounted(){
            var self = this;

        }
    }
</script>

<style lang="scss">
    .main-header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 70px;
        border-radius: 0 0 10px;
        transition: all 0.3s ease;
        overflow: hidden;
        .header-top{
            padding-top: 40px;
            padding-left: 10%;
            width: 50%;
            height: 70px;
            .btn-menu{
                position: relative;
                display: block;
                float: right; 
                width: 40px;
                height: 20px;
                >div{
                    position: absolute;
                    width: 25px;
                    height: 1px;
                    background: #000000;
                    left: 0;
                    transition: all 0.3s ease;
                    &.line-1{
                        top: 0;
                    }
                    &.line-2{
                        bottom: 0;
                    }
                }
            }
        }

        .main-menu{
            font-family: 'RobotoSlab';
            font-weight: 300;
            font-size: 60px;
            list-style: none;
            padding: 0;
            margin: 10% 0 0 10%;
            li{
                a{
                    position: relative;
                    display: inline-block;
                    opacity: 0.7;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 90px;
                    padding-left: 0px;
                    transition: all 0.5s ease;
                    &:before{
                        content: " ";
                        display: block;
                        width: 300px;
                        height: 2px;
                        background: #0B0B0B;
                        position: absolute;
                        left: -700px;
                        transition: all 0.5s ease;
                    }
                    &.active{
                        opacity: 1;
                    }
                    &:hover{
                        padding-left: 35px;
                        &:before{
                            background: #fff;
                            left: -250px;
                        }
                    }
                    
                }

                &:nth-child(1){
                    a{
                        &:before{
                            top: 46px;
                        }
                    }
                }
                &:nth-child(2){
                    a{
                        &:before{
                            top: 48px;
                        }
                    }
                }
                &:nth-child(3){
                    a{
                        &:before{
                            top: 45px;
                        }
                    }
                }
                &:nth-child(4){
                    a{
                        &:before{
                            top: 54px;
                        }
                    }
                }
                &:nth-child(5){
                    a{
                        &:before{
                            top: 46px;
                        }
                    }
                }
            }
        }

        .quote{
            position: absolute;
            bottom: 40px;
            right: 40px;
            p{
                font-size: 13px;
                margin: 0;
                opacity: 0.8;
                color: #ffffff;
                &:last-child{
                    opacity: 1;
                }
            }
        }

        &.menu-open{
            width: 100%;
            height: 100%;
            background: #0B0B0B;
            border-radius: 0;
            .btn-menu{
                >div{
                    background: #ffffff;
                    &.line-1{
                        transform: rotate(-45deg);
                        top: 10px;
                    }
                    &.line-2{
                        bottom: 9px;
                        transform: rotate(45deg);
                    }
                }
            }
        }
    }
</style>

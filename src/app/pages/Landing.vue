<template>
  <div id="landing-page" class="page">
    <div class="page-left">

        <transition name="fade-down">
            <article  v-if="show_content">
                <h1>UI & UX Designer</h1>
                <p>Hey there, I’m Allen - an enthusiastic user interface and experience designer currently shaping the future of network communications, network security and e-learning experiences at GFI Software. I design with a user-centered approach in the aim of creating thoughtful experiences, and have done so with companies including Aurea, Kerio & Exinda. My personal mission is to create effortless user experiences and design delightful digital products.</p>
                <router-link to="experience" class="article-cta">EXPERIENCE</router-link>
            </article>
        </transition>
      
        <transition name="fade">
            <router-link v-if="show_content" to="portfolio" class="btn-next-page">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="8px" viewBox="0 0 14 8" version="1.1">
                    <g id="3.-About-Me" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-182.000000, -898.000000)" stroke-linecap="square">
                        <g id="Group-6" transform="translate(160.000000, 872.000000)" fill="#000000" fill-rule="nonzero" stroke="#000000" stroke-width="0.5">
                            <g id="arrows" transform="translate(29.000000, 30.000000) rotate(90.000000) translate(-29.000000, -30.000000) translate(25.500000, 23.500000)">
                                <polygon id="Shape" points="0.786257479 0 0 0.87042897 5.38156851 6.50021737 0 12.1284842 0.786030419 13 7 6.50021737"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </router-link>
        </transition>
    </div>

    <div class="page-right">
        <transition name="fade">
            <img v-if="show_image" src="/dist/assets/images/allen-full.png" alt="Allen Demanuele">
        </transition>
    </div>


  </div>  
</template>

<script>

export default {

  data () {
    return {
        show_content: false,
        show_image: false,
    }
  },
  methods: {
   
  },
    mounted(){
        var self = this;
        setTimeout(function(){ self.show_image = true; }, 600);
        setTimeout(function(){ self.show_content = true; }, 1000);
    }
}
</script>

<style lang="scss" >
    #landing-page{
        .page-left{
            display: table;
            height: 100%;
            article{
                display: table-cell;
                vertical-align: middle;
            }
        }
        .page-right{
            padding: 40px;
            text-align: right;
            height: 100%;
            >img{
                margin: 0 auto;
                display: inline-block;
                max-height: 100%;
            }
        }
    }

 
</style>

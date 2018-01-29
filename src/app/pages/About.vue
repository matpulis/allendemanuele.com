<template>
  <div id="about-page" class="page">
    <div class="page-full">
      <article class="clearfix">
        <h1>Constantly in motion, learning and seeking unique experiences</h1>
        <p>Born and raised in the archipelago of Malta, I’ve always had a passion for art and design. I am a designer and technologist creating symbiotic relationships between information and people. Ever since I was a kid, I’ve been drawn to finding simple solutions to complex challenges. Fused with my passion for creating alluring things, I'm on a constant journey of creating the immersive products of tomorrow. Although digital is my specialty, I have a wealth of experience in branding, print and custom typography. When not in front of my mac working with pixels, you'll find me making memories with the family, indulging in food, exploring quaint locations or seeking my edge in the futures market. If you’de like to know more, beginning 2018, I will be sharing my interests and experiences on Instagram.</p>

        <div class="instagram-container">
          <transition-group name="fade">
            <div :key="index" v-for="(image, index) in insta_feed" class="image-container">
                <img :src="image.url" alt="Instagram Image" title="Instagram Image">
            </div>
          </transition-group>
        </div>

        <a href="http://instagram.com" target="_blank" class="article-cta">INSTAGRAM</a>
      </article> 
      
      <router-link to="reach" class="btn-next-page">
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
    </div>

  </div>  
</template>

<script>

export default {

  data () {
    return {
       insta_feed: [],
    }
  },
  methods: {
   
  },
  mounted(){
    var self = this;
    //Insta token 6275753051.9e571c0.5bb1b237f8de4e6995e301b79910939c
    this.$http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=6275753051.9e571c0.5bb1b237f8de4e6995e301b79910939c&count=3').then(response => {
      var i = 1;console.log(response.body.data);
      response.body.data.forEach(image => {
        setTimeout(() => {
            self.insta_feed.push({
              url: image.images.low_resolution.url,
            });
        }, (i*200) );
        
        i++;
      });
     
    }, response => {
      // error callback

    });
  }
}
</script>

<style lang="scss" >
  #about-page{
    .page-full{
      display: table;
      height: 100%;
      article{
        display: table-cell;
        vertical-align: middle;
      }

      .instagram-container{
        height: 238px;
        margin: 40px 0 20px;
        .image-container{
            margin-right: 30px;
            height: 238px;
            width: 238px;
            overflow: hidden;
            &:hover img{
                opacity: 1;
                transform: scale(1.03);
            }
            img{
                opacity: 0.8;
                width: 238px;
                height: 238px;
                transition: all 0.4s ease;
            }
        }
        
      }
    }
  }
 
</style>

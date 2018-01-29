<template>
  <div id="portfolio-page" class="page">

    <div class="scroll-container" v-simplebar>
      <div class="dribbble-feed clearfix">
        <transition-group name="fade-down">
          <a :key="index" v-for="(image, index) in dribbble_feed" :href="image.dribbble_url"><img :src="image.url" :alt="image.title" :title="image.title"></a>
        </transition-group>
      </div>

      <main-footer></main-footer>
    </div>

  </div>  
</template>

<script>

export default {

  data () {
    return {
      dribbble_feed: []
    }
  },
  methods: {
   
  },
  mounted(){
    var self = this;

    //76dfe3d5c428110a653854467a23b6c209df6f0a9ee7d3194304f3f2a42887b3
    this.$http.get('https://api.dribbble.com/v1/users/RANDOMPopsycle/shots?access_token=6ed972085fecb7078ef53a3056562c05de38514ebd7d095b6a84f6dba7743031').then(response => {
      var i = 1;
      response.body.forEach(image => {  console.log(image);
        setTimeout(() => {
            self.dribbble_feed.push({
              title: image.title, 
              url: image.images.hidpi,
              dribbble_url: image.html_url  
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

  #portfolio-page{
    padding-top: 120px;
    .scroll-container{
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      height: 100%;
    }
    .dribbble-feed{
      margin: 0 auto;
      display: block;
      width: 80%;
      
      text-align: center;
      a{
        display: inline-block;
        width: 400px;
        height: 200px;
        margin-right: 30px;
        margin-bottom: 30px;
        border:1px solid rgba(50,50,50,0.1);
        overflow: hidden;
        &:hover img{
          opacity: 1;
          transform: scale(1.03);
        }
        >img{
          width: 100%;
          height: 100%;
          opacity: 0.8;
          transition: all 0.4s ease;
        }
      }
    }
  }
 
</style>

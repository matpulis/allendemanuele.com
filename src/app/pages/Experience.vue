<template>
  <div id="experience-page" class="page">
    
    <div class="page-full">
      <div class="content">
        <article class="clearfix">
          <div class="article-left">
            <h1>Present Occupation</h1>
            <span class="sub-text"><small><i>Instructional Content Engineer</i></small></span>
            <p>My main role is to create yet in recent months also to lead the design efforts of our team, which is a group fully dedicated to working on our various company websites and products. Our tasks range from product and page improvements to complete overhauls of entire flows, as well as the designing of some of our marketing-driven digital initiatives. Creating visuals that elegantly illustrate complex data. Creating wireframes, prototypes, and preparing assets for software development teams to create visually engaging, intuitive and easy-to-use products.</p>
          </div>
          <div class="article-right">
            <img src="/dist/assets/images/gfi-logo.png" alt="GFI">
          </div>
        </article>

        <article class="clearfix">
          <div class="article-left">
            <h1>Education</h1>
            <span class="sub-text"><small><i>Bachelor of Arts (Honours)</i></small></span>
            <p>My years at the University of MCAST served as preparation to think critically and execute visual solutions across print and digital platforms, including communications, marketing, and branding, as well as layout, editorial, art direction, and packaging. With a personal emphasis and study on creative thinking as a means for solving problems. Also, revolved around exploratory exercises, real-life work, and competitions. Having had the privilege of visiting and collaborating with designers based in the United Kingdom and Germany.</p>
            <a href="http://linkedin.com" target="_blank" class="article-cta">LINKEDIN</a>
          </div>
          <div class="article-right">
            <img src="/dist/assets/images/mcast-logo.png" alt="MCAST">
          </div>
          
        </article>
      </div>
      
      <router-link to="about" class="btn-next-page">
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
       
    }
  },
  methods: {
   
  },
  mounted(){
    var self = this;

  }
}
</script>

<style lang="scss" >

  #experience-page{
    .page-full{
      display: table;
      height: 100%;
      .content{
        display: table-cell;
        vertical-align: middle;
        article{
          padding-bottom: 60px;
          &:last-child{
            padding-bottom: 0;
          }
          .article-right {
              float: left;
              width: 25%;
              padding-top: 85px;
              padding-left: 40px;
              img{
                width: 100px;
              }
          }
          .article-left {
              width: 75%;
              float: left;
          }
        }
      }
    }

  }
 
</style>

<template>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
    <div style="background:black">

        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(banner,index) in banners" v-bind:key="index">
                    <img :src="banner">
                </div>
            </div>
            <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
  export default {
        layout: "barMenu",
    data () {
      return {
        banners: [
            '/1 (1).png',
            '/1 (2).png',
            '/1 (3).png',
            '/1 (4).png',
            '/1 (5).png',
            '/1 (6).png',
            '/1 (7).png',
            '/1 (8).png',
            '/1 (9).png',
            '/1 (10).png',
            '/1 (11).png',
            '/1 (12).png',
            '/1 (13).png',
            '/1 (14).png',
            '/1 (15).png',
            '/1 (16).png',
            '/1 (17).png',
            '/1 (18).png',
            '/1 (19).png',
            '/1 (20).png',
        ],
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
      console.log('app init', this)
    //   setTimeout(() => {
    //     this.banners.push('/5.jpg')
    //     console.log('banners update')
    //   }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'I will slideTo banners 3')
       this.mySwiper.slideTo(1)
    }
  }
</script>


<style lang="less" scoped>
.my-swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-pagination {
        > .swiper-pagination-bullet {
            background-color: red;
        }
    }
}
</style>
<template>
  <div>
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <template v-for="item in list">
        <swiper-slide :key="item">
          <img :src="require(`~/assets/img/${item.path}`)"/>
        </swiper-slide>
      </template>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <template v-for="item in list">
        <swiper-slide :key="item">
          <img :src="require(`~/assets/img/${item.path}`)"/>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>


<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        list: [],
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 3, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 3, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    mounted() {
      const self = this
      axios.get('/api').then(list => {
        self.list = list.data
      })
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    },
    components: {
swiper, swiperSlide
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image:url('/static/images/surmon-1.jpg');
    }
    &.slide-2 {
      background-image:url('/static/images/surmon-6.jpg');
    }
    &.slide-3 {
      background-image:url('/static/images/surmon-8.jpg');
    }
    &.slide-4 {
      background-image:url('/static/images/surmon-9.jpg');
    }
    &.slide-5 {
      background-image:url('/static/images/surmon-10.jpg');
    }
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>
<template>
  <div v-swiper:swiper="swiperOption" class="swiper" @slideChange="slideChanged">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="swiper-slide__image">
          <img :src="require(`~/assets/cover.jpg`)"/>
        </div>
      </div>
      <div class="swiper-slide" v-for="(img, k) in list" :key="k">
        <div class="swiper-slide__wrapper">
          <div class="swiper-slide__info">
            <div class="swiper-slide__location">{{ img.location }}</div>
            <div class="swiper-slide__date">{{ img.date }}</div>
          </div>
          <div class="swiper-slide__image">
            <img :src="require(`~/assets/img/${img.path}`)"/>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="swiper-slide__wrapper">
          <div class="swiper-slide__info">
            <a class="swiper-slide__url" href="https://drive.google.com/drive/folders/1Ho4cSoaPH5PV1mBiZPKZea_z3ojSiqvJ?usp=sharing" target="_blank">
              GO!!!
            </a>
          </div>
          <div class="swiper-slide__image">
            <img :src="require(`~/assets/qrcode.png`)"/>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          spaceBetween: 10,
          zoom: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
        },
      }
    },
    props: ['list'],
    computed: {
      current () {
        return this.$store.state.swipe.current
      }
    },
    mounted() {
    },
    methods: {
      slideChanged () {
        this.$store.commit('swipe/pick', this.swiper.activeIndex)
      }
    },
    watch: {
      current (v) {
        if (v !== this.swiper.activeIndex) {
          this.swiper.slideTo(v)
        }
      }
    },
  }
</script>


<style lang="stylus">
.swiper
  height 100%
  width 100%
  padding 20px
  *
    box-sizing border-box
  .swiper-slide
    display flex
    justify-content center
    align-items center

    &__wrapper
      width 100%
      height 100%
      display flex
      flex-direction column

    &__info
      display flex
      justify-content space-between
      padding 0 10px
      font-family 'Montserrat'
      font-weight 900

    &__location
      position relative
      padding-left 25px
      color #eeeeee
      &:after
        content ''
        position absolute
        top 0
        left 0
        width 25px
        height 25px
        background-image url('~assets/location.png')
        background-size cover

    &__date
      color #eee
      font-style italic
      letter-spacing 1.5px

    &__url
      color #acc1eb
      font-family 'Montserrat'
      font-weight 900
      font-size 20px
      text-align center
      width 100%
      text-decoration none

    &__image
      width 100%
      height 100%
      overflow hidden
      display flex
      align-items center
      justify-content center
      position relative
      img
        max-width 100%
        max-height 100%
        border-radius 10px
        position absolute

  .swiper-pagination-progressbar
    background-color rgba(160, 160, 160, 0.5)
    &-fill
      background-color #FDDCD7
</style>
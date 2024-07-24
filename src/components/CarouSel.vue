<template>
    <div class="carousel">
      <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in images" :key="index">
            <img :src="require(`@/assets/${image}`)" alt="Image" class="carousel-image" />
          </div>
        </div>
      </div>
      <div class="swiper-button-prev" @click="prevPage"></div>
      <div class="swiper-button-next" @click="nextPage"></div>
      <div class="custom-pagination">
        <div
          class="pagination-item"
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'active': index === currentPage }"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css'; // Import Swiper styles
  
  export default {
    data() {
      return {
        images: [
          'c894b3dda87cbb792bb9d47c863f3f17.jpg',
          'c894b3dda87cbb792bb9d47c863f3f17.jpg',
          'c894b3dda87cbb792bb9d47c863f3f17.jpg',
          'c894b3dda87cbb792bb9d47c863f3f17.jpg',
          
        ],
        mySwiper: null,
        currentPage: 0,
      };
    },
    mounted() {
      this.initSwiper();
    },
    methods: {
      initSwiper() {
        this.mySwiper = new Swiper(this.$refs.mySwiper, {
          centeredSlides: true,
          spaceBetween: 40,
          slidesPerView: 1.5,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        this.mySwiper.on('slideChange', () => {
          this.currentPage = this.mySwiper.realIndex;
        });
      },
      nextPage() {
        this.mySwiper.slideNext();
      },
      prevPage() {
        this.mySwiper.slidePrev();
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    text-align: center;
    margin-top: 2rem;
  }
  
  .carousel-image {
    width: 790px;
    height: 400px;
    border-radius: 15px;
  
  }
  
  .custom-pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .pagination-item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    margin: 0 5px;
  }
  @media (max-width:499px){
    body{
      overflow-x: none;
    }
    .carousel {
      width: 600px;
      position: relative;
      overflow: hidden;
      text-align: center;
  }
  .carousel-image {
      width: 360px;
      height: 420px;
      border-radius: 15px;
      opacity: 1;
      background-size: cover;
      background-color: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  }
  
  .carousel {
      width: 100%;
      position: relative;
      overflow: hidden;
      text-align: center;
  }
  
  }
  
  .pagination-item.active {
    background-color: #007BFF;
  }
  </style>
  
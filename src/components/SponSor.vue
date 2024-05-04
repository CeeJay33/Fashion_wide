<template>
    <div class="marquee">
      <div class="track" ref="track" :style="{ animation: animationStyle }">
        <div class="content">
          <img v-for="(item, index) in duplicatedItems" :key="index" :src="getImageUrl(item)" class="image__content" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          "ad918bad7863435ae63fb36dcb1a5ae5.jpg",
          "2-1.jpg",
          "14-louis-vuitton-gold-vadim-pavlov-transparent.png",
          "versace-logo-popular-luxury-brand-free-vector.jpg",
        //    "images.png"
        ], // Example image URLs
        animationStyle: "marquee 30s linear infinite"
      };
    },
    computed: {
      duplicatedItems() {
        // Duplicate the items array to create seamless scrolling
        return [...this.items, ...this.items, ...this.items,];
      }
    },
    mounted() {
      this.adjustContent();
      window.addEventListener("resize", this.adjustContent);
    },
    beforeUnmounted() {
      window.removeEventListener("resize", this.adjustContent);
    },
    methods: {
      getImageUrl(item) {
        return item.startsWith("http") ? item : require(`@/assets/${item}`);
      },
      adjustContent() {
        const trackWidth = this.$refs.track.clientWidth;
        const contentWidth = this.$refs.track.querySelector(".content").scrollWidth;
        if (contentWidth > trackWidth) {
          const diff = contentWidth - trackWidth;
          const duration = diff / 50; // Adjust scroll speed based on content width
          this.animationStyle = `marquee ${duration}s linear infinite`;
        } else {
          this.animationStyle = "none";
        }
      }
    }
  };
  </script>
  
  <style>
  .marquee {
    max-width: 100%;
    overflow: hidden;
    margin: 3rem 0;
  }
  
  .track {
    white-space: nowrap;
  }
  
  .content {
    display: inline-flex;
  }
  
  .image__content {
    width: 250px;
    height: 250px;
    margin-right: 20px; /* Adjust spacing between images */
  }
  </style>
  
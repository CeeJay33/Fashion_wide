<template>
  <div class="designers__section">
    <!-- <h2>#Top Rated Designers</h2> -->
    <div class="marquee">
      <div class="track" ref="track">
        <div class="content">
          <div class="pro" v-for="(designer, index) in duplicatedDesigners" :key="index" v-on:click="showDetails(designer.uniqued)">
            <template v-if="isImage(designer.file_path)">
              <img :src="getImageUrl(designer.file_path)" alt="">
            </template>
            <template v-else-if="isVideo(designer.file_path)">
              <video autoplay muted loop>
                <source :src="getImageUrl(designer.file_path)" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </template>
            <div class="des">
              <span><i class="fa fa-eye"></i> {{ formatNumber(designer.likes) }} likes</span>
              <h5>{{ designer.company_name }}</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TopDesigners",
  data() {
    return {
      designers: [],
    }
  },
  async mounted() {
    let response = await axios.get('http://localhost:80/Fashion2/Fashion/info.php')
    this.designers = response.data
    this.startAnimation();
  },
  beforeUnmounted() {
    this.stopAnimation();
  },
  computed: {
    duplicatedDesigners() {
      return [...this.designers, ];
    }
  },
  methods: {
    getImageUrl(item) {
      return item.startsWith("http") ? item : `http://localhost:80/Fashion2/Fashion/${item}`;
    },
    isImage(filePath) {
      return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(filePath);
    },
    isVideo(filePath) {
      return /\.(mp4|mov|webm|ogg)$/i.test(filePath);
    },
    showDetails(uniqued) {
      this.$router.push({ name: 'DesignerDetails', params: { id: uniqued } });
    },
    startAnimation() {
      const track = this.$refs.track;
      const content = track.querySelector(".content");
      const trackWidth = track.clientWidth;
      const contentWidth = content.scrollWidth;
      const duration = (contentWidth / trackWidth) * 7; // Adjust scroll speed based on content width
      content.style.animation = `marquee ${duration}s linear infinite`;
    },
    stopAnimation() {
      const content = this.$refs.track.querySelector(".content");
      content.style.animation = "none";
    },


    formatNumber(number) {
      if (typeof number !== 'number' || isNaN(number)) {
        return '';
      }

      let formattedNumber = '';
      if (number >= 1000000) {
        formattedNumber = (number / 1000000).toFixed(1) + 'M';
      } else if (number >= 1000) {
        formattedNumber = (number / 1000).toFixed(0) + 'k';
      } else {
        formattedNumber = number.toString();
      }

      return formattedNumber;
    },
  }
};
</script>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
  /* animation-iteration-count: infinite; Make the animation repeat infinitely */
}

.designers__section h2{
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
    font-weight: 600;
    margin-top: 3rem;
    padding: 2rem 4rem;
}
</style>

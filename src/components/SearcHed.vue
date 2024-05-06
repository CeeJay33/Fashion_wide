<template>
    <LayOut>
      <PopUp ref="popup" :isVisible="isShowing" @open="openPopup" @close="isShowing = false"/>
      <div class="designers__dection">
        <!-- flexing this area -->
        <div class="fashion__designers">
          <div class="designers__box" v-for="designer in designers" :key="designer.uniqued">
            <div class="desiners__image">
              <img :src="require('@/assets/c894b3dda87cbb792bb9d47c863f3f17.jpg')" alt="">
            </div>
            <!-- flexing this area -->
            <div class="designer__addition__info">
              <div class="designer__profile__img">
                <div class="flex__area">
                  <img :src="`http://localhost:80/Fashion2/Fashion/${designer.file_path}`" alt="">
                </div>
                <div class="designer__profile__name">
                  <p>{{ designer.company_name }}</p>
                </div>
              </div>
              <div class="designer__profile__likes">
                <div class="flex__area">
                  <div class="likes">
                    <i class="fas fa-heart" 
                       :class="{ 'fa-hearts': isLikedByUser(designer.uniqued), 'liked': isLikedByUser(designer.uniqued) }" 
                       @click="toggleLike(designer.uniqued)">
                    </i>
                    <span :class="{ 'animate-up': animateLikes }">{{ formatNumber(getTotalLikes(designer.uniqued), 'likes') }}</span>
                  </div>
                </div>
                <div class="designer__profile__views">
                  <div class="views">
                    <i class="fas fa-eye"></i>
                    <span :class="{ 'animate-up': animateViews }">{{ formatNumber(52000000, 'views') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SponSor />
      </div>
    </LayOut>
  </template>
  
  <script>
  import LayOut from '@/layouts/LayOut.vue';
  import PopUp from '@/components/popup/PopUp.vue';
  import { isAuthenticated } from '@/auth/auth';
  import axios from 'axios';
  
  export default {
    name: "DesignerView",
  
    components: {
      LayOut,
      PopUp
    },
  
    data() {
      return {
        animateLikes: false,
        animateViews: false,
        designers: [],
        likedKey: 'designer_liked', 
        isShowing: false
      };
    },
  
    async mounted() {
    //   this.fetchLikesCount();
      console.log('Uniqued parameter:', this.$route.params.name);
      try {
      let response = await axios.get(`http://localhost:80/Fashion2/Fashion/searched.php?name=${this.$route.params.name}`);
      this.designers = response.data;
      if (response.data && response.data.length === 0) {
        this.message = 'No designer found';
      }
    } catch (error) {
      this.message = 'An error occurred while fetching data';
      console.error(error);
    }
    },
  
    methods: {
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
  
      openPopup() {
      this.isShowing = true;
    },
  
      async toggleLike(designerId) {
        const authenticated = await isAuthenticated();
        if (!authenticated) {
          this.$refs.popup.openModal(); 
          return; 
        }
  
        const isLiked = this.isLikedByUser(designerId);
  
        if (isLiked) {
          this.removeLike(designerId);
        } else {
          this.addLike(designerId);
        }
      },
  
      getTotalLikes(designerId) {
        const designer = this.designers.find(d => d.uniqued === designerId);
        return designer ? designer.likes : 0;
      },
  
      isLikedByUser(designerId) {
        return localStorage.getItem(`${this.likedKey}_${designerId}`) === 'true';
      },
  
      async addLike(designerId) {
        localStorage.setItem(`${this.likedKey}_${designerId}`, 'true');
  
        const designer = this.designers.find(d => d.uniqued === designerId);
        designer.likes++;
  
        this.updateLikesCount(designerId, designer.likes);
      },
  
      async removeLike(designerId) {
        localStorage.removeItem(`${this.likedKey}_${designerId}`);
  
        const designer = this.designers.find(d => d.uniqued === designerId);
        designer.likes--;
  
        this.updateLikesCount(designerId, designer.likes);
      },
  
      async updateLikesCount(designerId, likesCount) {
        try {
          const response = await fetch('http://localhost:80/Fashion2/Fashion/AddLikes.php', {
            method: 'POST',
            WithCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ designerId, likesCount })
          });
          const data = await response.json();
          console.log('Likes count updated successfully', data);
        } catch (error) {
          console.error('Failed to update likes count', error);
        }
      },
  
    //   async fetchLikesCount() {
    //     try {
    //       const response = await fetch('http://localhost:80/Fashion2/Fashion/count.php');
    //       const data = await response.json();
    //       this.designers = data.data;
    //       console.log(data.data.likes)
    //     } catch (error) {
    //       console.error('Failed to fetch likes count', error);
    //     }
    //   }
    }
  };
  </script>
  
  <style>
  @import url("@/styles/Designers.css");
  
  .animate-up {
    animation: slide-up 0.5s;
  }
  
  @keyframes slide-up {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .liked {
    color: red; 
  }
  </style>
  
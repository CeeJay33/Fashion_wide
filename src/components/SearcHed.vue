<template>
  <LayOut>
    <PopUp ref="popup" :isVisible="isShowing" @open="openPopup" @close="isShowing = false" />
    <div class="designers__dection">

      <h2>Searched results for <span class="span">{{ $route.params.name }}</span></h2>
      <!-- flexing this area -->
      <div class="fashion__designers">
        <div class="designers__box" v-for="designer in designers" :key="designer.uniqued">
          <div class="desiners__image">
            <img :src="`http://localhost:80/Fashion2/Fashion/${designer.company_logo}`" alt="">
            <div class="pop__up__selection">
              <h3>{{ designer.company_name }}</h3>
              <div class="svg__pop__up" id="svg__pop_up">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"
                    fill="#080341" />
                </svg>

                <svg width="20px" height="20px" viewBox="-0.5 0 25 25" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                  :class="{ liked: likedDesigners.includes(designer.uniqued) }" @click="toggleLike(designer.uniqued)">
                  <path
                    d="M15.6001 3.91998C14.268 3.92397 12.9849 4.42297 12 5.32001C11.2277 4.61746 10.2676 4.15485 9.23679 3.98858C8.20602 3.82231 7.1491 3.95955 6.19498 4.3836C5.24087 4.80765 4.43081 5.50018 3.8635 6.37671C3.29619 7.25324 2.99614 8.27591 3.00004 9.32C3.00004 15.77 12 20.14 12 20.14C12 20.14 21 15.77 21 9.32C21 7.88784 20.4311 6.51434 19.4184 5.50165C18.4057 4.48895 17.0322 3.91998 15.6001 3.91998Z"
                    stroke="#000" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
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
                  <svg width="20px" height="20px" viewBox="-0.5 0 25 25" fill="#878789"
                    xmlns="http://www.w3.org/2000/svg" :class="{ liked: likedDesigners.includes(designer.uniqued) }"
                    @click="toggleLike(designer.uniqued)">
                    <path
                      d="M15.6001 3.91998C14.268 3.92397 12.9849 4.42297 12 5.32001C11.2277 4.61746 10.2676 4.15485 9.23679 3.98858C8.20602 3.82231 7.1491 3.95955 6.19498 4.3836C5.24087 4.80765 4.43081 5.50018 3.8635 6.37671C3.29619 7.25324 2.99614 8.27591 3.00004 9.32C3.00004 15.77 12 20.14 12 20.14C12 20.14 21 15.77 21 9.32C21 7.88784 20.4311 6.51434 19.4184 5.50165C18.4057 4.48895 17.0322 3.91998 15.6001 3.91998Z"
                      stroke="#878789" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span :class="{ 'animate-up': animateLikes }">{{ formatNumber(getTotalLikes(designer.uniqued),
                    'likes') }}</span>
                </div>
              </div>
              <div class="designer__profile__views">
                <div class="views">
                  <i class="fas fa-eye"></i>
                  <span :class="{ 'animate-up': animateViews }">{{ formatNumber(411, 'views') }}</span>
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
import SponSor from '@/components/SponSor.vue';
import { isAuthenticated } from '@/auth/auth';
import axios from 'axios';

export default {
  name: "DesignerView",

  components: {
    LayOut,
    PopUp,
    SponSor
  },

  data() {
    return {
      searchQuery: '',
      searchResults: [],
      showSuggestions: false,
      animateLikes: false,
      animateViews: false,
      likedDesigners: [],
      isShowing: false,
      designers: [],
      message: '',
    };
  },

  async mounted() {
  try {
    let response = await axios.get(`http://localhost:80/Fashion2/Fashion/searched.php?name=${this.$route.params.name}`);
    this.designers = response.data || [];
    console.log('Designers data:', this.designers); // Add this line
    if (this.designers.length === 0) {
      this.message = 'No designer found';
    }
    this.likedDesigners = JSON.parse(localStorage.getItem('likedDesigners')) || [];
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

      const isLiked = this.likedDesigners.includes(designerId);

      if (isLiked) {
        this.removeLike(designerId);
        this.likedDesigners = this.likedDesigners.filter(id => id !== designerId);
      } else {
        this.addLike(designerId);
        this.likedDesigners.push(designerId);
      }

      localStorage.setItem('likedDesigners', JSON.stringify(this.likedDesigners));
    },

    getTotalLikes(designerId) {
      if (!Array.isArray(this.designers)) {
    return 0; // or handle the empty case appropriately
  }

  const designer = this.designers.find(d => d.uniqued === designerId);
  return designer ? designer.likes : 0;
    },

    isLikedByUser(designerId) {
      return this.likedDesigners.includes(designerId);
    },

    async addLike(designerId) {
      const designer = this.designers.find(d => d.uniqued === designerId);
      designer.likes++;
      this.updateLikesCount(designerId, designer.likes);
    },

    async removeLike(designerId) {
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

.suggestions_Sec {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-top: none;
    z-index: 1;
  }
  
  .suggestions_sec ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .suggestions_sec ul li {
    padding: 8px 12px;
    cursor: pointer;
  }
  
  .suggestions_sec ul li:hover {
    background-color: #e9e9e9;
  }

  .likes {
  animation: slide-up 0.9s;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fa-heart,
.fa-hearts {
  transition: color 0.1s ease;
}

/* .views {
  animation: slide 0.8s;
}

.fa-eye {
  animation: slide 0.8s;
} */

svg {
  cursor: pointer;
}

.svg__pop__up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.9rem;
}

.svg__pop__up svg {
  background-color: #fff;
  padding: 8px 9px 8px 9px;
  border-radius: 50%;
}

.liked {
  fill: rgb(255, 22, 61);
  animation: slide 0.8s;
}

@keyframes slide {
  from {
    opacity: 0;
    width: 30px;
    height: 30px;
  }

  to {
    transform: translateY(0);
    opacity: 1;

    height: 20px;
  }
}

.pop__up__selection {
  visibility: hidden;
}

.pop__up__selection h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  font-family: "Montserrat Alternates", sans-serif;
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

.desiners__image:hover .pop__up__selection {
  visibility: visible;
  animation: slide-up 0.2s;

}
</style>
<template>
    <PopUp ref="popup" :isVisible="isShowing" @open="openPopup" @close="isShowing = false" />
<div class="designers__dection">
    <!-- flexing this area -->
    <div class="fashion__designers">
      <div class="designers__box" v-for="designer in designers" :key="designer.uniqued">
        <div class="desiners__image">
          <img :src="`http://localhost:80/Fashion2/Fashion/${designer.company_logo}`" alt="" />
          <div class="pop__up__selection">
            <h3>{{ designer.company_name }}</h3>
            <div class="svg__pop__up">
              <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"
                  stroke="#ccc" fill="#000" stroke-width="0.1" />
              </svg>

              <svg width="40px" height="40px" viewBox="-0.5 0 25 25" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                :class="{ liked: likedDesigners.includes(designer.uniqued) }" @click="toggleLike(designer.uniqued)">
                <path
                  d="M15.6001 3.91998C14.268 3.92397 12.9849 4.42297 12 5.32001C11.2277 4.61746 10.2676 4.15485 9.23679 3.98858C8.20602 3.82231 7.1491 3.95955 6.19498 4.3836C5.24087 4.80765 4.43081 5.50018 3.8635 6.37671C3.29619 7.25324 2.99614 8.27591 3.00004 9.32C3.00004 15.77 12 20.14 12 20.14C12 20.14 21 15.77 21 9.32C21 7.88784 20.4311 6.51434 19.4184 5.50165C18.4057 4.48895 17.0322 3.91998 15.6001 3.91998Z"
                  stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <!-- flexing this area -->
        <div class="designer__addition__info">
          <div class="designer__profile__img">
            <div class="flex__area">
              <img :src="`http://localhost:80/Fashion2/Fashion/${designer.file_path}`" alt="" />
            </div>
            <div class="designer__profile__name">
              <p>{{ designer.company_name }}</p>
            </div>
          </div>
          <div class="designer__profile__likes">


            <!-- to check if the designer is verified -->

            <div class="likes">
                <svg width="20px" height="20px" viewBox="0 0 120 120" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">


<g>

<path class="st0" d="M99.5,52.8l-1.9,4.7c-0.6,1.6-0.6,3.3,0,4.9l1.9,4.7c1.1,2.8,0.2,6-2.3,7.8L93,77.8c-1.4,1-2.3,2.5-2.7,4.1   l-0.9,5c-0.6,3-3.1,5.2-6.1,5.3l-5.1,0.2c-1.7,0.1-3.3,0.8-4.5,2l-3.5,3.7c-2.1,2.2-5.4,2.7-8,1.2l-4.4-2.6   c-1.5-0.9-3.2-1.1-4.9-0.7l-5,1.2c-2.9,0.7-6-0.7-7.4-3.4l-2.3-4.6c-0.8-1.5-2.1-2.7-3.7-3.2l-4.8-1.6c-2.9-1-4.7-3.8-4.4-6.8   l0.5-5.1c0.2-1.7-0.3-3.4-1.4-4.7l-3.2-4c-1.9-2.4-1.9-5.7,0-8.1l3.2-4c1.1-1.3,1.6-3,1.4-4.7l-0.5-5.1c-0.3-3,1.5-5.8,4.4-6.8   l4.8-1.6c1.6-0.5,2.9-1.7,3.7-3.2l2.3-4.6c1.4-2.7,4.4-4.1,7.4-3.4l5,1.2c1.6,0.4,3.4,0.2,4.9-0.7l4.4-2.6c2.6-1.5,5.9-1.1,8,1.2   l3.5,3.7c1.2,1.2,2.8,2,4.5,2l5.1,0.2c3,0.1,5.6,2.3,6.1,5.3l0.9,5c0.3,1.7,1.3,3.2,2.7,4.1l4.2,2.9C99.7,46.8,100.7,50,99.5,52.8z   "/>

<g class="st1">

<path d="M43.4,93.5l-2.3-4.6c-0.8-1.5-2.1-2.7-3.7-3.2l-4.8-1.6c-2.9-1-4.7-3.8-4.4-6.8l0.5-5.1c0.2-1.7-0.3-3.4-1.4-4.7l-3.2-4    c-1.9-2.4-1.9-5.7,0-8.1l3.2-4c1.1-1.3,1.6-3,1.4-4.7l-0.5-5.1c-0.3-3,1.5-5.8,4.4-6.8l4.8-1.6c1.6-0.5,2.9-1.7,3.7-3.2l2.3-4.6    c0.8-1.6,2.2-2.7,3.7-3.2c-2.7-0.4-5.4,1-6.6,3.5l-2.3,4.6c-0.8,1.5-2.1,2.7-3.7,3.2l-4.8,1.6c-2.9,1-4.7,3.8-4.4,6.8l0.5,5.1    c0.2,1.7-0.3,3.4-1.4,4.7l-3.2,4c-1.9,2.4-1.9,5.7,0,8.1l3.2,4c1.1,1.3,1.6,3,1.4,4.7l-0.5,5.1c-0.3,3,1.5,5.8,4.4,6.8l4.8,1.6    c1.6,0.5,2.9,1.7,3.7,3.2l2.3,4.6c1.4,2.7,4.4,4.1,7.4,3.4l0.6-0.1C46.3,96.7,44.4,95.5,43.4,93.5z"/>

<path d="M60.6,22.5l4.4-2.6c0.4-0.2,0.8-0.4,1.2-0.5c-1.4-0.2-2.9,0.1-4.1,0.8l-4.4,2.6c-0.4,0.2-0.8,0.4-1.2,0.5    C57.9,23.5,59.3,23.3,60.6,22.5z"/>

<path d="M81,92c-0.5,0-1,0.1-1.4,0.2l3.6-0.2c0.5,0,0.9-0.1,1.4-0.2L81,92z"/>

<path d="M65,98.9l-4.4-2.6c-1.5-0.9-3.2-1.1-4.9-0.7l-0.6,0.1c0.9,0.1,1.7,0.4,2.5,0.8l4.4,2.6c1.7,1,3.6,1.1,5.4,0.5    C66.6,99.6,65.8,99.4,65,98.9z"/>

</g>

<polyline class="st0" points="44,53.6 56.5,67.9 82.1,47.3  "/>

<path class="st2" d="M53.5,75.3c-1.4,0-2.8-0.6-3.8-1.7L37.2,59.3c-1.8-2.1-1.6-5.2,0.4-7.1c2.1-1.8,5.2-1.6,7.1,0.4l9.4,10.7   l21.9-17.6c2.1-1.7,5.3-1.4,7,0.8c1.7,2.2,1.4,5.3-0.8,7L56.6,74.2C55.7,74.9,54.6,75.3,53.5,75.3z"/>

</g>

</svg>
                <span >Verified</span>
              </div>

              <!-- it ends here oo -->




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
  </div>
</template>


<script>
import PopUp from './popup/PopUp.vue';
// import DemoSelect from '@/components/DemoSelect.vue';
import { isAuthenticated } from '@/auth/auth';
// import ProfileSuggest from '@/components/ProfileSuggest.vue';

export default {
name: "HomeDesigners",

components: {
  PopUp,
  // DemoSelect,
  // ProfileSuggest
},

data() {
  return {
    animateLikes: false,
    animateViews: false,
    designers: [],
    likedKey: 'designer_liked',
    likedDesigners: [],
    isShowing: false,
  };
},

async mounted() {
  this.fetchLikesCount();
  const storedLikedDesigners = localStorage.getItem('likedDesigners');
  if (storedLikedDesigners) {
    this.likedDesigners = JSON.parse(storedLikedDesigners);
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

  async fetchLikesCount() {
    try {
      const response = await fetch('http://localhost:80/Fashion2/Fashion/count.php');
      const data = await response.json();
      this.designers = data.data;
      console.log(data.data.likes)
    } catch (error) {
      console.error('Failed to fetch likes count', error);
    }
  }
}
};
</script>

<style >
  .st0{
  fill:#00D566;

}
  .st1{
  
  opacity:0.15;

}
  .st2{
  
  fill:#FFFFFF;

}

</style>

<style>
@import url("@/styles/Designers.css");

.likes {
animation: slide-up 0.9s;
}



@keyframes slide-up {
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

.fa-heart,
.fa-hearts {
transition: color 0.1s ease;
}
/* 
.views {
animation: slide 0.8s;
} */

/* .fa-eye {
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

/* .svg__pop__up svg {
} */

.liked {
fill: rgb(255, 22, 61);
animation: slide 0.8s;
}

@keyframes slide {
from {
  transform: translateY(10px);
  opacity: 0;
}

to {
  transform: translateY(0);
  opacity: 1;
}
}

.pop__up__selection {
visibility: hidden;
}

.pop__up__selection h3 {
color: #fff;
font-size: 16px;
font-family: "Montserrat Alternates", sans-serif;
font-optical-sizing: auto;
font-weight: 500;
font-stretch: extra-expanded;
font-style: normal;

}




.designers__box:hover .pop__up__selection {
visibility: visible;
/* animation: slide-up 0.1s; */

}
</style>

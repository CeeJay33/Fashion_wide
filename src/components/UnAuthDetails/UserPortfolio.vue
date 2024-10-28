<!-- this is the user profile -->
<template>
    <div class="designer-details">
      <div v-if="designers.length > 0" class="mother__cont">
        <div class="truck-card" v-for="designer in designers" :key="designer.user_id">
          <div class="image-container" @click="showImage(designer.file_path)">
            <img :src="`http://localhost:80/Fashion2/Fashion/${designer.file_path}`">
            <div class="badgee">Start your purchase</div>
            <div class="wishlist">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <div class="card-content">
            <div class="sponsored">Sponsored • <span class="dealer-name">Sunrise Ford</span></div>
            <h2 class="truck-title">{{ designer.product_name }}</h2>
            <ul class="truck-details">
              <li>52,345 mi</li>
              <li>250 hp 2L I4</li>
              <li>Automatic</li>
              <li>FWD</li>
            </ul>
            <div class="pricing">
              <div class="price">${{ designer.product_price }}</div>
              <div class="monthly">Est. <span>$499/mo</span></div>
              <div class="deal-rating good-deal">Good Deal</div>
            </div>
            <div class="location">Fontana, CA (45 mi away)</div>
            <div class="buttons">
              <button class="info-btn">Request Info</button>
              <button class="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No designer found</p>
      </div>
      <p>{{ message }}</p>
      
      <!-- Enhanced Modal for showing the image -->
      <div v-if="isModalVisible" class="modal">
        <div class="modal-content">
          <button @click="closeModal" class="close-btnn">&times;</button>
          <img :src="`http://localhost:80/Fashion2/Fashion/${selectedImage}`" class="modal-image" />
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
  components: {
   
  },
  data() {
    return {
      designers: [],
      message: '',
      isModalVisible: false,
      selectedImage: ''
    };
  },
  methods: {
    showImage(filePath) {
      this.selectedImage = filePath;
      this.isModalVisible = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    },
    closeModal() {
      this.isModalVisible = false;
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  },
  async mounted() {
    console.log('Unique parameter:', this.$route.params.id);
    try {
      let response = await axios.get(`http://localhost:80/Fashion2/Fashion/images.php?user_id=${this.$route.params.id}`);
      this.designers = response.data;
      if (response.data && response.data.length === 0) {
        this.message = 'No designer found';
      }
    } catch (error) {
      this.message = 'An error occurred while fetching data';
      console.error(error);
    }
  },
};
</script>

<style scoped>
/* Modal styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent; /* Stronger dim for background */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px); /* Enhanced blur */
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  max-height: 80vh;
  animation: popUp 0.5s ease-in-out;
  margin-top: 8rem;
}

@keyframes popUp {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-image {
  width: 400px;
  height: 500px; /* Fixed width and height */
  object-fit: cover; /* Ensures images cover the container without distortion */
  border-radius: 15px;
}

.close-btnn {
  position: absolute;
  top: -60px;
  right: -40px;
  font-size: 50px;
  color: #f72828;
  /* background: rgba(136, 0, 0, 0.8); */
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.3s;
}




.modal-open {
  filter: blur(5px);
  overflow: hidden;
}

.mother__cont{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 4rem 0;
}

.truck-card {
    background-color: #ffffff;
    width: 350px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(121, 121, 121, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.truck-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(60, 60, 60, 0.2);
}

/* Image Container */
.image-container {
    position: relative;
    width: 350px;
    height: 300px;
    overflow: hidden;
}

.image-container img {
    width: 350px;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-container:hover img {
    transform: scale(1.05);
}

/* Badge */
.badgee {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 500;
}

/* Wishlist Icon */
.wishlist {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.wishlist:hover {
    background-color: rgba(255, 255, 255, 1);
}

.wishlist i {
    color: #ff4757;
    font-size: 18px;
    margin-left: 9px;
}

/* Card Content */
.card-content {
    padding: 15px;
}

.sponsored {
    font-size: 12px;
    color: #7f8c8d;
    margin-bottom: 5px;
}

.dealer-name {
    color: #2980b9;
    font-weight: 500;
}

.truck-title {
    font-size: 18px;
    color: #2c3e50;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.2;
}

.truck-details {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 14px;
    color: #7f8c8d;
    margin-bottom: 15px;
}

.truck-details li {
    background-color: #ecf0f1;
    padding: 5px 10px;
    border-radius: 3px;
}

/* Pricing */
.pricing {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}

.price {
    font-size: 20px;
    color: #e74c3c;
    font-weight: 700;
}

.monthly {
    font-size: 14px;
    color: #7f8c8d;
}

.monthly span {
    color: #2c3e50;
    font-weight: 500;
}

.deal-rating {
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}

.good-deal {
    background-color: #2ecc71;
    color: #ffffff;
}

.fair-deal {
    background-color: #f1c40f;
    color: #ffffff;
}

.bad-deal {
    background-color: #e74c3c;
    color: #ffffff;
}

/* Location */
.location {
    font-size: 13px;
    color: #95a5a6;
    margin-bottom: 15px;
}

/* Buttons */
.buttons {
    display: flex;
    gap: 10px;
}

.info-btn,
.checkout-btn {
    flex: 1;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.info-btn {
    background-color: #3498db;
    color: #ffffff;
}

.info-btn:hover {
    background-color: #2980b9;
}

.checkout-btn {
    background-color: #2ecc71;
    color: #ffffff;
}

.fa-check{
    color: #27ae60;
    margin-left: 2rem;
}

.checkout-btn:hover {
    background-color: #27ae60;
}

/* Responsive Design */
@media (max-width: 768px) {
    .truck-card {
        width: 100%;
        height: 450px;
    }
}
</style>
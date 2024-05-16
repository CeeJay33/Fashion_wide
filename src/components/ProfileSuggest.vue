<template>
  <div class="navigations__section">
    <div class="image__in__navigation__section">
      <div class="image__here" @mouseover="showPopup = true">
        <span class="spannn">C</span>
        <div class="suggest__navigation__modal" :class="{ show: showPopup }">
            <div class="profile__modal__section">
            <span class="spann">C</span>
  
            <p>Chris josh</p>
          </div>
            <div class="suggest__navigation__here">
         <p>Search Designers Location</p>
         <p>Message</p>
         <p>Settings</p>
         <hr>
         <p>Sign Out</p>
        </div>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "ProfileSuggest",
  data() {
    return {
      showPopup: false
    }
  },
  mounted() {
    document.addEventListener("mouseout", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("mouseout", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (!event.target.closest(".image__here") &&!event.target.closest(".suggest__navigation__modal")) {
        this.showPopup = false;
      }
    }
  }
}
</script>
  <style>
  .image__in__navigation__section .image__here{
    position: relative;
  }
  .image__in__navigation__section .image__here .spannn {
    background-color: rgb(122, 3, 104);
    color: #fff;
    font-family: arial;
    font-weight: 600;
    font-size: 20px;
    padding: 0.6rem 0.9rem;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .suggest__navigation__modal {
    position: absolute;
    top: 200%;
    right: 0;
    transform: translateY(0);
    width: 300px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    animation: slide-up 0.9s;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 999;
  }

  .profile__modal__section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0.3rem 0;
  }

.suggest__navigation__here{
    padding: 0.5rem 1rem;
  }
  .suggest__navigation__here hr{
    margin: 0.2rem;
    border: 1px solid #eeeeee;
  }

   .suggest__navigation__here p{
    padding: 0.5rem;
  color: #1a1a1a;
  cursor: pointer;
  font-size: 15px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }

  .suggest__navigation__here p:hover{
    opacity: 0.8;
  }

  .profile__modal__section p{
    padding-top: 10px;
    font-weight: 500;
  color: #1a1a1a;
  font-size: 16px;
  font-family: "Roboto Serif", "Montserrat Alternates", serif;
  }

  .spann{
    font-size: 40px;
    padding: 0.9rem 1.5rem;
    background-color: rgb(122, 3, 104);
    color: #fff;
    font-family: arial;
    font-weight: 600;
    border-radius: 50%;
    cursor: pointer;
  }
  .show{
    display: block;
  }
  @keyframes slide-up {
    from {
      transform: translateY(70px);
      opacity: 0;
    }
  
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .image__here span:hover +.suggest__navigation__modal {
    display: block;
  }
  </style>
<template>
  <div class="navigations__section">
    <div class="image__in__navigation__section">
      <div class="image__here" @mouseover="showPopup = true">
        <!-- Replace the static "C" with the computed initials -->
        <span class="spannn">{{ initials }}</span>
        <div class="suggest__navigation__modal" :class="{ show: showPopup }">
          <div class="profile__modal__section">
            <!-- Replace the static "C" with the computed initials -->
            <span class="spann">{{ initials }}</span>
            <p>{{ Users }}</p>
          </div>
          <div class="suggest__navigation__here">
            <p>Search Designers Location</p>
            <p>Message</p>
            <p>Settings</p>
            <hr />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileSuggest",
  data() {
    return {
      showPopup: false,
      Users: "",
      responseData: null,
    };
  },
  computed: {
    initials() {
      if (this.Users) {
        // Split the Users string by spaces and get the first letter of the first and last name
        const nameParts = this.Users.split(" ");
        return nameParts.map((part) => part.charAt(0).toUpperCase()).join("");
      }
      return "";
    },
  },
  mounted() {
    document.addEventListener("mouseout", this.handleClickOutside);

    this.FetchProfile();
  },
  beforeUnmount() {
    document.removeEventListener("mouseout", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (
        !event.target.closest(".image__here") &&
        !event.target.closest(".suggest__navigation__modal")
      ) {
        this.showPopup = false;
      }
    },

    async FetchProfile() {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:80/SignUpClassesPhp/profileInfo/",
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        });
        this.responseData = response.data;
        const firstname = this.responseData.name || "Guest";
        const lastname = this.responseData.lastname || "";
        this.Users = firstname + " " + lastname; 
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    },
  },
};
</script>

<style>
.image__in__navigation__section .image__here {
  position: relative;
}
.image__in__navigation__section .image__here .spannn {
  background-color: rgb(122, 3, 104);
  color: #fff;
  font-family: arial;
  font-weight: 600;
  font-size: 15px;
  padding: 0.6rem 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5rem;
}

.suggest__navigation__modal {
  position: absolute;
  top: 200%;
  right: 15%;
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

.profile__modal__section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.3rem 0;
}

.suggest__navigation__here {
  padding: 0.5rem 1rem;
}
.suggest__navigation__here hr {
  margin: 0.2rem;
  border: 1px solid #eeeeee;
}

.suggest__navigation__here p {
  padding: 0.5rem;
  color: #1a1a1a;
  cursor: pointer;
  font-size: 15px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.suggest__navigation__here p:hover {
  opacity: 0.8;
}

.profile__modal__section p {
  padding-top: 10px;
  font-weight: 500;
  color: #1a1a1a;
  font-size: 16px;
  font-family: "Roboto Serif", "Montserrat Alternates", serif;
}

.spann {
  font-size: 20px;
  padding: 0.9rem 1rem;
  background-color: rgb(122, 3, 104);
  color: #fff;
  font-family: arial;
  font-weight: 600;
  border-radius: 50%;
  cursor: pointer;
}
.show {
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

.image__here span:hover + .suggest__navigation__modal {
  display: block;
}
</style>

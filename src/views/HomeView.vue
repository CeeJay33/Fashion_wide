<template>
  <NavBar :isDark="isDark" @toggle="handleToggle" />
  <div class="home__view">
    <HowTip :isDark="isDark" />
    <TopDesigners />
    <DesCript />
    <HomeDesigners />
    <SponSor />
    <FooterSec />
  </div>
</template>

<script>
import axios from 'axios';
import TopDesigners from '@/components/TopDesigners.vue';
import NavBar from '@/components/NavBar.vue';
import FooterSec from '@/components/FooterSec.vue';
import HowTip from '@/components/HowTip.vue';
import DesCript from '@/components/DesCript.vue';
import SponSor from '@/components/SponSor.vue';
import { isAuthenticated } from '@/auth/auth';
import HomeDesigners from '@/components/HomeDesigners.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    TopDesigners,
    HowTip,
    DesCript,
    FooterSec,
    SponSor,
    HomeDesigners,
  },
  data() {
    return {
      isDark: false,
    };
  },
  async mounted() {
    const authenticated = await isAuthenticated();
    if (authenticated) {
      this.$router.push('/dashboard');
    } else {
      this.$router.push('/');
    }
    if (!authenticated) {
      this.loadGoogleScript();
    }
  },
  methods: {
    handleToggle(isDark) {
      this.isDark = isDark;
    },
    loadGoogleScript() {
      if (!document.getElementById('google-signin-script')) {
        const script = document.createElement('script');
        script.id = 'google-signin-script';
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;

        script.onload = () => {
          this.initializeGoogleSignIn();
        };

        script.onerror = () => {
          console.error('Failed to load the Google Sign-In script.');
        };

        document.head.appendChild(script);
      } else {
        console.log('Google Sign-In script already loaded');
        this.initializeGoogleSignIn();
      }
    },
    initializeGoogleSignIn() {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: '408717068437-bu2b14mvam8icg4pnht9il68sbjpnr4g.apps.googleusercontent.com',
          callback: this.handleCredentialResponse,
        });
        window.google.accounts.id.prompt(); // Show the One Tap prompt
      } else {
        console.error('Google object not found');
      }
    },
    handleCredentialResponse(response) {
      axios
        .post(
          'http://localhost:80/SignUpClassesPhp/GoogleAuth/callsback.php',
          {
            credential: response.credential,
          },
          // {
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   withCredentials: true, // Include cookies in the request
          // }
        )
        .then((response) => {
          if (response.data.success) {
            this.user = response.data.user;
          } else {
            console.error('Authentication failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
};
</script>

<style scoped lang="css">
@import url("../styles/style.css");
</style>

<template>
  <!-- creating dashboard with grid layouts -->
  <section class="grid_layout">
    <div class="layout layout1">


      <div class="left_bar">
        <div class="chi">
          <img alt="Person" width="96" height="96">
          <h4><strong></strong></h4>
        </div>
      </div>
      <div class="left_bar">
        <i class="fas fa-users"></i>
        <h4 onclick="designers()"><a>Designers</a></h4>
      </div>
      <div class="left_bar">
        <i class="fas fa-user"></i>
        <h4><a>Groups</a></h4>
      </div>
      <div class="left_bar">
        <i class="fas fa-circle-info"></i>
        <h4><a href="trending.php">Tending</a></h4>
      </div>
      <div class="left_bar">
        <i class="fas fa-user-plus"></i>
        <h4><a href="productscus.php">Products</a></h4>
      </div>
      <br>
      <hr noshade width="80%" size="1px">
      <br>
      <br>

      <div class="left_bar">
        <i class="fas fa-gear"></i>
        <h4 v-on:click="Logout">Logout</h4>
      </div>

    </div>
    <div class="layout layout2">
      <DashContent/>
        <!-- {{ SecondLayout }} -->
      </div>
  </section>
</template>


<script>
import axios from 'axios';
import DashContent from '@/components/DashContent/DashContent.vue'
export default {
  name: "DashNav",

    components:{
      DashContent,
    },
  data() {
    return {
      SecondLayout: '',
    }
  },

  async mounted() {

    let Result = await axios({
      method: 'get',
      url: 'http://localhost:80/Fashion2/Fashion/get_user_details.php',
      withCredentials: true,

      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });

    this.SecondLayout = Result.data
  },

  methods: {
    async Logout(){
      let LOGOUT = await axios({
        method: 'post',
        url: 'http://localhost:80/Fashion2/Fashion/logout_cus.php',
        withCredentials: true,

        headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
      });
     const Successful = LOGOUT.data;
      if(Successful.status === 'success'){
        this.$router.push("/")
      }
    }
  }

};


</script>


<style>
@import url("@/styles/dashboard.css");
</style>
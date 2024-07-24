<template>
  <div>
    <label class="toggle3 xlarge">
      <input type="checkbox" :checked="isChecked" @change="toggleDarkMode"/>
      <span><span>OFF</span><span>ON</span> </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: this.isDark
    };
  },
  methods: {
    toggleDarkMode() {
      this.isChecked = !this.isChecked;
      this.$emit('toggle', this.isChecked);
    }
  }
};
</script>
<style>
@import url("../../styles/styling.css");


</style>

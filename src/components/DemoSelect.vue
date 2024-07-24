<template>
    <div class="select-container" @click="toggleOptions">
      <div class="select-value">{{ selectedOption }}</div>
      <span class="select-arrow" :class="{ 'arrow-up': showOptions }"></span>
      <ul class="select-options" v-if="showOptions">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "DemoSelect",
    data() {
      return {
        showOptions: false,
        selectedOption: 'Select Designers',
        options: ['Select Designers', 'Men\'s Fashion', 'Women\'s Fashion', 'Children\'s Fashion']
      }
    },
    methods: {
      toggleOptions() {
        this.showOptions =!this.showOptions;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.showOptions = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .select-container {
    position: relative;
    width: 12%;
    height: 25px;
    border: 1px solid #dfdede;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px 20px 14px 10px;
    z-index: 999;
  }
  
  .select-value {
    font-size: 14px;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0.5rem;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .select-arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #6f6f6f;
    transition: transform 0.2s ease-in-out;
    pointer-events: none;
  }
  
  .select-arrow.arrow-up {
    transform: translateY(-50%) rotate(180deg);
  }
  
  .select-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 220px;
    background-color: #fff;
    border: 1px solid #ccc; 
    border-radius: 10px;
    padding: 0 1rem;
    list-style: none;
    max-height: 250px;
    overflow-y: auto;
    margin-top: 7px;
    animation: slide-up 0.6s;
  }

  @keyframes slide-up {
  from {
    transform: translateY(0);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
  
  .select-options li {
    padding: 1rem 0.5rem;
    font-size: 14px;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    /* border-bottom: 1px solid #ccc; */
  }
  
  .select-options li:hover {
    background-color: #f5f5f5;
  }
  
  .select-options li:last-child {
    border-bottom: none;
  }
  </style>
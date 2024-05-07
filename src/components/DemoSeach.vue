<template>
    <div>
      <div class="search__bar">
        <input type="text" placeholder="Search..." v-model="searchQuery" @keyup="search" @keydown.enter="redirectIfSingleResult" @click="showSuggestions = true">
        <img :src="require('@/assets/search-interface-symbol_54481.png')" alt="Search Icon" @click="search">
      
      <div class="suggestions" v-show="showSuggestions && searchResults.length > 0">
        <ul>
          <li v-for="result in searchResults" :key="result.uniqued" @click="selectSuggestion(result)">
            {{ result.company_name }}
          </li>
        </ul>
        <p v-if="showNoResults && searchResults.length === 0">No result found</p>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "DemoSearch",
    data() {
      return {
        searchQuery: '',
        searchResults: [],
        showSuggestions: false,
        showNoResults: false
      };
    },
    methods: {
      async search() {
        this.showSuggestions = true;
        if (this.searchQuery.trim() === '') {
          this.searchResults = [];
          this.showNoResults = false;
          return;
        }
        this.searchResults = await this.fetchSearchResultsFromDatabase(this.searchQuery);
        this.showNoResults = this.searchResults.length === 0;
      },
      async fetchSearchResultsFromDatabase(query) {
        const response = await axios.get(`http://localhost:80/Fashion2/Fashion/Searching.php?q=${query}`);
        return response.data;
      },
      redirectIfSingleResult() {
        if (this.searchResults.length === 1) {
          this.$router.push({ name: 'SearchDetails', params: { name: this.searchResults[0].company_name } });
          this.showSuggestions = false;
        }
      },
      selectSuggestion(result) {
        this.searchQuery = result.company_name;
        this.$router.push({ name: 'SearchDetails', params: { name: result.company_name } });
        this.showSuggestions = false;
      }
    }
  };
  </script>
  
  <style>
  .search__bar {
    position: relative;
  }
  
  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-top: none;
    z-index: 1;
  }
  
  .suggestions ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .suggestions ul li {
    padding: 8px 12px;
    cursor: pointer;
  }
  
  .suggestions ul li:hover {
    background-color: #e9e9e9;
  }
  </style>
  
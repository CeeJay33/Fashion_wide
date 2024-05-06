<template>
    <div>
      <div class="search__bar">
        <input type="text" placeholder="Search..." v-model="searchQuery" @input="search" @keydown.enter="redirectIfSingleResult" @click="showSuggestions = true">
        <img :src="require('@/assets/search-interface-symbol_54481.png')" alt="Search Icon" @click="search">
      </div>
      <div class="suggestions" v-show="showSuggestions && filteredResults.length > 0">
        <ul>
          <li v-for="(result, index) in filteredResults" :key="index" @click="selectSuggestion(result)">
            {{ result.company_name }}
          </li>
        </ul>
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
        showSuggestions: false
      };
    },
    computed: {
      filteredResults() {
        if (!this.searchQuery.trim()) return [];
        return this.searchResults.filter(result => {
          return result.company_name.toLowerCase().includes(this.searchQuery.toLowerCase());
        }).slice(0, 5);
      }
    },
    methods: {
      async search() {
        this.showSuggestions = true;
        if (this.searchQuery.trim() === '') {
          this.searchResults = [];
          return;
        }
        this.searchResults = await this.fetchSearchResultsFromDatabase(this.searchQuery);
      },
      async fetchSearchResultsFromDatabase(query) {
  const response = await axios.get(`http://localhost:80/Fashion2/Fashion/Searching.php?q=${query}`);
  if (Array.isArray(response.data)) {
    return response.data.filter(result => result.company_name.toLowerCase().includes(query.toLowerCase()));
  } else {
    return [];
  }
},

      redirectIfSingleResult() {
        if (this.filteredResults.length === 1) {
          this.searchQuery = this.filteredResults[0].company_name;
          this.$router.push({ name: 'SearchDetails', params: { name: this.filteredResults[0].company_name } });
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
  
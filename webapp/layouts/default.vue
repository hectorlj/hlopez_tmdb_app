<template>
  <div>
    <navbar @search="searchInput" />
    <searchResults
      v-if="showResults"
      :results="results"
      :search-input="searchInput"
      @clearResults="clearResults()"
    />
    <nuxt />
  </div>
</template>
<script>
import navbar from '@/partials/my-navbar'
import searchResults from '@/components/searchResults'
export default {
  components: {
    navbar,
    searchResults,
  },
  data() {
    return {
      results: [],
    }
  },
  computed: {
    showResults() {
      return this.results.length > 0
    },
  },
  watch: {
    results() {},
  },
  methods: {
    searchInput(value) {
      this.$axios
        .$get(`/tmdb/movies?search=${value}`)
        .then((res) => {
          this.results = res
        })
        .catch((err) => {
          console.error(err)
          this.results = []
        })
    },
    clearResults() {
      this.results = []
    },
  },
}
</script>

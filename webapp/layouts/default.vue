<template>
    <div>
        <navbar
            @search="searchInput"
        />
        <searchResults
            v-if="showResults"
            :results="results"
            :searchInput="searchInput"
            @clearResults="clearResults()"
        />
        <nuxt />
    </div>
</template>
<script>
import navbar from '@/partials/navbar'
import searchResults from '@/components/searchResults'
export default {
    components: {
        navbar,
        searchResults
    },
    data() {
        return {
            results: []
        }
    },
    watch: {
        results: function(newVal, oldVal) {
            console.log('new', newVal, 'old', oldVal)
        }
    },
    methods: {
        searchInput(value) {
            this.$axios.$get(`/imdb/movies?search=${value}`)
            .then(res => {
                this.results = res
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                this.results = [] 
            })
        },
        clearResults() {
            this.results = []
        }
    },
    computed: {
        showResults() {
            return this.results.length > 0 ? true : false;
        },

    }
}
</script>
<template>
    <b-overlay class="results">
        <div v-if="empty_results" class="results-list">
            <searchResult v-for="movie in results" :key="movie.id" :movie="movie">
            </searchResult>
        </div>
        <div v-else class="no-results">
            {{no_results}}
        </div>
    </b-overlay>
</template>
<script>
    import searchResult from '@/components/searchResult';
    export default {
        props: {
            results: {
                type: Array,
                required: true,
            }
        },
        emits: ['clearResults'],
        data() {
            return {
                no_results: "No Results Found",
                overlay: true,
            }
        },
        computed: {
            empty_results() {
                return this.results && this.results.length > 0 ? true : false;
            },
        },
        methods: {},
    };
</script>
<style scoped>
.results {
	background-color: rgba(0, 0, 0, 0.2);
	overflow-y: scroll;
    display: flex;
    flex-flow: row wrap;
}
</style>

<template>
    <v-overlay class="results" :value="overlay">
        <div v-if="empty_results" class="results-list">
            <searchResult v-for="result in results" :key="result.id" :searchResult="result">
            </searchResult>
        </div>
        <div v-else class="no-results">
            {{no_results}}
        </div>
    </v-overlay>
</template>
<script>
    export default {
        props: {
            result: {
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
            // empty_results() {
                // return this.results.length > 0 ? true : false;
            // },
        },
        methods: {},
    };
</script>
<style scoped>
.results {
	top: 48px;
	width: 100%;
	align-items: start;
	background-color: rgba(0, 0, 0, 0.9);
	overflow-y: scroll;
	justify-content: start;
	.v-overlay__content {
		position: relative;
		display: flex;
		width: 100%;
	}
}

.results-list {
	flex-grow: 1;
	&:hover {
		cursor: pointer;
	}
}

.no-results {
	padding-top: 75px;
	font-size: 1.25rem;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
}
</style>

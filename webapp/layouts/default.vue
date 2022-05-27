<template>
    <div>
        <navbar />
        <searchResults />
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
    }
}
</script>
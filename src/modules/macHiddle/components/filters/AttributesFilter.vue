<template>
    <div>
        <LengthFilter />
        <PatternFilter />
        <StyleFilter />
    </div>
</template>

<script>
import LengthFilter from './LengthFilter.vue';
import PatternFilter from './PatternFilter.vue';
import StyleFilter from './StyleFilter.vue';

export default {
    name: 'AttributeFilter',
    components: { LengthFilter, PatternFilter, StyleFilter }
}
</script>

<style lang="scss" scoped></style>
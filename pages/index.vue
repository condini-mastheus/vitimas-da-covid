<template>
  <div class="container">
    <Hero :people="people" />
  </div>
</template>

<script lang="ts">
import Hero from '@/components/organanism/home/hero.vue'

import Vue from 'vue'

export default Vue.extend({
  components: {
    Hero,
  },

  data() {
    return {
      people: [
        {
          id: 1,
          name: 'João Alves da Rocha',
        },
        {
          id: 1,
          name: 'João Alves da Rocha',
        },
        {
          id: 1,
          name: 'João Alves da Rocha',
        },
        {
          id: 1,
          name: 'João Alves da Rocha',
        },
      ],
    }
  },
})
</script>

<style></style>

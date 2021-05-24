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
          id: 2,
          name: 'Terezinha Xavier Corrêa',
        },
        {
          id: 3,
          name: 'Rocilda Soares Alves Silva',
        },
        {
          id: 6,
          name: 'João Alfredo de Amorim',
        },
        {
          id: 7,
          name: 'Rosilda Demétrio Magalhães',
        },
        {
          id: 8,
          name: 'Alexandre de Oliveira Calado',
        },
        {
          id: 9,
          name: 'Rubens Machioni Silva',
        },
      ],
    }
  },
})
</script>

<style></style>

<template>
  <div class="container">
    <Hero :people="people" />
  </div>
</template>

<script lang="ts">
import Hero from '@/components/organanism/home/hero.vue'
import { PersonInterface } from '@/types/people'
import { HomePageInterface } from '@/types/page'

import Vue from 'vue'

export default Vue.extend({
  components: {
    Hero,
  },

  async asyncData({ $axios }): Promise<HomePageInterface> {
    const people: PersonInterface[] = await $axios.$get(
      '/people?_page=1&_limit=5'
    )

    return {
      people,
    }
  },
})
</script>

<style></style>

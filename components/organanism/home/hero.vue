<template>
  <People :people="people" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { PeopleInterface } from '@/types/people'
import People from '@/components/molecules/home/people.vue'

export default Vue.extend({
  name: 'Hero',
  components: {
    People,
  },

  props: {
    people: {
      type: Array,
      required: true,
    } as unknown as PropOptions<PeopleInterface>,
  },
})
</script>

<style lang="scss" scoped></style>

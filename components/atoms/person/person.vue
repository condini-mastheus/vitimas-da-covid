<template>
  <p class="person-name">{{ person.name }}</p>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PersonInterface } from '@/types/people'

export default Vue.extend({
  name: 'Person',
  props: {
    person: {
      type: Object,
      required: true,
    } as PropOptions<PersonInterface>,
  },
})
</script>

<style lang="scss" scoped>
.person-name {
  color: $color-granite-gray;
  font-size: 0.8rem;
}
</style>

<template>
  <h1 class="main-person">
    Em memória de <strong class="main-person__name">{{ person.name }}</strong>
  </h1>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PersonInterface } from '@/types/people'

export default Vue.extend({
  name: 'MainPerson',
  props: {
    person: {
      type: Object,
      required: true,
    } as PropOptions<PersonInterface>,
  },
})
</script>

<style lang="scss" scoped>
.main-person {
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  line-height: 2.5rem;

  &__name {
    display: block;
    font-size: 2.5rem;
    font-weight: 500;
  }
}
</style>

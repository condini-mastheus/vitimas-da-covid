<template>
  <div class="main-person">
    <h1 class="main-person__title">
      Em memória de <strong class="main-person__name">{{ person.name }}</strong>
    </h1>
  </div>
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
  padding: $spacing-3x;
  background: $color-charcoal-gray;
  position: relative;
  z-index: $z-index-xhigh;

  &__title {
    text-align: center;
    color: $color-white;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  &__name {
    display: block;
    font-size: 2.5rem;
    font-weight: 500;
  }
}
</style>

<template>
  <section class="hero">
    <MainPerson :person="{ name: 'Teste' }" />
    <ul class="hero__people">
      <li class="hero__person">
        <Person :person="{ name: 'Teste', position: [30, 40] }" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PeopleInterface } from '@/types/people'

import Person from '@/components/atoms/person/person.vue'
import MainPerson from '@/components/atoms/main-person/main-person.vue'

export default Vue.extend({
  name: 'Hero',
  components: {
    Person,
    MainPerson,
  },

  props: {
    people: {
      type: Array,
      required: true,
    } as unknown as PropOptions<PeopleInterface>,
  },
})
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &__people {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &__person {
    position: absolute;
    left: 50px;
    top: 500px;
    display: inline-block;
  }
}
</style>

<template>
  <section class="people">
    <MainPerson :person="mainPerson" />
    <ul class="people__list">
      <li
        v-for="person in otherPeople"
        :key="person.id"
        class="people__item"
        :style="{
          left: `${person.position[0]}%`,
          top: `${person.position[1]}%`,
        }"
      >
        <Person :person="person" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PersonInterface } from '@/types/people'

import Person from '@/components/atoms/person/person.vue'
import MainPerson from '@/components/atoms/main-person/main-person.vue'

export default Vue.extend({
  name: 'People',
  components: {
    Person,
    MainPerson,
  },
  props: {
    people: {
      type: Array,
      required: true,
    } as unknown as PropOptions<PersonInterface[]>,
  },

  computed: {
    mainPerson(): PersonInterface {
      const [person]: PersonInterface = this.people
      return person
    },

    otherPeople(): PersonInterface[] {
      const [, ...people]: PersonInterface[] = this.people
      return people
    },
  },
})
</script>

<style lang="scss" scoped>
.people {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $z-index-low;

  &__list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: $z-index-xlow;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  &__item {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
  }
}
</style>

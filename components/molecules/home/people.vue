<template>
  <section class="people">
    <MainPerson :person="mainPerson" />
    <ul class="people__people">
      <li v-for="person in otherPeople" :key="person.id" class="people__person">
        <Person :person="person" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PeopleInterface, PersonInterface } from '@/types/people'

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
    } as unknown as PropOptions<PeopleInterface>,
  },

  computed: {
    mainPerson(): PersonInterface {
      const [person]: PersonInterface = this.people
      return person
    },

    otherPeople(): PeopleInterface {
      const [, ...people]: PeopleInterface = this.people
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

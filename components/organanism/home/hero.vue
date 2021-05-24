<template>
  <People :people="peopleWithPositions" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { PersonInterface } from '@/types/people'
import People from '@/components/molecules/home/people.vue'
import Position from '@/lib/position'

export default Vue.extend({
  name: 'Hero',
  components: {
    People,
  },

  props: {
    people: {
      type: Array,
      required: true,
    } as unknown as PropOptions<PersonInterface[]>,
  },

  computed: {
    peopleWithPositions(): PersonInterface[] {
      return this.people.map((person: PersonInterface) => {
        return {
          ...person,
          position: Position().getPosition(),
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped></style>

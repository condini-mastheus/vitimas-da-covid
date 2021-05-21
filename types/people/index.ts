export interface PersonInterface {
  id: number
  name: string
  position?: [number, number]
}

export interface PeopleInterface {
  people: Array<PersonInterface>
}

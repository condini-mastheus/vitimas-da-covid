export type PositionType = [x: number, y: number]
export interface PersonInterface {
  id: number
  name: string
  position?: PositionType
}

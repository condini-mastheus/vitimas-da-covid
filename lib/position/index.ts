import { PositionType } from '@/types/people'

interface PositionInterface {
  getPosition: Function
}

export default (): PositionInterface => {
  function getPosition(): PositionType {
    return calculateRandomPosition()
  }

  function calculateRandomPosition(): PositionType {
    const x = calculatePseudoRandomPercentage()
    const y = calculatePseudoRandomPercentage()
    return [x, y]
  }

  function calculatePseudoRandomPercentage(): number {
    return Math.ceil(Math.random() * 100) % 100
  }

  return {
    getPosition,
  }
}

export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
  payload: 1
})

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
  payload: 1
})
import * as variables from './constant'

export const ageAdd = num => ({
  type: variables.AGE_ADD,
  payload: { num }
})

export const asyncAgeAdd = num => dispatch => {
  setTimeout(() => {
    dispatch(ageAdd(num))
  }, 1000)
}

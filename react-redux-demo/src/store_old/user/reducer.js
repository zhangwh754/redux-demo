import * as variables from './constant'

const userData = {
  name: 'zwh',
  age: 18
}

const reducer = function (state, { type, payload }) {
  switch (type) {
    case variables.AGE_ADD:
      return { ...state, age: state.age + payload.num }
    default:
      return state || userData
  }
}

export default reducer

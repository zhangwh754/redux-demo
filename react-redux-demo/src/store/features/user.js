import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const asyncAgeAdd = createAsyncThunk('async-age_add', async () => {
  return await Promise.resolve({
    then: onFulfilled => {
      setTimeout(() => {
        onFulfilled(10)
      }, 1000)
    }
  })
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '小明',
    age: 18
  },
  reducers: {
    ageAdd(state, { payload }) {
      state.age = state.age + payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(asyncAgeAdd.pending, (state, { payload }) => {
        console.log('pending')
      })
      .addCase(asyncAgeAdd.fulfilled, (state, { payload }) => {
        console.log('fulfilled')
        state.age = state.age + payload
      })
      .addCase(asyncAgeAdd.rejected, (state, { payload }) => {
        console.log('rejected')
      })
  }
  // extraReducers: {
  //   [asyncAgeAdd.pending](state, { payload }) {
  //     console.log('pending')
  //   },
  //   [asyncAgeAdd.fulfilled](state, { payload }) {
  //     console.log('fulfilled')
  //     state.age = state.age + payload
  //   },
  //   [asyncAgeAdd.rejected](state, { payload }) {
  //     console.log('rejected')
  //   }
  // }
})

export const { ageAdd } = userSlice.actions

export default userSlice.reducer

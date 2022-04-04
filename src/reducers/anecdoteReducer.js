import { createSlice } from "@reduxjs/toolkit"
import doteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:  [],
  reducers: {
    appendDote(state, action){
      state.push(action.payload)
    },
    setDotes(state, action){
      return action.payload
    }
  }
})

export const {appendDote, setDotes} = anecdoteSlice.actions

export const initializeDotes = () =>  {
  return async dispatch => {
    const anecdotes = await doteService.getAll()
    dispatch(setDotes(anecdotes))
  }
}

export const addDote = content => {
  return async dispatch => {
    const newDote = await doteService.createNew(content)
    dispatch(appendDote(newDote))
  }
}

export const voteDote = id => {
  return async dispatch =>  {
    await doteService.voteAnecdote(id)
    const anecdotes = await doteService.getAll()
    dispatch(setDotes(anecdotes))
  }
}

export default anecdoteSlice.reducer
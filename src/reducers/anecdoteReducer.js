import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = {
  anecdotes: [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ],
  filter: 'NONE'
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const initialState = anecdotesAtStart.anecdotes.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addDote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
    },
    voteDote(state, action){
      const id = action.payload
      const anecdote = state.find(n => n.id === id)
      const anecdoteMod = { ...anecdote, votes: anecdote.votes + 1 }
      return state.map(aDote =>
        aDote.id !== id ? aDote : anecdoteMod
      )
    }
  }
})

/*
const initialState = anecdotesAtStart.anecdotes.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE': {
      const anecdote = state.find(n => n.id === action.data.id)
      const anecdoteMod = { ...anecdote, votes: anecdote.votes + 1 }
      return state.map(aDote =>
        aDote.id !== action.data.id ? aDote : anecdoteMod
      )
    }

    case 'ADD': {
      const newAnecdote = {
        content: action.data.content,
        id: getId(),
        votes: 0
      }

      return state.concat(newAnecdote)
    }

    default: return state
  }
}

export const voteDote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addDote = (content) => {
  return {
    type: 'ADD',
    data: { content }
  }
}

*/
export const {addDote, voteDote} = anecdoteSlice.actions
export default anecdoteSlice.reducer
//export default reducer
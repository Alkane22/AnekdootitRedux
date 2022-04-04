import Anecdotes from "./components/Anecdote"
import AnecdoteForm from "./components/NewAnecdote"
import Filter from "./components/VisibilityFilter"
import Notification from "./components/Notification"

import {initializeDotes} from "./reducers/anecdoteReducer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeDotes())
  }, [dispatch])

  return (
    <div className="mbody">
      <Notification />
      <Anecdotes />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App
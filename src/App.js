import Anecdotes from "./components/Anecdote"
import AnecdoteForm from "./components/NewAnecdote"
import Filter from "./components/VisibilityFilter"

const App = () => {
  return (
    <div className="mbody">
      <Anecdotes/>
      <Filter/>
      <AnecdoteForm/>
    </div>
  )
}

export default App
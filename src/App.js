import Anecdotes from "./components/Anecdote"
import AnecdoteForm from "./components/NewAnecdote"
import Filter from "./components/VisibilityFilter"
import Notification from "./components/Notification"

const App = () => {
  return (
    <div className="mbody">
      <Notification/>
      <Anecdotes/>
      <Filter/>
      <AnecdoteForm/>
    </div>
  )
}

export default App
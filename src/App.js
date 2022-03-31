import Anecdotes from "./components/Anecdote"
import AnecdoteForm from "./components/NewAnecdote"
//import reducer from './reducers/anecdoteReducer'

const App = () => {


  return (
    <div className="mbody">
      <Anecdotes/>
      <AnecdoteForm/>
    </div>
  )
}

export default App
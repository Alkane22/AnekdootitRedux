import { useSelector, useDispatch } from 'react-redux'
import { voteDote } from '../reducers/anecdoteReducer'
import { updateNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div className='anecdote'>
            <p>{anecdote.content}</p>
            <p className='votes'>Votes: {anecdote.votes}</p>
            <button onClick={handleClick}>Vote</button>
        </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    //const anecdotes = useSelector(state => state.anecdotes)
    
    const anecdotes = useSelector(state => {
        if(state.filter === 'NONE'){
            return state.anecdotes
        }
        return state.filter === 'SET_FILTER'
        ? state.anecdotes
        : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
        
    })
    
    const multiAction = (anecdote) => {
        dispatch(voteDote(anecdote.id))
        dispatch(updateNotification('You voted "' + anecdote.content + '"'))
    }

    return (
        <div className='container'>
            <h2>Anecdotes</h2>
            <ul>
                {anecdotes
                    .slice() //anecdotes is read only so shallow copy is created
                    .sort((a, b) => b.votes - a.votes) //sort bt votes
                    .map(anecdote =>
                        <li key={anecdote.id}>
                            <Anecdote                  
                                anecdote={anecdote}
                                handleClick={() => multiAction(anecdote)}
                            />
                        </li>

                    )}
            </ul>
        </div>
    )
}

export default Anecdotes
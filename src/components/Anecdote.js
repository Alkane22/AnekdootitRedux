import { useSelector, useDispatch } from 'react-redux'
import { voteDote } from '../reducers/anecdoteReducer'

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
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <h2>Anecdotes</h2>
            <ul>
                {anecdotes
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote =>
                        <li key={anecdote.id}>
                            <Anecdote                  
                                anecdote={anecdote}
                                handleClick={() => dispatch(voteDote(anecdote.id))}
                            />
                        </li>

                    )}
            </ul>
        </div>
    )
}

export default Anecdotes
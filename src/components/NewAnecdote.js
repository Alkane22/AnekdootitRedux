import { useDispatch } from 'react-redux'
import { addDote } from '../reducers/anecdoteReducer'
import { updateNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addDote(content))
        dispatch(updateNotification('"' + content + '" added.'))
    }

    return (
        <div className='anForm'>
            <h2>Create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
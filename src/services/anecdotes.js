import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () =>  {
    const res = await axios.get(baseUrl)
    return res.data
}

const createNew = async (content) =>  {
    const obj = {
        content,
        votes: 0
    }
    const res =  await axios.post(baseUrl, obj)
    return res.data
}

const voteAnecdote = async (id) => {
    const res = await axios.get(baseUrl + '/' + id)
    const obj  = {
        content: res.data.content,
        votes: res.data.votes + 1
    }

    const res2 =  await axios.put(baseUrl + '/' + id, obj)
    return res2.data
}

const exportedObject = {
    getAll,
    createNew,
    voteAnecdote
}

export default exportedObject
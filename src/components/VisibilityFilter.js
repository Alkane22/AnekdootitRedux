import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      dispatch(filterChange(event.target.value))
    }

    return (
      <div className="visFilter">
        Filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter
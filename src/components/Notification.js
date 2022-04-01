import { useSelector, useDispatch } from "react-redux"
import { closeNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  if(notification.type === 'ON'){
    setTimeout(() => {
      dispatch(closeNotification())
    }, 4000)

    return (
      <div className="notification">
        {notification.message}
      </div>
    )
  }

  if(notification.type === 'OFF'){
    return(
      <></>
    )
  }

  return(
    <></>
  )
}

export default Notification
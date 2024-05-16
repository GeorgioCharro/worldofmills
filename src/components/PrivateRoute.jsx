import { Outlet,Navigate } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Animation from '../components/Animation'
const PrivateRoute = () => {

    const {loggedIn,checkingStatus}=useAuthStatus()
    
    if(checkingStatus){
        return (<Animation/>)
    }
  return ( loggedIn ? <Outlet /> : <Navigate to='/sign-in'/>
    

  )
}

export default PrivateRoute
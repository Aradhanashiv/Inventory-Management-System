import axios from "axios"
import { useEffect } from "react"
import { serverUrl } from "../App"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../redux/userSlice"


function useGetCurrentUser () {
    const dispatch = useDispatch()
   
    useEffect(()=>{
      
     const fetchCurrentUser = async () => {
        try {
         const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user-info/current` , {withCredentials: true})  
         console.log(result);  
         dispatch(setUserData(result.data))  
        } catch (error) {
         console.log(error);  
        }
     }
     fetchCurrentUser()
    }, [])   
}

export default useGetCurrentUser
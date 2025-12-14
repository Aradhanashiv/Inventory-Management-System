import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { serverUrl } from '../App'

const SignOut = () => {

  useEffect(()=>{
    const fetchDeletedUser = async () => {
      try {
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/signout`, {withCredentials: true})
        console.log(result)
      } catch (error) {
        console.log(error)
      }

    }
    fetchDeletedUser()
  }, [])

  return (
    <div>SignOut</div>
  )
}

export default SignOut
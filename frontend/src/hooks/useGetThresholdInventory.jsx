import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import { setThresholdInventory } from '../redux/inventorySlice'
import { useDispatch } from 'react-redux'

function useGetThresholdInventory () {
    const dispatch = useDispatch()

    useEffect(()=>{
    const fetchThresholdInventory = async()=>{
      try {
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/get-threshold-products`, {withCredentials: true})
        console.log(result.data.data);
        dispatch(setThresholdInventory(result.data.data))
      } catch (error) {
        console.log(error); 
      }
    }
    fetchThresholdInventory()
  },[dispatch])
}

export default useGetThresholdInventory
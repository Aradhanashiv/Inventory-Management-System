import axios from 'axios'
import { useEffect } from 'react'
import {serverUrl} from '../App'
import { useDispatch, useSelector } from "react-redux"
import { setInventoryData } from '../redux/inventorySlice'

function useGetAllProducts () {
    const dispatch = useDispatch()
     const user = useSelector(state => state.user)
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const result =  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/all-products` , {withCredentials: true});
                dispatch(setInventoryData(result.data.data))
                console.log(result.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [dispatch])
}

export default useGetAllProducts
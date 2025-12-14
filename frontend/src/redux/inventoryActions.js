import axios from "axios"
import { serverUrl } from "../App"
import { setInventoryData } from "./inventorySlice"

export const getAllproducts = () => {
return async (dispatch) => {

    try {
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/all-products` , {withCredentials: true})
        dispatch(setInventoryData(result.data.data))
    } catch (error) {
        console.log(error);  
    }
}
}
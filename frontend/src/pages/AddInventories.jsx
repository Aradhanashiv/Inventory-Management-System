import axios from "axios"
import { toast } from "react-toastify"
import {serverUrl} from '../App/'
import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {setInventoryData} from '../redux/inventorySlice'
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const AddInventories = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {inventoryData} = useSelector(state => state.inventory)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [stock_quantity, setStock_quantity] = useState(0)
    const [err, setErr] = useState("")

    const createNewInventory = async (e) => {
        e.preventDefault()
        try {
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/product/create-product`,
              { name, description, stock_quantity } 
             ,{withCredentials: true}
           )
          dispatch(setInventoryData([...inventoryData, result.data.product]))
          setName("")
          setDescription("")
          setStock_quantity(0)
          setErr("")

          toast.success("Inventory Added Successfully", {autoClose: 3000})
          navigate('/inventories')
          
         console.log(result.data.product);
         } catch (error) {
           setErr(error?.response?.data?.message)
        }
    }

    return (
       <div className="w-full min-h-screen flex items-center justify-center bg-blue-100 p-6">
        <div className="bg-white w-full md:w-1/3 border border-blue-600 rounded-2xl p-8">
         <button onClick={()=>navigate('/')}>
              <FaBackward size={25} />
            </button>
        <h1 className="text-3xl font-bold py-2 text-blue-700">New Inventory</h1>
        <p className="text-black font-semibold mb-6">Add New Inventory in a WareHouse</p>
        <form onSubmit={createNewInventory}>
        <div className="mb-4">
        <label htmlFor="name" className="px-2 mb-3 font-semibold text-gray-700">Name</label>   
        <input type="text" className="w-full block border border-blue-500 rounded-xl  mt-2 py-2 px-2" 
        name="name" placeholder="Inventory Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className="mb-4">
        <label htmlFor="description" className="px-2 mb-3 font-semibold text-gray-700">Add Description</label>   
        <input type="text" className="w-full block border border-blue-500 rounded-xl  mt-2 py-2 px-2"
         name="description" placeholder="Description"  value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>

        <div className="mb-4">
        <label htmlFor="quantity" className="px-2 mb-3 font-semibold text-gray-700">Add Stock Quantity</label>   
        <input type="Number" className="w-full block border border-blue-500 rounded-xl  mt-2 py-2 px-2" 
        name="stock_quantity"   placeholder={stock_quantity} onChange={(e)=>setStock_quantity(e.target.value)}/>
        </div>
            {err && <p className="text-red-500 font-semibold">*{err}</p>}

        <button type="submit" className="w-full border mb-4 rounded-xl bg-blue-700 text-white 
        font-semibold px-3 py-2 transition duration-200 cursor-pointer hover:bg-blue-100 hover:text-black"
        >Add Inventories</button>
        </form>
        </div>
       </div>
    )
}

export default AddInventories
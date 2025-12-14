import { useDispatch, useSelector } from "react-redux";
import { AiFillProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaBackward, FaMinusCircle } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
// import useGetAllProducts from "../hooks/useGetAllProducts"
import {getAllproducts} from '../redux/inventoryActions.js'
import {setInventoryData} from '../redux/inventorySlice'
import { toast } from "react-toastify"
import { serverUrl } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";


const Inventories = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useGetAllProducts()
  useEffect(()=>{
    dispatch(getAllproducts())
  },[dispatch])

  const [stock_quantities, setStock_quantities] = useState({})
  const [dec_stock_quantities, setDec_stock_quantities] = useState({})
  const {inventoryData} = useSelector(state => state.inventory)
           
  const handleIncreaseStock = async (productId)=> {
  try {
    const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/product/${productId}/increase-stock`, {stock_quantity: stock_quantities[productId]}, 
    { withCredentials: true})
     setStock_quantities(prev => ({ ...prev, [productId]: ""}))
    dispatch(getAllproducts())
    toast.success("Stock Increased Successfully", {autoClose: 3000})
    console.log(result);
  } catch (error) {
    console.log(error);
    
  }
  }

  const handleDecreaseStock = async (productId) => {
    try {
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/product/${productId}/decrease-stock`,
         {stock_quantity: dec_stock_quantities[productId]},  { withCredentials: true})
     setDec_stock_quantities(prev => ({ ...prev, [productId]: ""}))
    dispatch(getAllproducts())
    toast.success("Stock Decreased Successfully", {autoClose: 3000})
    console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
   <div className="w-full min-h-screen pt-6 bg-pink-50">
    <div className="pl-6 ">
     <button onClick={()=>navigate('/')}><FaBackward size={25} /></button>
    </div>

    <div className="w-full flex items-center justify-center gap-2 md:pb-3 pb-0 md:mt-0 mt-5">
    <AiFillProduct size={35}/>
    <h1 className="text-center md:text-4xl font-bold text-2xl 
    text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-black-500 to-pink-500 animate-pulse">
      Items in WareHouse</h1>
    </div>
    {inventoryData?.length == 0 &&  <div className="w-full mx-auto md:mt-5 mt-8">
       <p className="text-center md:text-3xl font-bold text-3xl 
       text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-black-500 to-pink-500 animate-pulse">No Items Available In WareHouse</p>
     </div>}
     
     {inventoryData?.length > 0 && 
       <div className="w-[85%] grid md:grid-cols-3 g-5 mx-auto mt-5">
       {inventoryData.map((product,index) => 

      <div className=" bg-gradient-to-bl from-pink-100 to-white/50 m-3 border border-pink-400/40 shadow-sm rounded-lg shadow-60 p-4 text-center items-center hover:shadow-lg" key={index}>
     
      <p className="font-semibold text-gray-700 text-lg mt-4">{product.name}</p>
      <p className="text-gray-700">{product.description}</p>
      <p className="font-semibold text-md mt-3">Stock Quantity - {product.stock_quantity}</p>
      
       <div className="w-full md:w-[70%] flex items-center justify-between mt-5 mx-auto text-pink-700 border border-pink-700 rounded-xl px-3 py-1">
       <input type="Number" name="stock_quantity" className="outline-none background-none" 
        value={ stock_quantities[product._id] || '' }
        onChange={(e)=>setStock_quantities({...stock_quantities, [ product._id]: Number(e.target.value)})}  />
       <button onClick={()=>handleIncreaseStock(product._id)}>
       <IoMdAddCircleOutline size={25}/>
       </button>
       </div>

        <div className="w-full md:w-[70%] flex items-center justify-between mt-5 mx-auto text-pink-700 border border-pink-700 rounded-xl px-3 py-1">
       <input type="Number" name="stock_quantity" className="outline-none background-none" 
        value={ dec_stock_quantities[product._id] || '' }
        onChange={(e)=>setDec_stock_quantities({...setDec_stock_quantities, [ product._id]: Number(e.target.value)})}  />
       <button onClick={()=>handleDecreaseStock(product._id)}>
       <FiMinusCircle size={25}/>
       </button>
       </div>
       <button className="w-full mt-4 bg-pink-500 text-white rounded-xl px-3 py-2 hover:bg-pink-500/30 hover:text-pink-600"
        onClick={()=>navigate(`/update-product/${product._id}`)}>Update Product Details</button>
    
    </div>
        )}
  
    
    </div>
    }
   
   </div>
  ) 
}

export default Inventories;

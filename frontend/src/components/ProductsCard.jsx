import axios from 'axios'
import Nav from '../components/Nav'
import { serverUrl } from '../App'

const ProductsCard = () => {
  return (
   
      <div className="flex-1 bg-gray-100 p-6 ">
        <div className="w-[85%] grid md:grid-cols-3 g-5 mx-auto mt-5">
          <div className="bg-white/50 m-3 border border-gray-200 shadow-sm rounded-lg shadoww-60 p-4 text-center items-center hover:shadow-lg" key={index}>
      <p className="font-semibold text-gray-700 text-lg mt-4">{product.name}</p>
       <p className="text-gray-700">{product.description}</p> 
      <div className="w-full flex items-center justify-center gap-3 mt-5">
       <button className="text-blue-900  border border-blue-900 rounded-xl px-3 py-2 
      hover:border-white hover:bg-blue-600/70 hover:text-white transition-all duration-300">Stock Quantity: {product.stock_quantity}</button> 
      <button className="bg-pink-500 text-white rounded-xl px-3 py-2 hover:bg-pink-500/30 hover:text-pink-600"
      onClick={()=>navigate('/')}>Product Details</button>
      </div>
    </div>
       
  
    
    </div>

      </div>
  )
}

export default ProductsCard
import { useSelector } from 'react-redux'
import useGetThresholdInventory from '../hooks/useGetThresholdInventory'

const Home = () => {
  useGetThresholdInventory()
  const {thresholdInventory} = useSelector(state => state.inventory)
  const {inventoryData} = useSelector(state => state.inventory)
  
  return (
   <div className="md:flex-1 bg-pink-100 p-6 z-[0]">
        <h1 className='text-4xl font-bold
         text-transparent bg-clip-text bg-gradient-to-tl from-indigo-700 to-pink-500 animate-pulse '>Dashboard</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-[30px] text-white">
        <div className="rounded-lg text-center bg-pink-200/50 border border-pink-400 p-6 shadow hover:shadow-lg transition-all duration-300">
          <h2 className='text-xl font-semibold text-pink-700'>Total Inventory in WareHouse</h2>
          <p className='text-xl mt-5 font-bold text-pink-700'>{inventoryData?.length}  </p>
        </div>
         <div className="rounded-lg text-center bg-amber-200/50 border border-amber-400 p-6 shadow hover:shadow-lg transition-all duration-300  p-6">
          <h2 className='text-xl font-semibold text-amber-700'>Products Below Threshold Limit</h2>
          <p className='text-xl mt-5 font-bold text-amber-700'>{thresholdInventory?.length}</p>
        </div>
         <div className="rounded-lg text-center  bg-blue-200/50 border border-blue-400 p-6 shadow hover:shadow-lg transition-all duration-300 p-6">
          <h2 className='text-xl font-semibold text-blue-700'>Total Stock</h2>
          <p className='text-xl mt-5 font-bold text-blue-700'>8</p>
        </div>
        
        </div>
      </div>
  )
}

export default Home
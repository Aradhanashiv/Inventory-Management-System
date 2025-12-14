import { ImProfile } from "react-icons/im";
import { FaBackward } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const {userData} = useSelector(state => state.user)
    
  return (  
    <div className='w-full min-h-screen bg-pink-100 p-4 m-auto'>
    <button className="p-6" onClick={()=>navigate('/')}>
      <FaBackward size={25} />
    </button>
        <div className="md:w-1/2 w-full mx-auto">
          <div className="flex items-center gap-3 p-6">
        <ImProfile size={30}/> <h1 className='md:text-4xl text-3xl font-semibold
         text-transparent bg-clip-text bg-gradient-to-tl from-indigo-700 to-pink-500 animate-pulse'> Profile Info</h1>
      </div>
      <div className=" md:p-6 p-4 rounded-xl shadow-lg bg-gradient-to-bl from-pink-100 to-white/50 border border-pink-400/40 shadow-sm">
      <p className='font-semibold'>Email Address</p>
      <p className='mt-2 border rounded-lg md:px-2 md:py-3 px-1 py-2  bg-gray-200 border-gray-500 hover:bg-gray-200/50 mt-3 text-gray-500' >{userData.email} </p>
      </div>

       <div className="mt-[30px] md:p-6 p-4 rounded-xl bg-gradient-to-bl from-pink-100 to-white/50 border border-pink-400/40 shadow-lg">
      <p className='font-semibold'>FullName</p>

      <p className='mt-2 border rounded-lg md:px-2 md:py-3 px-1 py-2 bg-gray-200 border-gray-500 hover:bg-gray-200/50 mt-3 text-gray-500' >{userData.fullname} </p>
      <p className='font-semibold mt-4'>Mobile</p>
      
      <p className='mt-2 border rounded-lg md:px-2 md:py-3 px-1 py-2  bg-gray-200 border-gray-500 hover:bg-gray-200/50 mt-3 text-gray-500' >{userData.mobile} </p>
      </div>
      </div>
    </div>
  )
}

export default Profile
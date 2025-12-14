import axios from 'axios'
import { serverUrl } from '../App'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

const SignUp = () => {
     
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [err , setErr] = useState('')
  const dispatch = useDispatch()

    const handleSignup = async () => {
      try {
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup` , {fullname, email, password, mobile} , {withCredentials: true}) 
        console.log(result);
        dispatch(setUserData(result.data.user))
        setErr("")
      } catch (error) {
         console.log(error);
         setErr(error?.response?.data?.message)
      }
    }
    return (
       <div className="w-full min-h-screen flex items-center justify-center bg-blue-100 p-6">
        <div className="bg-white w-[full] border border-blue-600 rounded-2xl p-8">
        <h1 className="text-3xl font-bold py-2 text-blue-700">Inventory Management System</h1>
        <p className="text-black font-semibold mb-6">Create Your Account</p>
        <div className="mb-4">
        <label htmlFor="Fullname" className="px-2 mb-3 font-semibold text-gray-700">Fullname</label>   
        <input type="text" className="w-full block border border-blue-500 rounded-xl mt-2 py-2 px-2" 
        name="fullname" placeholder="Enter Your Fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
        </div>

        <div className="mb-4">
        <label htmlFor="Email" className="px-2 mb-3 font-semibold text-gray-700">Email</label>   
        <input type="text" className="w-full block border border-blue-500 rounded-xl  mt-2 py-2 px-2" name="email" 
        placeholder="Enter Your Email"value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="mb-4">
        <label htmlFor="password" className="px-2 mb-3 font-semibold text-gray-700">Password</label>   
        <input type="text" className="w-full block border border-blue-500 rounded-xl  mt-2 py-2 px-2" 
        name="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className="mb-4">
        <label htmlFor="mobile" className="px-2 mb-3 font-semibold text-gray-700">Mobile</label>   
        <input type="text" className="w-full block border border-blue-500 rounded-xl  mt-2 py-2 px-2" name="mobile" 
        placeholder="Enter Your Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </div>

          
        <button type="submit" className="w-[20%] border mb-4 rounded-xl bg-blue-700 text-white 
        font-semibold px-3 py-2 transition duration-200 cursor-pointer hover:bg-blue-100 hover:text-black"
         onClick={()=>handleSignup()}>SignUp</button>
        
        {err && <p className='text-red-500 font-bold text-center'>*{err}</p> }

        {/* <div className="">
         <button type="submit" className="w-full border mb-4 rounded-2xl 
        font-semibold px-3 py-2 transition duration-200 cursor-pointer hover:bg-blue-100 hover:text-black">SignUp Via Google</button>
        </div> */}

        <p className="text-center">Already Have an Account? <span className="text-blue-700 font-bold hover:text-gray-500">SignIn</span></p>
       </div>
       </div>
    )
}

export default SignUp
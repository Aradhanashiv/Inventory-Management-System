import { useState } from 'react';
import logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';



const Nav = () => {

  const dispatch = useDispatch()

   const handleSignOut = async() => {
      try {
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/signout` , {withCredentials: true})
        dispatch(setUserData(null))
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

    const [menuOpen, setMenuOpen] = useState(false)
    const navItems = [
      {icon_name: 'DashBoard' , path : "/", icon: <RiHomeOfficeFill size ={25}/>},
      {icon_name: 'Products' , path :"/inventories", icon: <AiOutlineProduct  size ={25}/>},
      {icon_name: 'Profile' , path : "/profile", icon: <CgProfile  size ={25}/>},
      {icon_name: 'Add New-Product' , path : "/add-inventory", icon: <BiCartAdd  size={25}/>},
      {icon_name: 'Signout' , icon: <IoLogOutSharp  size={25}/>, action: "logout"},
    ]

   

  return (
    <nav className='md:w-[300px] w-full bg-blue-200 shadow-xl flex md:flex-col flex-row items-center md:items-start pl-8 z-10'>
   
       <div className='flex items-center font-bold mt-[30px] gap-3 '>
         <img src={logo} width={50} /> <h1 className='text-2xl'>Inventory MS</h1>
       </div>
          
        <div className="mt-[40px] ml-[50px] z-40">
       {menuOpen ? 
       <RxCross2 size={30} className='font-bold md:hidden' onClick={()=>setMenuOpen(false)}/>
       :
       <FiMenu size={30} className='font-bold md:hidden' onClick={()=>setMenuOpen(true)}/>
       } 
       </div> 

       {/* Desktop Menu    */}
        <div className='hidden md:block'>
        <div className='flex flex-col items-left justify-center text-white space-y-8 mt-[40px]'>
          {navItems.map((item,index) => (
            (item.action === "logout")? 
            <button key={index}
            className='flex items-center gap-3 text-gray-700 font-semibold transition-colors duration-300 text-xl hover:text-gray-900'
            onClick = {handleSignOut}
            > {item.icon} <span>{item.icon_name} </span>
             </button>
            :
          <Link key={index}
            to={item.path}
            className='flex items-center gap-3 text-gray-700 font-semibold transition-colors duration-300 text-xl hover:text-gray-900'>
           {item.icon}
           <span>{item.icon_name} </span>
          </Link>
          )
          
          )}
        </div>
       </div> 

       {/* Mobile menu */}

     <div className={`md:hidden fixed top-0 right-0 w-[250px] h-[350px] bg-gradient-to-bl from-white to-blue-100
       shadow-xl rounded-l-2xl
     transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300
          `}>
        <div className='flex flex-col items-left justify-center text-white space-y-6 m-[40px] pt-7'>
          {navItems.map((item,index) => (
            (item.action === "logout")? 
            <button key={index}
            className='flex items-center gap-3 text-gray-700 font-semibold transition-colors duration-300 text-xl hover:text-gray-900'
            onClick = {handleSignOut}
            > {item.icon} <span>{item.icon_name} </span>
             </button>
            :
          <Link key={index}
            to={item.path}
            className='flex items-center gap-3 text-gray-700 font-semibold transition-colors duration-300 text-xl hover:text-gray-900'>
           {item.icon}
           <span>{item.icon_name} </span>
          </Link>
          )
          
          )}
        </div>  
       </div>
        
    </nav>
  )
}

export default Nav
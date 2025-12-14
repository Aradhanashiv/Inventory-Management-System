import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './components/Dashboard.jsx'
import useGetCurrentUser from './hooks/useGetCurrentUser.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import AddInventories from './pages/AddInventories.jsx'
import SignIn from './pages/Signin.jsx'
import SignUp from './pages/Signup.jsx'
import SignOut from './pages/SignOut.jsx'
import {Routes, Route, Navigate} from 'react-router-dom'
import Inventories from './components/Inventories.jsx'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile.jsx'
import UpdateProduct from './pages/UpdateProduct.jsx'
import useGetAllProducts from "./hooks/useGetAllProducts"
// export const serverUrl = 'http://localhost:8001'

const App = () => {
  useGetAllProducts()
  useGetCurrentUser()
  const {userData} = useSelector(state => state.user)
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/signup' element={!userData? <SignUp/>: <Navigate to={"/"}/> }/>
      <Route path='/signin' element={!userData?  <SignIn/>: <Navigate to={"/"}/> }/>
      <Route path='/signout' element={ <SignOut/> }/>
      <Route path='/forgot-password' element={ <ForgotPassword/> }/>
      <Route path='/add-inventory' element= {!userData? <SignIn/> : <AddInventories/>} />
      <Route path='/' element={!userData? <SignIn/>: <Dashboard/> }/>
       <Route path='/inventories' element= {!userData? <SignIn/>: <Inventories/>} />
       <Route path='/profile' element= {!userData? <SignIn/>: <Profile/>} />
       <Route path='/update-product/:id' element= {!userData? <SignIn/>: <UpdateProduct/>} />
    </Routes>
    </>
  )
}

export default App    
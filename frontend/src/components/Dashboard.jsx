import Nav from '../components/Nav'
import Home from './Home'

const Dashboard = () => {
  return (
    < div className='flex flex-col md:flex-row min-h-screen bg-pink-50'>
  
    <Nav/>
    <Home/>
    </div>
  )
}

export default Dashboard
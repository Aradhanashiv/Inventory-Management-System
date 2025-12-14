const ForgotPassword = () => {
    // const border = #efafafff;
    return (
       <div className="w-[full] min-h-screen flex items-center justify-center bg-blue-100 p-8">
        <div className="md:w-[40%] w-full bg-white border border-blue-600 rounded-2xl p-8">
        {/* <h1 className="text-3xl font-bold py-2 text-blue-700">Inventory Management System</h1> */}
        <p className="text-black font-semibold mb-6">Enter Your Registered Email</p>
      
        <div className="mb-4">
        <label htmlFor="Email" className="px-2 font-semibold text-gray-700">Email</label>   
        <input type="text" className="w-full mt-2 block border border-blue-500 rounded-xl py-2 px-2" name="email" placeholder="Enter Your Email" />
        </div>

        <button type="submit" className="w-[full] border mb-4 rounded-xl bg-blue-700 text-white 
        font-semibold px-3 py-2 transition duration-200 cursor-pointer hover:bg-blue-100 hover:text-black">Sent Otp</button>
       
       </div>
       </div>
    )
}

export default ForgotPassword
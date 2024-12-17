export function StepTwo({setSteps}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 space-x-8">
            
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg  h-[655px]">
                
                 <img src="/main.png" />
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Join Us! <span role="img" aria-label="cool">😎</span></h1>
          
           <p className="text-gray-600 mb-6">
          Please provide all current information accurately.</p>
          <form className="space-y-4 text-black">
 <div>
 <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span>
 </label>
 <input
              type="text"
              placeholder="Placeholder"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
 </div>


 <div>
 <label className="block text-gray-700 font-medium mb-1">Phone Number <span className="text-red-500">*</span>
 </label>
 <input
              type="text"
              placeholder="Placeholder"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
 </div>
 <div>
 <label className="block text-gray-700 font-medium mb-1">Password <span className="text-red-500">*</span>
 </label>
 <input
              type="password"
              placeholder="Placeholder"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
 </div>
 <div>
 <label className="block text-gray-700 font-medium mb-1">Confirm Password <span className="text-red-500">*</span>
 </label>
 <input
              type="password"
              placeholder="Placeholder"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
 </div>


                    <button 
                     className="border w-full p-2 h-[44px] text-black "
                     onClick={() => {
                        setSteps(3)}} >Continue 2/3
                    </button>

                    <button 
            className="text-black"
            onClick={() => {
            setSteps(1)}} >back
            </button></form>


 </div>
 </div>
    )
}

 //  <div className="">
        //     <button 
        //     className="text-black"
        //     onClick={() => {
        //     setSteps(3)}} >next
        //     </button>

        //     <button 
        //     className="text-black"
        //     onClick={() => {
        //     setSteps(1)}} >back
        //     </button>

        // </div>
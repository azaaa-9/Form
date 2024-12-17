
import Image from "next/image";
export function StepOne({ setSteps }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">


        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md  text-black w-[480px] h-[655px]">
          <img className="w-[60px] h-[60px]" src="/main.png" />
          <h1 className="text-2xl font-bold mb-4 text-center "> Join Us! 😎</h1>
          <p className="text-gray-600 mb-6 text-center">
            Step 1 of 3 - Please provide all current information accurately.
          </p>


                <div className="text-black">
                    <p >First Name *</p>
                    <input 
                    className=" border border-solid border-[#CBD5E1] hover:border-[#0CA5E9] w-full rounded h-[44px]"
                    placeholder="First Name"></input>
                    <p>Last Name *</p>
                    <input 
                    className=" border border-solid border-[#CBD5E1] hover:border-[#0CA5E9] w-full rounded h-[44px]"
                    placeholder="Last Name"></input>
                    <p>Username *</p>
                    <input 
                    className=" border border-solid border-[#CBD5E1] hover:border-[#0CA5E9] w-full rounded h-[44px]"
                    placeholder="Username"></input>
                     </div>


                     <div >
                     <button 
                     className="border w-full p-2 h-[44px] "
                     onClick={() => {
                        setSteps(2)}} >Continue 1/3</button>
                        </div>


                     </div>
        </div>
    
    )
}









 

export function Card({ onclick, onChange, }) {
  return (
    <>
      <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
        <div className="ml-[30px] mt-[30px]">


          <div className="w-[400px]  ">
            <img src="/main.png" width={60} height={60}></img>
            <h2 className="text-[26px] font-bold w-[150px] text-black">Join Us! 😎</h2>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>


          <div className="text-black">
            <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-7 font-bold">
              First Name <span className="text-red-600">*</span>
            </p>
            <input
              className="w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2"
              placeholder="firstName"
              id="firstName"
              onChange={onChange}
            ></input>
            <br></br>
            <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
              Last Name <span className="text-red-600">*</span>
            </p>
            <input
              className="w-[410px] h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
              placeholder="Last Name "
              id="LastName"
              onChange={onChange}
            ></input>
            <br></br>
            <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
              UserName <span className="text-red-600">*</span>
            </p>
            <input
              className="w-[410px]  h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
              placeholder="UserName"
              id="userName"
              onChange={onChange}
            ></input>
            
            <button
              className="w-[410px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md mt-[120px] border-solid hover:border"
              onClick={onclick}
            >
              Next 1/3{" "}
            </button>
          </div>


        </div>
      </div>
    </>
  );
}








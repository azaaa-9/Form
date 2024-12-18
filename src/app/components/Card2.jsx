export function Card2({ onclick, Back, onChange}) {
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
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 ">
               Email <span className="text-red-600">*</span>
              </p>
              <input
                className="w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2"
                placeholder="you@example.com"
                id="Email"
                onChange={onChange}
              ></input>
              <br></br>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
                Phone Number <span className="text-red-600">*</span>
              </p>
              <input
                className="w-[410px] h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
                placeholder="Phone Number"
                type="number"
                id="phoneNumber"
                onChange={onChange}
              ></input>
              <br></br>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
                Password <span className="text-red-600">*</span>
              </p>
              <input
                className="w-[410px]  h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
                placeholder="Password"
                type="password"
                id="password"
                onChange={onChange}
              ></input>
              <br></br>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
                Confirm <span className="text-red-600">*</span>
              </p>
              <input
                className="w-[410px]  h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
                placeholder="Repeat Your Password"
                type="password"
                id="repeatPassword"
                onChange={onChange}
              ></input>


              <div className="flex justify-center  gap-3 mt-[40px]">
                <button
                  onClick={Back}
                  className="w-[128px] h-11 bg-[#CBD5E1 flex justify-center items-center border border-solid border-[#CBD5E1] rounded-lg "
                >
                  Back
                </button>
                <button
                  className="w-[280px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md "
                  onClick={onclick}
                >
                  Next 2/3{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
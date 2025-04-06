import React, { useState } from "react";

export function Card3({ onclick, Back, onChange }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      if (onChange) onChange(e); // гаднаас ирсэн onChange-ийг дуудаж байна
    }
  };

  return (
    <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
      <div className="ml-[30px] mt-[30px]">
        <div className="w-[400px]">
          <img src="/main.png" width={60} height={60} alt="Logo" />
          <h2 className="text-[26px] font-bold w-[150px] text-black">Join Us! 😎</h2>
          <p className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately
          </p>
        </div>

        <div>
          <p className="size-[14px] w-[100px] h-7 mt-8 font-bold text-black">
            Date of Birth
          </p>
          <input
            type="date"
            id="date"
            onChange={onChange}
            className="w-[410px] h-11 border border-[#CBD5E1] rounded-md pl-2 text-black"
          />

          <div className="mt-8">
            <p className="font-bold text-black">Profile</p>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-[416px] h-60 border rounded-lg cursor-pointer hover:bg-gray-100"
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-[100px] h-[100px] rounded-full object-cover mt-2"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <img src="/profileImage.png" className="w-[26px] h-[28px]" />
                  <p className="text-sm text-black mt-2">Add image</p>
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex justify-center gap-3 mt-[41px]">
            <button
              onClick={Back}
              className="w-[128px] h-11 bg-[#CBD5E1] flex justify-center items-center border border-solid border-[#CBD5E1] rounded-lg"
            >
              Back
            </button>
            <button
              className="w-[280px] h-11 bg-black flex justify-center items-center rounded-md text-white"
              onClick={onclick}
            >
              Continue 3/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

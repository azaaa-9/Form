
import React, { useState } from "react";
import { validateCard } from "../utils/validate";

export function Card({ onclick }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleNext = () => {
    const validationErrors = validateCard(formData); // Custom validation logic
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      onclick(); // Proceed to the next step
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
        <div className="ml-[30px] mt-[30px]">
          <div className="w-[400px]">
            <img src="/main.png" width={60} height={60} alt="Main Logo" />
            <h2 className="text-[26px] font-bold w-[150px] text-black">
              Join Us! 😎
            </h2>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="text-black">
            {["firstName", "lastName", "userName"].map((field, index) => (
              <div key={field}>
                <p
                  className={`size-[14px] text-[#334155] w-[100px] h-7 ${
                    index !== 0 ? "mt-6" : "mt-8"
                  } font-bold`}
                >
                  {field === "firstName" && "First Name"}
                  {field === "lastName" && "Last Name"}
                  {field === "userName" && "User Name"}
                  <span className="text-red-600">*</span>
                </p>
                <input
                  className={`w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md pl-2 ${
                    errors[field] ? "border-red-600" : ""
                  }`}
                  placeholder={field}
                  id={field}
                  onChange={handleChange}
                  value={formData[field]}
                />
                {errors[field] && (
                  <p className="text-red-600 text-[12px] mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <button
              className="w-[410px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md mt-[120px] border-solid hover:border"
              onClick={handleNext}
            >
              Next 1/3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}







import React, { useState } from 'react';

export function Card2({ onclick, Back, onChange }) {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
  });

  const validateForm = () => {
    let formValid = true;
    let newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      formValid = false;
    }

    // Phone number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
      formValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      formValid = false;
    }

    // Confirm password validation
    if (!formData.repeatPassword) {
      newErrors.repeatPassword = 'Please confirm your password';
      formValid = false;
    } else if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Call the onclick function when the form is valid
      onclick();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    onChange && onChange(e);
  };

  return (
    <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
      <div className="ml-[30px] mt-[30px]">
        <div className="w-[400px]">
          <img src="/main.png" width={60} height={60} alt="logo" />
          <h2 className="text-[26px] font-bold w-[150px] text-black">Join Us! 😎</h2>
          <p className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="text-black">
          <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
            Email <span className="text-red-600">*</span>
          </p>
          <input
            className={`w-[410px] h-11 border-solid border-[1px] rounded-md pl-2 ${
              errors.email ? 'border-red-600' : 'border-[#CBD5E1]'
            }`}
            placeholder="you@example.com"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

          <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Phone Number <span className="text-red-600">*</span>
          </p>
          <input
            className={`w-[410px] h-11 border-solid border-[1px] rounded-md pl-2 ${
              errors.phoneNumber ? 'border-red-600' : 'border-[#CBD5E1]'
            }`}
            placeholder="Phone Number"
            type="number"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber}</p>}

          <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Password <span className="text-red-600">*</span>
          </p>
          <input
            className={`w-[410px] h-11 border-solid border-[1px] rounded-md pl-2 ${
              errors.password ? 'border-red-600' : 'border-[#CBD5E1]'
            }`}
            placeholder="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

          <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
            Confirm <span className="text-red-600">*</span>
          </p>
          <input
            className={`w-[410px] h-11 border-solid border-[1px] rounded-md pl-2 ${
              errors.repeatPassword ? 'border-red-600' : 'border-[#CBD5E1]'
            }`}
            placeholder="Repeat Your Password"
            type="password"
            id="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          {errors.repeatPassword && <p className="text-red-600 text-sm">{errors.repeatPassword}</p>}

          <div className="flex justify-center gap-3 mt-[40px]">
            <button
              onClick={Back}
              className="w-[128px] h-11 bg-[#CBD5E1] flex justify-center items-center border border-solid border-[#CBD5E1] rounded-lg"
            >
              Back
            </button>
            <button
              className="w-[280px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md"
              onClick={handleSubmit}
            >
              Next 2/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

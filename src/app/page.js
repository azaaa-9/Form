"use client"

import { Card } from "./components/Card";
import { useState } from "react";
import { Card2 } from "./components/Card2";
import { Card3 } from "./components/Card3";
import { Card4 } from "./components/Card4";

export default function Home() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  const [form, setForm] = useState({
    firstName: '',
    LastName: '',
    UserName: '',
    Email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
      })

      const onChange = (e) => {
        const field = e.target.id;
        const newValues = {... form, [field]: e.target.value};
        setForm(newValues);
        console.log(newValues)
      }
      
 
  return (
    <>
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        {step == 1 && <Card onclick={nextStep} form={form} onChange={onChange} />}
        {step == 2 && <Card2 onclick={nextStep} Back={backStep} />}
        {step == 3 && <Card3 onclick={nextStep} Back={backStep} />}
        {step == 4 && <Card4 onclick={backStep} />}
      </div>
    </>
  );
}

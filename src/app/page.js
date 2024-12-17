"use client"

import Image from "next/image";
import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";


export default function Home() {
  const [steps, setSteps] = useState(1);

  return (
    <div className="text-white text-center bg-white">
      {steps === 1 ? (
        <StepOne setSteps={setSteps} />
      ) : steps === 2 ? (
        <StepTwo setSteps={setSteps} />
      ) : steps === 3 ? (
        <StepThree setSteps={setSteps} />
      ) : (
        "success"
      )}
    </div>
  );
}

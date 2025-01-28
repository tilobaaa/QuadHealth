import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Onboard1 from "./Onboarding/Onboard1";
import Onboard2 from "./Onboarding/Onboard2";
import Onboard3 from "./Onboarding/Onboard3";
import Onboard4 from "./Onboarding/Onboard4";

const Onboarding = () => {
  const { step } = useParams();
  const totalSteps = 4;
  const [error, setError] = useState();
  const navigate = useNavigate();

  return (
    <div className="w-full flex-grow bg-grey-100 flex flex-col">
      {step === "1" && <Onboard1 />}

      {step === "2" && <Onboard2 />}

      {step === "3" && <Onboard3/>}

      {step === "4" && <Onboard4/>}
    </div>
  );
};

export default Onboarding;

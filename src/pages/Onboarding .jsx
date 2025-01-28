import { useParams } from "react-router-dom";
import Onboard1 from "./Onboarding/Onboard1";
import Onboard2 from "./Onboarding/Onboard2";
import Onboard3 from "./Onboarding/Onboard3";
import Onboard4 from "./Onboarding/Onboard4";

const Onboarding = () => {
  const { step } = useParams();
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

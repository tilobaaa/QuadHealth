import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";
import Progress from "../../components/Progress";
import useOnboardingStore from "../../store/onBoardingStore";


const Onboard3 = () => {
  const {updateOnboardingData} = useOnboardingStore()
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [changedData, setChangedData] = useState({
    "insuranceProvider":'',
    "insurancePlan": "",
    "insurancePolicyNumber":'',
  })

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    updateOnboardingData("page3",changedData)


  }

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setChangedData((prev)=>{
      return {
        ...prev, [name]: value
      }


    })
  }
  return (
    <div className="flex flex-col items-center p-6 my-8 mx-6 bg-grey-50  md:w-[40%] md:m-auto">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-grey-800 mb-2">
          Insurance Information
        </h1>
        <p className="text-sm text-grey-600">
          Adding your insurance info can help you see costs upfront and save
          time later.
        </p>
      </div>

      {/* Progress Bar */}
      <Progress />

      {/* Form */}
      <form className="w-full max-w-md flex flex-col gap-4">
        {/* Name Fields */}
        <select
          className="w-full  text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
          name=""
          id=""
        >
          <option value="--">Insurance provider</option>
          <option value="">Leadway Assurance Company Limited</option>
          <option value="">AIICO Insurance PLC</option>
          <option value="">Allianz Nigeria Insurance Ltd</option>
          <option value="">Cornerstone Insurance Plc</option>
          <option value="">Custodian Investment Plc</option>
        </select>
        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
          name=""
          id=""
        >
          <option value="--">Insurance plan</option>
          <option value="">Asthma</option>
          <option value="">
            Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)
          </option>
          <option value="">Breast Cancer</option>
          <option value="">Congestibe Heart Failure</option>
          <option value="">HIV/AIDS</option>
          <option value="">Epilepsy</option>
          <option value="">Hepatitis (A, B, C)</option>
          <option value="">Type 2 Diabetes</option>
          <option value="">Sickle Cell Disease</option>
        </select>
        {/* input for policy number */}

        <Input
          label="Policy Number"
          errorMessage="This is a required field"
          type="number"
          id="policy"
        />
        <p className="text-grey-500 text-sm mt-[-0.5rem]">
          You can find this information on your insurance card
        </p>

        <div className="w-full flex gap-4">
          <button
            onClick={() => {
              navigate("/onboarding/4");
            }}
            className="w-full py-3 text-grey-50 bg-purple-500 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500"
          >
            Continue
          </button>
          <button className="w-full py-3 text-grey-800 bg-grey-50 border border-grey-800 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
            Skip
          </button>
        </div>
      </form>
      <button className="mt-4 py-3 rounded-sm hover:scale-105 duration-100 cursor-pointer">
        Skip onboarding
      </button>
    </div>
  );
};

export default Onboard3;

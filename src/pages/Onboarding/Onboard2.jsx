import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";



const Onboard2 = () => {
    const { step } = useParams();
      const totalSteps = 4;
      const [error, setError] = useState();
      const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 my-8 mx-6 bg-grey-50  md:w-[40%] md:m-auto ">
    {/* Header Section */}
    <div className="text-center mb-6">
      <h1 className="text-2xl font-semibold text-grey-800 mb-2">
        Medical History
      </h1>
      <p className="text-sm text-grey-600">
        Help us provide the best care by sharing any important medical
        details.
      </p>
    </div>

    {/* Progress Bar */}
    <div className="w-full flex items-center justify-center gap-4 mb-6">
      <div className="flex gap-2">
        <img
          className="w-6 h-6"
          src="/assets/arrow-narrow-left.svg"
          alt=""
        />
        <p>Back</p>
      </div>
      <div></div>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-16 ${
            index < step ? "bg-purple-500" : "bg-grey-300"
          } rounded`}
        ></div>
      ))}
      <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
    </div>

    {/* Form */}
    <form className="w-full max-w-md flex flex-col gap-4">
      {/* Name Fields */}
      <select
        className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
        name=""
        id=""
      >
        <option value="--">Existing medical conditions</option>
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
      <select
        className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
        name=""
        id=""
      >
        <option value="--">Allergies</option>
        <option value="">Allergies</option>
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
      <div className="w-full flex flex-col md:flex-row gap-4">
        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
          name=""
          id=""
        > 
        <option value="--">Blood Type</option>
          <option value="">A Positive (A+)</option>
          <option value="">A Negative (A-)</option>
          <option value="">B Positive (B+)</option>
          <option value="">B Negative (B-)</option>
          <option value="">AB Negative (AB+)</option>
          <option value="">AB Positive (AB-)</option>
          <option value="">O Positive (O+)</option>
          <option value="">O Negative (O-)</option>
          <option value=""></option>
        </select>
        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
          name=""
          id=""
        >
          <option value="--">Genotype</option>
          <option value="">AA</option>
          <option value="">AS</option>
          <option value="">AS</option>
          <option value="">AC</option>
          <option value="">SC</option>
        </select>
      </div>
      <select
        className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
        name=""
        id=""
      >
        <option value="--">Post surgical procedures</option>
        <option value="">Appendectomy</option>
        <option value="">Cataract Surgery</option>
        <option value="">Coronary Artery Bypass Graft (CABG)</option>
        <option value="">C-Section (Cesarean Delivery)</option>
        <option value="">Gallbladder Removal</option>
      </select>
      <div className="w-full flex gap-4">
        <button onClick={()=>{navigate("/onboarding/3")}} className="w-full py-3 text-grey-50 bg-purple-500 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
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
  )
}

export default Onboard2
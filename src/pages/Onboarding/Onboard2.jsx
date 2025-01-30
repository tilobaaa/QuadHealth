import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Progress from "../../components/Progress";
import useOnboardingStore from "../../store/onBoardingStore";

const Onboard2 = () => {
  const navigate = useNavigate();
  const {  updateOnboardingData } = useOnboardingStore();
  const [selectedOptions, setSelectedOptions] = useState({
    medicalConditions: "",
    allergies: "",
    bloodType: "",
    genotype: "",
    surgicalProcedures: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prevState) => ({ ...prevState, [name]: value }));
    if (value) {
      updateOnboardingData("page2", { [name]: value });
    }
  };

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

      <Progress />

      {/* Form */}
      <form className="w-full max-w-md flex flex-col gap-4">
        {/* Name Fields */}
        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400  rounded-sm px-4 py-3 focus:border-primary-500"
          name="medicalConditions"
          id=""
          value={selectedOptions.medicalConditions}
          onChange={handleChange}
        >
          <option className="" value="--">
            Existing medical conditions
          </option>
          <option value="asthma">Asthma</option>
          <option value="arthritis">
            Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)
          </option>
          <option value="breast_cancer">Breast Cancer</option>
          <option value="heart_failure">Congestibe Heart Failure</option>
          <option value="hiv_aids">HIV/AIDS</option>
          <option value="epilepsy">Epilepsy</option>
          <option value="hepititis">Hepatitis (A, B, C)</option>
          <option value="diabetes">Type 2 Diabetes</option>
          <option value="sickle_cell">Sickle Cell Disease</option>
        </select>

        {/* allergies */}
        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3 focus:border-primary-500"
          name="allergies"
          id=""
          value={selectedOptions.allergies}
          onChange={handleChange}
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
          {/* blood type */}
          <select
            className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
            name="bloodType"
            id=""
            value={selectedOptions.bloodType}
            onChange={handleChange}
          >
            <option value="--">Blood Type</option>
            <option value="A+">A Positive (A+)</option>
            <option value="A-">A Negative (A-)</option>
            <option value="B+">B Positive (B+)</option>
            <option value="B-">B Negative (B-)</option>
            <option value="AB+">AB Positive (AB+)</option>
            <option value="AB-">AB Negative (AB-)</option>
            <option value="O+">O Positive (O+)</option>
            <option value="O-">O Negative (O-)</option>

            <option value=""></option>
          </select>

          {/* genotype */}
          <select
            className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
            name="genotype"
            id=""
            value={selectedOptions.genotype}
            onChange={handleChange}
          >
            <option value="--">Genotype</option>
            <option value="AA">AA</option>
            <option value="AS">AS</option>
            <option value="AC">AC</option>
            <option value="SC">SC</option>
            <option value="SS">SS</option>
          </select>
        </div>

        {/* surgical procedures */}
        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
          name="surgicalProcedures"
          id=""
          value={selectedOptions.surgicalProcedures}
          onChange={handleChange}
        >
          <option value="post_surgical">Post surgical procedures</option>
          <option value="appendectomy">Appendectomy</option>
          <option value="cataract_surgery">Cataract Surgery</option>
          <option value="cabg">Coronary Artery Bypass Graft (CABG)</option>
          <option value="c_section">C-Section (Cesarean Delivery)</option>
          <option value="gallbladder_removal">Gallbladder Removal</option>
        </select>
        <div className="w-full flex gap-4">
          <button
            onClick={() => {
              navigate("/onboarding/3");
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

export default Onboard2;

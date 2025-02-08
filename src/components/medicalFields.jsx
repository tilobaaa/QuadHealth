import { specialityData } from "../../public/assets/assets";

const MedicalFields = () => {
  return (
    <div className="my-6">
      <p className="font-medium mb-4">Top medical fields</p>
      <div className="flex gap-2 flex-wrap">
        {specialityData.map((specialty, index) => {
          return (
            <div
              key={specialty.title}
              className={`flex-1 border border-primary-200 rounded-sm bg-primary-100 flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition-all duration-500
                ${index >= 6 ? "hidden lg:flex" : ""}`}
            >
              <img src={specialty.img} alt={specialty.title} />
              <p className="text-sm">{specialty.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedicalFields;


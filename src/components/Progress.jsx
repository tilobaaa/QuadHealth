import React from "react";
import { useParams } from "react-router-dom";
const Progress = () => {
  const { step } = useParams();
  const totalSteps = 4;
  return (
    <div className="w-full flex items-center justify-center gap-2 mb-6">
      <div></div>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-16 ${
            index < step ? "bg-purple-500" : "bg-grey-300"
          } rounded-lg`}
        ></div>
      ))}
      <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
    </div>
  );
};

export default Progress;

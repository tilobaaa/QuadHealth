import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    firstName: "",
    lastName: "",
    homeAddress: "",
    dateOfBirth: "",
    gender: "",
    existingMedicalConditions: [],
    allergies: [],
    bloodType: "",
    genotype: "",
    postSurgicalProcedures: [],
    insuranceProvider: "",
    insurancePlan: "",
    policyNumber: "",
    emergencyContacts: [],
  });

  const updateUser = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  const addEmergencyContact = (contact) => {
    setUserData((prev) => ({
      ...prev,
      emergencyContacts: [...prev.emergencyContacts, contact],
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser, addEmergencyContact }}>
      {children}
    </UserContext.Provider>
  );
};


import { create } from "zustand";

const useOnboardingStore = create((set) => {
  // Load data from localStorage when the store initializes
  const savedSignupData =  {};
  const savedOnboardingData = JSON.parse(localStorage.getItem("onboardingData")) || {
    page1: {},
    page2: {},
    page3: {},
    page4: {},
  };

  return {
    // Initial state
    signupData: savedSignupData,
    onboardingData: savedOnboardingData,

    // Function to update signup data and save to localStorage
    updateSignupData: (newData) =>
      set((state) => {
        const updatedData = { ...state.signupData, ...newData };
        localStorage.setItem("signupData", JSON.stringify(updatedData));
        return { signupData: updatedData };
      }),

    // Function to update onboarding data per page and save to localStorage
    updateOnboardingData: (page, newData) =>
      set((state) => {
        const updatedOnboardingData = {
          ...state.onboardingData,
          [page]: { ...state.onboardingData[page], ...newData },
        };
        localStorage.setItem("onboardingData", JSON.stringify(updatedOnboardingData));
        return { onboardingData: updatedOnboardingData };
      }),
  };
});

export default useOnboardingStore;

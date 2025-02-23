import { create } from "zustand";

const useOnboardingStore = create((set) => {
  // Load data from localStorage when the store initializes
  const savedSignupData =  {};
  const savedOnboardingData =  {
    page1: {},
    page2: {},
    page3: {},
    page4: {},
  };
  // const savedSearchInput = {};

  return {
    // Initial state
    signupData: savedSignupData,
    // searchData: savedSearchInput,
    onboardingData: savedOnboardingData,

    // Function to update signup data and save to localStorage
    updateSignupData: (newData) =>
      set((state) => {
        const updatedData = { ...state.signupData, ...newData };
        return { signupData: updatedData };
      }),
      // Function to update search input and save to localStorage
      // updateSearchInput: (newData) =>
      //   set((state)=>{
      //     const updatedData = { ...state.searchData, ...newData };
          
      //     return { searchData: updatedData };
      //   }),

    // Function to update onboarding data per page and save to localStorage
    updateOnboardingData: (page, newData) =>
      set((state) => {
        const updatedOnboardingData = {
          ...state.onboardingData,
          [page]: { ...state.onboardingData[page], ...newData },
        };
        return { onboardingData: updatedOnboardingData };
      }),
  };
});

export default useOnboardingStore;

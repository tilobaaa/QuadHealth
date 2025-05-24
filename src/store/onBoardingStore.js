import { create } from "zustand";

const useOnboardingStore = create((set) => {
  const savedSignupData = {};

  return {
    // Initial state
    signupData: savedSignupData,

    // Function to update signup data and save to localStorage
    updateSignupData: (newData) =>
      set((state) => {
        const updatedData = { ...state.signupData, ...newData };
        return { signupData: updatedData };
      }),
    // Function to reset signup data (e.g., on logout)
    resetSignupData: () => set({ signupData: {} }),
  };
});

export default useOnboardingStore;

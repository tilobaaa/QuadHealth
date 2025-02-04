import { create } from 'zustand';

const useOnboardingStore = create((set) => ({
  // Initial state for signup and onboarding data
  signupData: {
    email: '',
    password: '',
    phoneNumber: '',
  },
  onboardingData: {
    page1: {},
    page2: {},
    page3: {},
    page4: {},
  },

  // Actions to update data
  updateSignupData: (newData) =>
    set((state) => ({
      signupData: { ...state.signupData, ...newData },
    })),

  updateOnboardingData: (page, newData) =>
    set((state) => ({
      onboardingData: {
        ...state.onboardingData,
        [page]: { ...state.onboardingData[page], ...newData },
      },
    })),

  // Reset the entire store if needed
  reset: () =>
    set({
      signupData: {
        email: '',
        password: '',
        phone: '',
      },
      onboardingData: {
        page1: {},
        page2: {},
        page3: {},
        page4: {},
      },
    }),
}));

export default useOnboardingStore;
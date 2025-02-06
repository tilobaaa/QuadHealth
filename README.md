live link 
https://quadhealth.netlify.app/


# 🏥 Medical Website

A modern medical web desktop platform designed to connect the various users to healthcare providers around them. Users can create accounts, go through an onboarding process to provide medical details, and explore the homepage where they can see their dashboard and upcoming appointments.

## 🚀 Features

### 🛡️ User Authentication  
- Sign up and log in with email and password, Authenticates users by sending an OTP
  
  

### 📋 Onboarding Process  
- Collects personal details (name, address, date of birth, gender)  
- Gathers medical history (blood type, genotype, allergies, existing conditions, past surgeries)  
- Allows users to input insurance details and emergency contacts  
- Option to **skip** onboarding and complete it later  

### 🔍 Homepage & Search (Non-functional)  
- Clean and user-friendly homepage design  
- Static search bar for future implementation  
- Displays the patient's dashboard with the doctor and the upcoming appointments. And also a to-do list.

### ⚙️ Tech Stack  
- **Frontend:** React, Tailwind CSS, Zustand (for state management)  
- **Authentication & Backend:** Firebase Authentication, Firestore  
- **Other:** React Router, React Hook Form  

## 📁 Project documentation
**Clone the repository**  

 1.   'git clone https://github.com/tilobaaa/QuadHealth'

   cd QuadHealth'

2. Install dependencies
'npm install' or 'yarn install' 

3. Run the development server
'npm run dev'


📌 Usage
Signup/Login: Users must create an account before accessing features.
Onboarding: Users provide health-related information (optional step).
Homepage: Displays dashboard, upcoming appointments, and a to-do list.
Search: Currently non-functional, intended for future implementation.
Profile of Doctors: clicking on edditing the appointment or on the doctors profile picture takes you to see the full profile of the doctor


📌 Future Improvements
Implement backend search functionality
Add health recommendations based on user data
Integrate appointment booking
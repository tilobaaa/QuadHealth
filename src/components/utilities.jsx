export const currentTime = ()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`: minutes}`;
}


export const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
  
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
            
              
              const state = data.address.state || "";
              const country = data.address.country || "";
              const lat = data.lat;
              const lon = data.lon;

  
              resolve({ state, country,lat,lon });
             
              
            } catch (error) {
              console.error("Error fetching location:", error);
              reject(error);
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            reject(error);
          }
        );
      } else {
        reject("Geolocation not supported");
      }
    });
  };
  

  export const getCoordinates = async (city) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
      );
      const data = await response.json();
  
      if (data.length === 0) {
        throw new Error("Location not found");
      }
  
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };
  
  export  const filters = [
    {
      label: "Consultation Fee",
      options: ["Any price", "Under ₦10,000", "₦10,000 to ₦50,000", "₦50,000 to ₦100,000"],
    },
    {
      label: "Time of Day",
      options: ["All", "Early morning (Before 11am)", "Morning (Before 12pm)", "Afternoon (After 12pm)", "Evening (After 4pm)"],
    },
    {
      label: "Specialty",
      options: ["All", "Cardiology", "Dermatology", "Pediatrics", "Orthopedics"],
    },
    {
      label: "Distance",
      options: ["All", "Within 5km (Nearby)", "Within 10km", "Within 50km", "Over 50km"],
    },
    {
      label: "Gender",
      options: ["All", "Female", "Male"],
    },
  ];

 //getting today's date 
const todayDate = new Date();
export const formattedDate = todayDate.getFullYear() + '-' + 
                     String(todayDate.getMonth() + 1).padStart(2, '0') + '-' + 
                     String(todayDate.getDate()).padStart(2, '0');

                    
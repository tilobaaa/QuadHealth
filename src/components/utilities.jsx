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
  
              resolve({ state, country });
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
  
  
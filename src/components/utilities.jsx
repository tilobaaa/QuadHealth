export const currentTime = ()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`: minutes}`;
}
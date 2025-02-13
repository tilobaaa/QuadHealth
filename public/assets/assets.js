import brainImg from "/assets/Brain.svg";
import heartImg from "/assets/Heart-rate.svg";
import ToothImg from "/assets/Tooth.svg";
import eyeImg from "/assets/eye-group.svg";

import bloodBagImg from "/assets/blood-bag.svg";
import boneJointImg from "/assets/joints-bone.svg";
import physioImg from "/assets/physio.svg";
import gynecologyImg from "/assets/gynecology.svg";
import oncologyImg from "/assets/oncology.svg";
import bodyImg from "/assets/body.svg";
import clipBoardImg from "/assets/clipboard-plus.svg";
import phoneCallImg from "/assets/phone-call-01.svg";
import briefcaseImg from "/assets/briefcase-01.svg";
import stethoscopeImg from "/assets/Stethoscope.svg";






export const specialityData = [
  {
    img: brainImg,
    title: "Neurology",
  },
  {
    img: heartImg,
    title: "Cardiology",
  },
  {
    img: ToothImg,
    title: "Dentistry",
  },
  {
    img: eyeImg,
    title: "Ophthalmology",
  },
  {
    img: bodyImg,
    title: "GOPD",
  },
  {
    img: bloodBagImg,
    title: "Haematology",
  },
  {
    img: boneJointImg,
    title: "Orthopaedics",
  },
  {
    img: physioImg,
    title: "Physiotherapy",
  },
  {
    img: gynecologyImg,
    title: "Gynaecology",
  },
  {
    img: oncologyImg,
    title: "Oncology",
  },
];

export const checklistOptions = [
  {
    label: "Provide your medical history",
    img: clipBoardImg,
  },
  {
    label: "Add emergency contact details",
    img: phoneCallImg,
  },
  {
    label: "Set up insurance information",
    img: briefcaseImg,
  },
  {
    label: "Book an appointment",
    img: stethoscopeImg,
  },
];


export const recommendedCheckup = [
  {
    title: 'General Physical Exam',
    img: bodyImg
  },
  {
    title:'Blood Pressure Check',
    img: heartImg
  },{
    title: 'Dental Cleaning & Exam',
    img: ToothImg
  },
  {
    title: 'Eye examination',
    img: eyeImg
  }
]

export const coreTeam = [
  {
    heading:'Find a General Practitioner',
    body:'For your  minor health concerns and routine consultations'
  },
  {
    heading:'Dentist',
    body:'For oral health maintenance.'
  },{
    heading:'Optometrist',
    body:'Regular eye exams and eye care.'
  }
]

export const fullText = `Dr. Khaleemah Nuraini is a highly respected cardiologist with over
  15 years of experience providing comprehensive heart care to
  patients across Nigeria and beyond. She is passionate about
  promoting heart health and believes in treating patients with a
  personalized, compassionate approach. After earning her Doctor of
  Medicine (M.D.) degree from the University of Ibadan, Dr. Nuraini
  specialized in cardiology and became certified by the West African
  College of Physicians. She is an active member of the Nigerian
  Medical Association (NMA) and the European Society of Cardiology
  (ESC). Dr. Nuraini speaks English, Igbo, and French, which allows
  her to connect deeply with diverse patients. Her services include
  routine heart health assessments, advanced cardiovascular disease
  treatments, and hypertension and cholesterol management. Currently
  practicing at Randle General Hospital in Lagos, she is
  well-regarded for her patient-centered care and exceptional
  diagnostic skills. Patients praise her empathetic demeanor and
  meticulous attention to detail, making her a top choice for heart
  care in the region. In her free time, Dr. Nuraini enjoys
  participating in community health awareness programs, reading the
  latest medical research, and spending time with her family.`;

  export const shortText = `Dr. Khaleemah Nuraini is a highly respected cardiologist with over
  15 years of experience providing comprehensive heart care to
  patients across Nigeria and beyond. She is passionate about
  promoting heart health and believes in treating patients with a
  personalized, compassionate approach. After earning her Doctor of
  Medicine (M.D.) degree from the University of Ibadan, Dr. Nuraini
  specialized in cardiology and became certified by the West African
  College of Physicians. She is`;


  const statesInNigeria = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
    "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];
  
  const citiesInLagos = [
    "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry",
    "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe",
    "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"
  ];
  
export const options = [...statesInNigeria, ...citiesInLagos];

export const generalOptions = [...specialityData.map(item=> item.title)]
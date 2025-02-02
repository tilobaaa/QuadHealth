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


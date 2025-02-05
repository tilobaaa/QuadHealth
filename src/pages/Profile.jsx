import React from "react";
import Input from "../components/Input";

const Profile = () => {
  return (
    <div className="flex-grow bg-grey-100 py-10 px-20">
      <div className="grid grid-cols-3">
        {/* left side */}
        <div className="col-span-2 flex flex-col gap-6">
          <div className=" bg-grey-50 p-4 flex gap-1 ">
            <img
              className="w-28 h-28"
              src="/assets/profile-picture.png"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h1>Dr. Khaleemah Nuraini</h1>
              <div className="flex gap-2 items-center">
                <img
                  className="w-4 h-4"
                  src="/assets/briefcase-01.svg"
                  alt=""
                />
                <p className="text-grey-700">General Physician</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-4 h-4"
                  src="/assets/coins-stacked-03.svg"
                  alt=""
                />
                <p className="text-grey-700">Consultation Fee: 10,000 NGN</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-4 h-4"
                  src="/assets/marker-pin-01.svg"
                  alt=""
                />
                <p className="text-grey-700">
                  Randle General Hospital, Surulere. Lagos
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>About</p>
              <p>Insurance</p>
              <p>Reviews</p>
            </div>
            <hr />
          </div>
          <div className="bg-grey-50 p-4">
            <p className="text-grey-700">
              Dr. Khaleemah Nuraini is a highly respected cardiologist with over
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
              latest medical research, and spending time with her family.
            </p>
            <p className="border-bottom border-b-grey-800">See more</p>
          </div>
          <div className="w-full grid grid-cols-2 bg-grey-50">
            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">General Information</h4>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">Specialties-</p>
                <p className="text-grey-700">
                  Family Physician, General Physician, Primary Care Doctor
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">Experience -</p>
                <p className="text-grey-700">+12 years of medical practice</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">Office Hours-</p>
                <p className="text-grey-700">
                  Monday to Saturday, 8:00 AM – 8:00 PM
                </p>
              </div>
            </div>
            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">
                Certifications and Memberships
              </h4>
              <p className="text-grey-700">
                Doctor of Medicine (M.D.) from the University of Ibadan
              </p>
              <p className="text-grey-700">
                Certified by the Nigerian Medical and Dental Council (NMDC)
              </p>
              <p className="text-grey-700">
                Member of the Nigerian Medical Association (NMA)
              </p>
            </div>
            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">Services Provided</h4>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">1.</p>
                <p className="text-grey-700">
                  Routine health check-ups and physical examinations
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">2.</p>
                <p className="text-grey-700">
                  Diagnosis and management of common illnesses
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">3.</p>
                <p className="text-grey-700">Preventive health screenings</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">4.</p>
                <p className="text-grey-700">
                  Lifestyle and wellness consultations
                </p>
              </div>
            </div>

            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">Languages Spoken</h4>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">1.</p>
                <p className="text-grey-700">English</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">2.</p>
                <p className="text-grey-700">Yoruba</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">3.</p>
                <p className="text-grey-700">Hausa</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">4.</p>
                <p className="text-grey-700">French</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-grey-50">
            <p>Office Location</p>
            <div>
              <p>Randle General Hospital, Surulere, Lagos. Nigeria</p>
              <button className="font-medium text-grey-800">
                Get Directions
              </button>
            </div>
            {/* map of location */}
          </div>
          <div className="p-4 bg-grey-50">
            <p>Accepted Insurance Providers</p>
            <p>
              Verify if this doctor accepts your insurance provider and plan
            </p>

            <Input icon="/assets/seearch-md.svg" />
            <p>Top Insurance Providers acepted by this health provider</p>
            <div className="flex flex-wrap gap-1">
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/AXA.svg" alt="" />
                <p>Axa Mansard</p>
              </div>
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/blue-logo.png" alt="" />
                <p>Axa Mansard</p>
              </div>
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/corner-stone.png" alt="" />
                <p>Cornerstone Insurance</p>
              </div>
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/idA30xrnUh_logos.png" alt="" />
                <p>Consolidated Hallmark Insurance</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <img src="/assets/leadway-logo.png" alt="" />
                <p>Axa Mansard</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-grey-50 ">
            <p>Reviews</p>
            <p>
              All reviews are from verified Quad Health patients and can’t be
              altered by the health provider{" "}
            </p>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-4">
                <p className="text-[2.5rem]">4.7</p>
                <img src="/assets/five-star" alt="" />
                <p>(20 Reviews)</p>
              </div>
              <div>{/* people that have rated and the rating summary */}</div>
              <div></div>
            </div>
            <div className="flex flex-col gap-2 my-10">
              <h4>Aishat Dosunmu</h4>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-xs text-grey-600">Feb 04, 2025</p>
                <div className="flex gap-2 ">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                </div>

              </div>
              <p className="text-sm text-grey-600">
                  Dr. Nuraini is the best! She listens carefully and provides
                  personalized care. I feel reassured every time I visit. Thanks
                  to her expertise, my backache is long gone and I can now enjoy
                  better quality of life. I highly recommend her to anyone!
                </p>
            </div>
            <div className="flex flex-col gap-2 my-10">
              <h4>Aishat Dosunmu</h4>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-xs text-grey-600">Feb 04, 2025</p>
                <div className="flex gap-2 ">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                </div>

              </div>
              <p className="text-sm text-grey-600">
                  Dr. Nuraini is the best! She listens carefully and provides
                  personalized care. I feel reassured every time I visit. Thanks
                  to her expertise, my backache is long gone and I can now enjoy
                  better quality of life. I highly recommend her to anyone!
                </p>
            </div>
            <div className="flex flex-col gap-2 my-10">
              <h4>Aishat Dosunmu</h4>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-xs text-grey-600">Feb 04, 2025</p>
                <div className="flex gap-2 ">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                </div>

              </div>
              <p className="text-sm text-grey-600">
                  Dr. Nuraini is the best! She listens carefully and provides
                  personalized care. I feel reassured every time I visit. Thanks
                  to her expertise, my backache is long gone and I can now enjoy
                  better quality of life. I highly recommend her to anyone!
                </p>
            </div>
            
            
          </div>
        </div>

        {/* right side */}
        <div className="col-span-1 bg-grey-50">
            <h4>Book an appointment with Dr. Khaleemah Nuraini</h4>
            <div>
                <img src="/assets/chevron-left.svg" alt="" />
                <p>Saturday, 22 February, 2025</p>
                <img src="/assets/chevron-right.svg" alt="" />
            </div>
            <select name="" id="">
                <option value="">Reason for appointment</option>
            </select>
            {/* phone number */}

        </div>
      </div>
    </div>
  );
};

export default Profile;

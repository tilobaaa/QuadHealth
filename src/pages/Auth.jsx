import React from 'react'

const Auth = () => {
  return (
    <div className='flex-grow flex justify-center w-full bg-gray-100 '>
      <div className='bg-gray-50 m-10 p-10 '>
        <div className='flex gap-2'>
            <img className='w-6 h-6' src="/assets/arrow-narrow-left.svg" alt="" />
            <p className='text-gray-800 text-lg'>Back</p>
        </div>
        <div className='mt-6 '>
            <p className='text-4xl font-medium text-primary-500'>Let’s verify  your identity</p>
            <p className='text-lg text-gray-700 '>We’ve sent a 6-digit code to your (+234) 8944356890 to ensure <br /> your account is secure do not share this code with anyone.</p>
        </div>

      </div>
    </div>
  )
}

export default Auth

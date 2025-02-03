import React from 'react'

const CoreTeam = () => {
  return (
    <div>
      <p className='text-primary-500 text-sm '>General Physician</p>
      <p className='my-2 text-grey-900 text-sm '>Dr. John Doe</p>
      <div className='flex flex-row gap-1'>
        <img src="/assets/marker-pin-01" alt="" />
        <p className='text-sm text-grey-600'>Randle General Hospital, Surulere. Lagos</p>
      </div>
      <div className='flex flex-row gap-2'>
        <button className='flex-1 py-1 text-grey-50 rounded-sm text-sm bg-grey-800 cursor-pointer'>Book</button>
        <button className='flex-1 py-1 text-sm rounded-sm border border-grey-800 cursor-pointer'>Change</button>
      </div>
    </div>
  )
}

export default CoreTeam

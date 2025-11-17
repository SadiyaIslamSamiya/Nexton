import React from 'react'

const CommonHead = ({main_text, sub_text}) => {
  return (
    <>
      <h2 className='font-poppins text-primary font-semibold text-4xl '>{main_text} 
        <span className='text-text'>{sub_text}</span></h2>
    </>
  )
}

export default CommonHead

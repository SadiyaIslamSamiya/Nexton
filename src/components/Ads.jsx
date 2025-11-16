import React from 'react'
import banner from '../assets/banner-container.png'
const Ads = () => {
  return (
    <>
     <section className='hidden lg:block'>
      <div className="container my-[42px]">
            <img src={banner} alt="Ads" />
      </div>
      </section> 
    </>
  )
}

export default Ads

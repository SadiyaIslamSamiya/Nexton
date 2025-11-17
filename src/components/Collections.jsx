import React from 'react'
import CommonHead from './CommonHead'
import { BsArrowRight } from 'react-icons/bs';

const Collections = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section id='collections' className=''>
        <div className="container">
            <CommonHead main_text={"Start exploring."} sub_text={" Good things are waiting for you"}/>

            <div className=" flex justify-between items-center">
                <div className="">
                    <h2 className='font-poppins font-semibold text-2xl text-primary'>For Men's</h2>
                    <p className='font-poppins text-[14px] text-text'>Starting at $24</p>
                </div>
                <hr className="w-1px h-6 bg-border border-0 " />

                <button className='flex items-center gap-2 font-poppins font-medium text-text text-[14px]'>Shop Now <BsArrowRight className='text-base'/></button>
               
                
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Collections

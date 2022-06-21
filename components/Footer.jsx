import React, {useState,useEffect} from 'react'
import Link from 'next/link'





const Footer = () => {
    
  return (
    <div className=' mx-auto w-screen'>
        <div className=' border-b bg-black w-full inline-block border-red-400 py-2 flex flex-row justify-evenly'>
    <div className=' mawingu  md:contents'>
     <Link href='https://www.instagram.com/invites/contact/?i=rd2go0e199co&utm_content=lt9nhwr'>
                    <span className='phone-menu-contents text-white  hover:text-blue-200  font-semibold cursor-pointer flex flex-row justify-start items-center'>
About Us
                    </span>
                </Link>
   
   
</div>
<div className=' mawingu md:contents'>
     <Link href='mailto:sixconsentertainment@gmail.com'>
                    <span className='phone-menu-contents text-white  hover:text-blue-200  font-semibold cursor-pointer flex flex-row justify-start items-center'>
Contact Us
                    </span>
                </Link>
   
   
</div>


<div className=' mawingu  md:contents'>
     <Link href='https://wa.me/254711490759'>
                    <span className='phone-menu-contents text-white  hover:text-blue-200  font-semibold cursor-pointer flex flex-row justify-start items-center'>
Our Developer
                    </span>
                </Link>
   
   
</div>
<div className='hidden md:contents'>
  
                    <span className='phone-menu-contents text-white  hover:text-blue-200  font-semibold  flex flex-row justify-start items-center'>
Copyright  &copy; { new Date().getFullYear()}

                    </span>
              
   
   
</div>

        </div>
    </div>
  )
}


export default Footer


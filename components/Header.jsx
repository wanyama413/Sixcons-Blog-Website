import React, {useState,useEffect} from 'react'
import Link from 'next/link'


import { getCategories } from '../services'

 

const Header = () => {

    //okayasya
      const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories))
  
    
  }, [])
   const [positionFixed, setPositionFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 111) {
        setPositionFixed(true);
      } else {
        setPositionFixed(false);
      }
    });
  }, []);
  const borderBottomStyle = "solid 2px black";
  return (
      <>
      <div
        className="header"
        style={{ position: positionFixed ? "fixed" : "relative" }}
      ></div>
    <div className=' mx-auto w-screen mb-8'>
        <div className=' kazana border-b bg-black w-full inline-block border-red-400 py-2 flex flex-row justify-evenly'>
            <div className='flex flex-row justify-start align-center block'>
                <Link href='/'>
                    <span className='baky cursor-pointer font-bold text-3xl text-blue-300'>
Sixcons
                    </span>
                </Link>
            </div>
  <div className="   phone-menu phone-menu-off space-y-2">
  <span className="block w-8 h-0.5 bg-blue-300"></span>
  <span className="block w-5 h-0.5 bg-blue-300"></span>
  <span className="block w-2 h-0.5 bg-blue-300"></span>
</div>

<div className='salahh wewe phone-menu-canva'>
 <Link href='/'>
                    <span className='phone-menu-contents text-white  hover:text-blue-200 uppercase font-semibold cursor-pointer flex flex-row justify-start items-center'>
Home
                    </span>
                </Link>
      {categories.map((category) =>(
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className=' phone-menu-contents text-white  hover:text-blue-200 uppercase font-semibold cursor-pointer flex flex-row justify-start items-center '>
                {category.name}
            </span>
            
        </Link>
       
    ))}
       </div> 
<div className=' mawingu hidden  md:contents'>
     <Link href='/'>
                    <span className='phone-menu-contents text-white  hover:text-blue-200 uppercase font-semibold cursor-pointer flex flex-row justify-start items-center'>
Home
                    </span>
                </Link>
    {categories.map((category) =>(
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className=' phone-menu-contents text-white  hover:text-blue-200 uppercase font-semibold cursor-pointer flex flex-row justify-start items-center '>
                {category.name}
            </span>
            
        </Link>
       
    ))}
   
</div>

        </div>
    </div>
    </>
  )
}


export default Header


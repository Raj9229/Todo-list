import React from 'react'
import Link from 'next/link'


const Header = () => {
   
  return (
    <>
    
        <div className='bg-green-600 h-16 py-5 '>
            <ul className='gap-4  flex flex-row  justify-around items-center font-bold '>
                <Link href='/Home'>Home</Link>
                <Link href='/Cource'>Cources..</Link>
                <Link href='/About'>About Us..</Link>
                
                <Link href='#'>tour</Link>


            </ul>
        </div>
    </>
  )
}

export default Header
import Link from 'next/link'
import React from 'react'

export default function NavigationBar() {
  return (
<>
<section className='md:hidden'>


<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#1a1a1a]  ">
    <div className="h-full justify-around flex mx-auto font-medium">
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
        <Link href="/">
           <img src="/imgs/icon2.png" className='w-6'alt="" />
            <span className="text-sm text-neutral-400   ">Home</span>
            </Link>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
         <Link href="/aboutUs"></Link>
              <img src="/imgs/icon1.png" className='w-6'alt="" />

            <span className="text-sm text-neutral-400   ">About </span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                         <Link href="/courses">

                    <img src="/imgs/icon3.png" className='w-6 'alt="" />

            <span className="text-sm text-neutral-400   ">Courses</span>
            </Link>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                        <Link href="/servcies">
                      <img src="/imgs/icon4.png" className='w-6'alt="" />

            <span className="text-sm text-neutral-400   ">Services</span></Link>
        </button>
           <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                        <Link href="/contact">
                      <img src="/imgs/icon5.png" className='w-6'alt="" />

            <span className="text-sm text-neutral-400   ">Contact </span>
            </Link>
        </button>
    </div>
</div>

</section>

</>
  )
}

import Link from 'next/link'
import React from 'react'
import Logos from '../_Components/logos/page'
import ClientsCount from '../_Components/clinetsCount/page'


export default function Services() {
  return (
  <>
     <section className="py-20">
        <div className="mx-auto md:px-14 px-7 text-white ">
                <div className="title flex justify-between flex-wrap  my-5 md:my-20 text-white items-start">
        <div className="md:w-1/6 w-full md:mb-0 mb-5 ">
       
        <h2 className='text-4xl font-bold uppercase mb-2'>Services</h2>
         <span className='text-[#FFA300] '>أنت تؤمر واحنا ننفذ</span>
            </div>
        
                 <div className="md:w-[70%] md:mb-0 mb-5 w-full text-neutral-300">
                    <p>With every single one of our clients we bring forth a deep
passion for creative problem solving innovations forward
thinking brands boundaries</p>

            </div>
 


            </div>

            <div className="flex flex-wrap">
                   <div className="md:w-2/6 w-fullh-[30%]">
    <div className="info py-6 md:px-8 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Paid ads</h2>
        <p className='text-neutral-300 text-[15px]'>  running data-driven ad campaigns on platforms like Meta and Google.<br/> Optimized to maximize ROI and reach the right audience.
</p>
    </div>
    </div> 
    <div className="md:w-2/6 w-full">
    <div className="info info py-6 md:px-8 md:border-x md:border-t-0 border-t border-neutral-400  ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Social Media Management</h2>
        <p className='text-neutral-300 text-[15px]'> building brand presence, managing pages, and driving engagement across social platforms.
 Focused on creating consistent, community-driven strategies.
</p>
    </div>
    </div>
   
       <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8 border-t md:border-t-0  border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Branding & design</h2>
        <p className='text-neutral-300 text-[15px]'> crafting visual identities, tone of voice, and creative assets. 
Ensuring a strong, memorable brand presence across channels.

</p>
    </div>
    </div>
          <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8  border-t border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Content marketing</h2>
        <p className='text-neutral-300 text-[15px]'> creating valuable blogs, copies, and storytelling content. Designed to attract, educate, and retain the target audience.
</p>
    </div>
    </div>
          <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8 md:border-x border-t border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Product photography & video production</h2>
        <p className='text-neutral-300 text-[15px]'> chigh-quality visuals and videos that showcase products effectively. Focused on highlighting details and driving conversions.
</p>
    </div>
    </div>
          <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8  border-t border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Motion graphics & creative videos</h2>
        <p className='text-neutral-300 text-[15px]'> engaging animations and creative video concepts. 
Perfect for ads, explainers, and storytelling.

</p>
    </div>
    </div>
            <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8 border-t border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>SEO (Search Engen Optimazzation)</h2>
        <p className='text-neutral-300 text-[15px]'> optimizing websites for visibility and ranking, Includes: keywords research, on-page optimization, and link building.

</p>
    </div>
    </div>
                <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8 md:border border-t md:border-b-0 border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Email Marketing</h2>
        <p className='text-neutral-300 text-[15px]'>  Personalized campaigns, automation flows, and newsletters.
 Driving conversions while nurturing long-term customer relationships.
ptimization, and link building.

</p>
    </div>
    </div>
                    <div className="md:w-2/6 w-full">
    <div className="info py-6 md:px-8   border-t border-neutral-400 ">
        <h2 className='text-2xl uppercase font-semibold mb-3'>Website & landing page design</h2>
        <p className='text-neutral-300 text-[15px]'>  designing user-friendly, responsive, and conversion-focused pages. Aiming to deliver smooth user journeys and higher leads.
</p>
    </div>
    </div>

</div>

    <ClientsCount/>

<Logos/>
<div className="contact text-center mt-10 md:mt-20">
        <h2 className='text-4xl font-bold uppercase mb-2'>Start your project</h2>
         <span className='text-[#ffa300] text-xl '>يلا نشتغل سوا؟</span>
                <div className="md:w-[14%] mx-auto mt-5 w-full text-center rounded-full  border border-neutral-300 py-2">
                    
                    <Link href='https://wa.me/201552599703'>Let's Start</Link>

            </div>
            </div>
</div>
  </section>
  
  
  </>
  )
}

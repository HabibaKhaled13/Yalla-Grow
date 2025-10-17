"use client"

import React from 'react'
import Logos from '../_Components/logos/page'
import ClientsCount from '../_Components/clinetsCount/page'
import Link from 'next/link'

export default function AboutUs() {
  return (
   <>
     <section className="py-20">

    
           <div className="mx-auto md:px-14 px-7 ">

     <div className="title flex justify-between flex-wrap  my-5 md:my-20 text-white items-start">
        <div className="md:w-1/5 w-full md:mb-0 mb-5 ">
       
        <h2 className='text-4xl font-bold uppercase mb-2'>Our story</h2>
         <span className='text-[#FFA300] '>نبذه عن قصه حياتنا</span>
            </div>
        
                 <div className="md:w-[70%] md:mb-0 mb-5 w-full text-neutral-300">
                    <p>Introduction to Yalla Grow: Yalla Grow is a dynamic learning community designed to empower marketers through high-quality courses, practical workshops, and essential tools for content creation.</p>
<p className='mt-4'>Our mission is to create a thriving network where marketers can grow, learn, and share valuable insights. Yalla Grow offers structured programs and tasks to ensure continuous professional development.</p>
          
          <h3 className='mt-9 text-xl text-white uppercase font-semibold'>Platforms and Content Strategy:</h3>
<div className="info-social-facebook">
  <h4 className='text-lg mt-6 text-white  font-semibold'>a. Facebook:</h4>
  <p className='mt-2 text-[15px]'>Page Content: Educational posts, success stories, event announcements, and interactive content like polls and quizzes.</p>
  <p className='mt-2 text-[15px]'>Community Group: A dedicated space for members to participate in daily tasks, discussions, and peer support. The group will host a structured 90-day task program to help members develop their marketing skills.
</p>
</div>
<div className="info-social-instagram">
  <h4 className='text-lg mt-6 text-white  font-semibold'>b. Instagram:</h4>
  <p className='mt-2 text-[15px]'>Visual Content: Engaging infographics, short tips, success stories, and behind-the-scenes content from workshops and events.</p>
  <p className='mt-2 text-[15px]'>Reels & Stories: Quick tutorials, marketing hacks, and highlights from community achievements.

</p>
</div>
<div className="info-social-tiktok">
  <h4 className='text-lg mt-6 text-white  font-semibold'>c. TikTok:
</h4>
  <p className='mt-2 text-[15px]'>Video Content: Short, engaging, and educational videos on marketing trends, quick tips, and creative campaigns. Use humor and trending sounds to increase engagement.
</p>


</div>
<div className="info-social-tiktok">
  <h4 className='text-lg mt-6 text-white  font-semibold'>d. LinkedIn:

</h4>
  <p className='mt-2 text-[15px]'>Professional Content: In-depth articles, thought leadership pieces, case studies, and updates on workshops and events. Focus on professional growth and industry insights.

</p>



</div>

            </div>
 


            </div>
        
    <ClientsCount/>

        <Logos/>
    

        <div className="contact text-center mt-10 md:mt-20 text-white">
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

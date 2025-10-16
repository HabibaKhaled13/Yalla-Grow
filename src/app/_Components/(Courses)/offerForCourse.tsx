import Link from 'next/link';
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";


export default function OfferForCourse() {
  return (
 <>
     <section className=' text-white bg-[#1A2332] py-12'>
    <div className="md:px-14 px-7 overflow-auto ">
        <div className="md:w-[80%] mx-auto   rounded-2xl md:p-10 p-4 mb-8 mt-3 bg-[#404B51]">
<div className="title text-center py-3">
    <h2 className='text-3xl font-bold mb-2'>احصل على الحزمة الكاملة بخصم 80%
</h2>
                          <p className='text-neutral-200 mt-3'>فرصتك للوصول إلى نظام نمو متكامل بخُمس السعر الأصلي فقط

</p>
<div className="sale flex justify-center items-center mt-7">
 <div className="after-sale">
    <span className='text-neutral-300 text-sm'>السعر الأصلي
</span>
    <h3 className='line-through text-neutral-200  text-2xl'>EGP50,000</h3>
  </div>
  <FaArrowRight className='inline text-2xl mx-4' />
 
    <div className="before-sale">
    <span className='text-neutral-300 text-sm'>سعرك اليوم فقط
</span>
    <h3 className='text-4xl'>EGP10,000
</h3>
  </div>
</div>

</div>
<div className="content ">
             <ul className="mt-6 text-[15px]">
                  <li className="mb-1">
                    <FaCircleCheck className="inline ms-2" />
              وصول فوري للمحتوى الكامل
                  </li>
                  <li className="mb-1">
                    <FaCircleCheck className="inline ms-2" />
تحديثات مجانية مدى الحياة
                  </li>
                  <li className="mb-1">
                    <FaCircleCheck className="inline ms-2" />
استثمر بدون مخاطرة – جرب وقرّر بنفسك
                  </li>
                  <li className="mb-1">
                    <FaCircleCheck className="inline ms-2" />
محتوى باللغة العربية

                  </li>
      
                  
                </ul>
</div>
<div className="btn w-[90%] mx-auto">
<Link href="" className=' w-full inline-block py-3 bg-[#F5CE60] text-white text-center text-sm shadow-lg rounded-lg my-6' >
احصل علي الحزمه الآن<FaArrowRight className='inline text-lg me-1' /> </Link>

</div>
<div className="safe-payment text-center">
        <p className='mb-2'><AiOutlineSafety className='inline text-xl' /> الدفع آمن ومشفر بالكامل</p>
    
    <span><IoCardOutline className='inline mx-0.5 text-xl'/>
</span>
    <span><IoCardOutline className='inline mx-0.5 text-xl'/>
</span>
    <span><IoCardOutline className='inline mx-0.5 text-xl'/>
</span>
</div>
                
</div>
        </div>
    </section></>

  )
}

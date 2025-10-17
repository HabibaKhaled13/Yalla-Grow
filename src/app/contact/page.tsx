import React from 'react'
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Contact() {
  return (
    <>
     <section className="py-20">
        <div className="mx-auto md:px-14 px-7 ">
    <div className="title flex justify-between flex-wrap  my-5 md:my-20 text-white items-start">
        <div className="md:w-1/6 w-full md:mb-0 mb-5 ">
       
        <h2 className='text-4xl font-bold uppercase mb-2'>Let’s get in touch</h2>
         <span className='text-[#FFA300] '>لشان ننول الشرف</span>
            </div>
        
                 <div className="md:w-[70%] md:mb-0 mb-5 w-full text-neutral-300">
                    <p>Get in touch with Yalla Grow Marketing for tailored digital marketing solutions. Reach out today to elevate your brand!</p>

            </div>
 


            </div>


  
<div className="flex flex-wrap justify-between md:px-10 md:mt-10 mt-4">
<div className="info md:w-[40%]  w-full ">
<div className="icons-for-contact">
<ul className='text-white'>
  <li><IoLocationSharp className='text-[#FFA300] text-3xl inline'/><span className='ms-2 text-lg'>Location</span>
<p className='text-neutral-300 mb-1 mt-2'>Cairo, Egypt, Nasr City
</p>
<p  className='text-neutral-300 mb-1'>Kuwait, Kuwait
</p>
<p  className='text-neutral-300'>Al-Hamra, Saudi Arabia

</p>
</li>
  <li className='my-6'><IoIosCall className='text-[#FFA300] text-3xl inline'/><span className='ms-2 text-lg'>Phone Number</span>
<p className='text-neutral-300 mb-1 mt-2'>KSA +966 59 040 4941

</p>
<p  className='text-neutral-300 mb-1'>Cairo +200102344 3822

</p>
<p  className='text-neutral-300'>Kuwait +96550267471



</p>
</li>
  <li><IoIosMail className='text-[#FFA300] text-3xl inline'/><span className='ms-2 text-lg'>Location</span>
<p className='text-neutral-300 mb-1 mt-2'><Link href="info@yallagrow.com">info@Yallagrow.com</Link>


</p>
</li>
</ul>
 <div className="social-media mt-8">
<ul className='flex gap-x-2'><li><Link href="https://www.instagram.com/yallagrow.pro/"><FaInstagram className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="https://www.facebook.com/YallaGrow.pro"><FaFacebook 
    className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="#"><FaXTwitter
    className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li>
<li><Link href="https://www.linkedin.com/company/yallagroweg/posts/?feedView=all"><FaLinkedin className='bg-[#FFA300] text-amber-50 text-[45px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#8795AC]' /></Link>
</li></ul>
   </div>
</div>

</div>


    <Card className="md:w-[51%] w-full md:mt-0 mt-5">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>

</div>


    </div>
    </section>

    <section className='pb-16'>
               <div className="mx-auto md:px-14 px-7 ">
                <div className="flex flex-wrap justify-between md:flex-row flex-col-reverse">
                    <div className="md:w-[48%] md:ms-auto  w-full">
<div className="img-frame">
    <img src="/imgs/mobile.jpg" alt="" className='w-full md:w-[75%] ms-auto md:mt-0 mt-3' />
</div>
                    </div>
                      <div className="md:w-[48%] md:mt-20 w-full">
                        <div className="title">
                              <h2 className='text-4xl font-bold uppercase mb-2 text-white'>Keep up with our Exciting
office life!</h2>
         <span className='text-[#FFA300] '>متغيبش عننا على الإنستجرام</span>
                        
          <div className="md:w-[34%] text-white mt-6 md:mb-0 mb-5 w-full text-center rounded-full text-sm border border-neutral-300 py-2">
                    
                    <Link href='https://www.instagram.com/yallagrow.pro/'>Check our Instagram</Link>

            </div>
                        </div>
                    </div>
                </div>
</div>
    </section>
    </>
  )
}

import { navItems } from "@/data"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GradientButton from "./ui/GradientButton"
import { auth } from "@clerk/nextjs/server"

const Header = () => {

    const {userId} = auth();

  return (
    <div className='text-white z-50 top-0'>
        <div className=' flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a className='block w-[12rem] xl:mr-8' href="">
                <Image src="/images/Logo.png" alt="logo" width={100} height={30}/>
            </a>

            <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-black-100 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.url} className={`block relative text-2xl transition-colors hover:text-blue-600 ${item.onlyMobile ? 'lg:hidden' : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}>
                            {item.name}
                        </Link>
                    ))}
                    {!userId ? (
                        <SignedOut>
                        <Link href="/sign-in">
                            <GradientButton
                                otherClasses='w-full sm:w-fit'
                                title='Entrar'
                                position='righ'
                            />
                        </Link>
                    </SignedOut>
                    ): (
                        <SignedIn>
                        <div className="border border-blue-600 rounded-full"><UserButton/></div>  
                    </SignedIn>
                    )}
   
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header
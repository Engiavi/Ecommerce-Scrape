import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons = [
    {src:'/assets/icons/search.svg',alt:'search'},
]

const Navbar = () => {
    const handleclick= ()=>{
        console.log('clicked')
    }
    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href="/" className='flex items-center gap-1'>
                    <Image src="/assets/icons/logo.svg" alt="logo"
                        width={27}
                        height={27}
                    />
                    <p  className='nav-logo'>
                        Shop<span className='text-primary'>Seeker</span>
                    </p>
                </Link>
                <div className='flex items-center gap-5'>
               { navIcons.map((icon)=>(
                <Image
                key={icon.alt}
                src = {icon.src}
                alt = {icon.alt}
                width={28}
                height = {28}
                className='object-contain' 
                />
                ))}
                </div>
            </nav>
        </header> 
    )
}

export default Navbar
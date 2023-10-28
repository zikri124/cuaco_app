import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='w-fit flex items-center z-10'>
                <div className='w-fit'>
                    <Link href="/" className='flex items-center'>
                        <div className='rounded-full bg-orange-400 p-1 me-2'>
                            <Image src={"https://img.icons8.com/stickers/100/sun.png"} height={36} width={36} alt='sun-logo' />
                        </div>
                        <div className='nav-main bg-white rounded-full px-2 py-1'>
                            <h1 className='text-2xl font-bold'>Cuaco</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

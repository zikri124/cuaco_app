import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='absolute top-0 w-fit py-4 px-4 flex items-center'>
                <div className='w-fit'>
                    <Link href="/" className='flex items-center'>
                        <div className='rounded-full bg-orange-400 p-1 me-2'>
                            <Image src={"https://img.icons8.com/stickers/100/sun.png"} height={36} width={36} alt='sun-logo' />
                        </div>
                        <div className='nav-main'>
                            <h1 className='text-2xl font-bold'>Cuaco</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
import Image from "next/image"

export default function LoadingScreen() {    
    return (
        <div className="relative bg-white text-center h-screen w-screen z-20 flex flex-col items-center justify-center">
            <div className='rounded-full bg-orange-400 p-1 w-fit'>
                <Image src={"https://img.icons8.com/stickers/100/sun.png"} height={80} width={80} alt='sun-logo' className="logo" />
            </div>
            <p className="text-2xl font-bold mt-4">Cuaco</p>
        </div>
    )
}
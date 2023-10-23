import Image from "next/image"

export default function SearchCity() {
    
    
    return (
        <div className='flex justify-end'>
            <div className='border border-slate-400 bg-white rounded-full px-4 py-2 flex w-full'>
                <Image src={"https://img.icons8.com/stickers/100/search.png"} height={25} width={25} alt='searchLogo' />
                <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' className='ms-4 w-full text-md' />
            </div>
        </div>
    )
}
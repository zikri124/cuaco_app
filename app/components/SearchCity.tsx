import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FetchSearchCity } from "./FetchData";
import { SearchCityData } from "../interfaces/Location";

export default function SearchCity() {
    // const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false)
    // const [cityQuery, setCityQuery] = useState<SearchCityData[]>()
    // const [keyword, setKeyword] = useState<String>("")

    // function handleSearchCity() {
    //     console.log("length: " + cityQuery?.length!)
    //     if (keyword != "") {
    //         FetchSearchCity(keyword, setCityQuery)
    //         console.log("city: " + cityQuery)
    //     } else {
    //         setCityQuery(undefined)
    //     }
    // }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         handleSearchCity()
    //     }, 500)

    //     return () => clearTimeout(timer)
    // }, [keyword])

    return (
        <div>
            <div className='flex justify-end'>
                <div className='border border-slate-400 bg-white rounded-full px-4 py-2 flex w-full'>
                    <Image src={"https://img.icons8.com/stickers/100/search.png"} height={25} width={25} alt='searchLogo' />
                    {/* <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' onChange={e => setKeyword(e.target.value)} onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='ms-4 w-full text-md' /> */}
                    <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' className='ms-4 w-full text-md' />
                </div>
            </div>

            {/* {isDropdownOpen &&
                <div className="absolute h-fit mt-2 border-2 px-2 rounded-2xl bg-white flex flex-col">
                    {!cityQuery && 
                        <div className="p-4 bg-slate-200 rounded-xl my-2">
                            No result
                        </div>
                    }
                    
                    {cityQuery &&
                        <div>
                            {cityQuery?.map((value, i) => (
                                <div key={i}>
                                    <Link href={"#"}>
                                        <div className="rounded-xl p-4 bg-slate-200 my-2">
                                            <h2>{value.name}</h2>
                                            <p>{`${value.region}, ${value.country}`}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>}
                </div>
            } */}
        </div>
    )
}
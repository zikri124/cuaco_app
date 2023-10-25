import Image from "next/image"
import { useEffect, useState, memo, Dispatch, SetStateAction, useRef } from "react"
import { FetchSearchCity } from "./FetchData";
import { SearchCityData } from "../interfaces/Location";
import WeatherData from "../interfaces/WeatherData";
import SearchDropdown from "./SearchDropdown";

interface Props {
    setIsLoading: Dispatch<SetStateAction<Boolean>>;
    setWeatherData: Dispatch<SetStateAction<WeatherData | undefined>>;
    setLocation: Dispatch<SetStateAction<String>>;
}

export default memo(function SearchCity({ setIsLoading, setWeatherData, setLocation }: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false)
    const [cityQuery, setCityQuery] = useState<SearchCityData[]>()
    const [keyword, setKeyword] = useState<String>("")

    function handleSearchCity() {
        if (keyword != "") {
            FetchSearchCity(keyword, setCityQuery)
        } else {
            setCityQuery(undefined)
        }
    }

    const useOutsideClick = (callback: () => void) => {
        const ref = useRef<HTMLDivElement>(null)

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (isDropdownOpen == true) {
                    if (ref.current && !ref.current.contains(event.target as Node)) {
                        setIsDropdownOpen(false)
                    }
                }
            }

            document.addEventListener('mousedown', handleClickOutside)

            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }, [callback])

        return ref
    }

    const ref = useOutsideClick(() => {
        console.log('Clicked outside of MyComponent');
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearchCity()
        }, 500)

        return () => clearTimeout(timer)
    }, [keyword])

    return (
        <div ref={ref}>
            <div className='flex justify-end'>
                <div className='border border-slate-400 bg-white rounded-full px-4 py-2 flex w-full'>
                    <Image src={"https://img.icons8.com/stickers/100/search.png"} height={25} width={25} alt='searchLogo' />
                    <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' onChange={e => setKeyword(e.target.value)} onClick={() => setIsDropdownOpen(true)} className='ms-4 w-full text-md' />
                </div>
            </div>

            {isDropdownOpen && <SearchDropdown setIsLoading={setIsLoading} setLocation={setLocation} keyword={keyword} cityQuery={cityQuery} /> }
        </div>
    )
})

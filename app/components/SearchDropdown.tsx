import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { SearchCityData, SearchCityDataArray } from "../interfaces/Location";

interface Props {
    setIsLoading: Dispatch<SetStateAction<Boolean>>;
    setLocation: Dispatch<SetStateAction<String>>;
    cityQuery: SearchCityData[] | undefined;
    keyword: String;
}

export default function SearchDropdown({ setIsLoading, setLocation, cityQuery, keyword }: Props) {
    function handleSelectLocation(cityName: String) {
        setIsLoading(true)
        setLocation(cityName)
    }

    return (
        <div className="dropdown absolute left-0 h-fit mt-2 px-4 w-full md:w-[50%] lg:w-[40%] xl:w-[30%] overflow-y-auto">
            <div className="bg-white flex flex-col rounded-2xl border-2 px-2 py-1">
                <button className="rounded-xl p-4 bg-slate-200 my-1 w-full text-left font-semibold" onClick={() => handleSelectLocation("")} >
                    <div className="flex flex-row items-center gap-2">
                        <Image src={"https://img.icons8.com/stickers/100/center-direction.png"} height={32} width={32} alt='center-direction' />
                        <h2 className="font-semibold">Current Location</h2>
                    </div>
                </button>

                <h2 className="font-semibold mt-4 mb-1">Search Result</h2>
                {(keyword == "") &&
                    <div>
                        <div className="p-4 bg-slate-200 rounded-xl my-1 w-full">
                            Search a city name
                        </div>
                    </div>
                }

                {((cityQuery == undefined || cityQuery.length < 1) && keyword != "") &&
                    <div className="p-4 bg-slate-200 rounded-xl my-1 w-full">
                        No result for &quot;{keyword}&quot;
                    </div>
                }

                {cityQuery &&
                    <div>
                        {cityQuery?.map((value, i) => (
                            <div key={i}>
                                <button className="rounded-xl p-4 bg-slate-200 my-1 w-full text-left" onClick={() => handleSelectLocation(value.name)}>
                                    <div>
                                        <h2 className="font-semibold">{value.name}</h2>
                                        <p>{`${value.region}, ${value.country}`}</p>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>}
            </div>
        </div>
    )
}
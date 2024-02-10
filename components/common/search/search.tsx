import { Icon } from '@iconify/react'
import { useSearch } from '@utils/hooks/useSearch';
import Link from 'next/link';
import Image from "next/image";
import tw from 'tailwind-styled-components'
import { LoadingSpinner } from '../loading';

export const SearchContainer = tw.nav`
   flex flex-wrap items-center text-base justify-center md:w-1/3 lg:ml-[-220px]
`

export const SearchBox = () => {
    const { searchWord, searchResult, isLoading, handleSearch } = useSearch();

    return (
        <>
            <div className="flex flex-1 space-x-1.5 hidden sm:block">
                <div className="relative flex w-[300px]">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
                        <Icon icon="iconamoon:search-bold" />
                    </div>
                    <input
                        placeholder="Search"
                        className="block w-full rounded-xl bg-gray-100 dark:bg-gray-800 px-4 py-2.5 pl-11 pr-14 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-4 focus-within:z-20">
                        <button className="bg-gray-300 dark:bg-gray-900 rounded-md px-2 py-1 font-sans text-sm hover:bg-red-500 hover:dark:bg-red-700 hover:text-white transition-colors duration-100 ease-in-out ">
                            ⌘ K
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="relative flex justify-center items-center shadow-md border rounded-xl border-gray-300 dark:border-gray-600 overflow-hidden dark:bg-gray-700">
                <div className="w-96">
                    <div className="input-group relative flex items-center w-full">
                        <div className="text-xl ml-4 lg:ml-0">
                            <Icon icon="iconamoon:search-bold" />
                        </div>
                        <input
                            type="search"
                            className="form-control relative min-w-0 w-full px-3 py-2 text-sm bg-transparent placeholder-gray-500 dark:placeholder-gray-400 dark:text-gray-300 transition ease-in-out m-0 focus:text-gray-700  focus:outline-none"
                            placeholder="Search collection"
                            value={searchWord}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>
            <div className={`fixed mx-auto inset-x-0 top-20 w-2/3 lg:w-3/5 min-h-[72px] transition-all duration-200 ease-in-out bg-white dark:bg-gray-800 rounded-xl py-6 px-4 z-10 shadow-[0_8px_12px_0px_rgba(0,0,0,0.2)] ${searchWord.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {isLoading
                    ? <LoadingSpinner />
                    :
                    <>
                        {searchResult.map(collection =>
                            <Link key={collection.address} href={`/collections/${collection.address}`}>
                                <div className="flex items-center py-3 px-4 hover:bg-gray-200 hover:dark:bg-gray-900 rounded-lg transition-all duration-150">
                                    <div>
                                        <Image
                                            src={collection.logo ? collection.logo : 'https://dummyimage.com/480x480/ccc/000'}
                                            alt="nft image"
                                            width={1000}
                                            height={1000}
                                            className="object-fill w-10 h-10 mx-auto rounded-full border-2 dark:border-white"
                                        />
                                    </div>
                                    <span className="ml-3 text-lg text-gray-800 dark:text-gray-200">{collection.name}</span>
                                </div>
                            </Link>
                        )}
                    </>
                }
            </div> */}
        </>
    )
}

import { Icon } from "@iconify/react"
import { Switches, Housing, Stabilizer, Keycaps } from "@components/filter"

export const Filter = () => {
    return (
        <div className="2xl:container 2xl:mx-auto sm:w-full lg:w-3/4 mx-auto">

            <div className="lg:px-20 md:px-6 py-6 px-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="lg:text-4xl dark:text-white text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
                        옵션 검색
                    </h2>
                    <button className="cursor-pointer dark:bg-white dark:text-gray-800 text-white dark:hover:bg-gray-100 sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center">
                        <Icon icon="mi:filter" className="mr-2 text-xl" />
                        옵션 전체보기
                    </button>
                </div>
                <button className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white dark:text-gray-800 dark:bg-white dark:hover:bg-gray-100 justify-center items-center">
                    <Icon icon="mi:filter" className="mr-2 text-xl" />
                    옵션 전체보기
                </button>
            </div>

            <div id="filterSection" className="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">
                <Switches />
                <hr className="bg-gray-200 w-full md:my-6 my-4" />
                <Housing />
                <hr className="bg-gray-200 w-full md:my-6 my-4" />
                <Stabilizer />
                <hr className="bg-gray-200 w-full md:my-6 my-4" />
                <Keycaps />


                <div className="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                    <button className="hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
                        필터 적용
                    </button>
                </div>


                <div className="block md:hidden w-full mt-10">
                    <button className="w-full hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
                        필터 적용
                    </button>
                </div>
            </div>
        </div>
    )
}
import { Icon } from "@iconify/react"

export const Switches = () => {
    return (
        <>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
                <Icon icon="mdi:plus-box" className="text-2xl" />
                <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium">
                    Switches
                </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <div className="w-4 h-4 rounded-full bg-white shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                        옵션1
                    </p>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">옵션2</p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                    <div className="w-4 h-4 rounded-full bg-red-600 shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">옵션3</p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">옵션4</p>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                    <div className="w-4 h-4 rounded-full bg-black shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">옵션5</p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                    <div className="w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">옵션6</p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <div className="w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                    <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">옵션7</p>
                </div>
            </div>
        </>
    )
}
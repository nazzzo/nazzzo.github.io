import { Icon } from "@iconify/react"

export const Stabilizer = () => {
    return (
        <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
                <Icon icon="fluent:spacebar-20-filled" className="text-2xl" />
                <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                    Stabilizer
                </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div className="flex md:justify-center md:items-center items-center justify-start">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Large" name="Large" value="Large" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" htmlFor="Large">옵션1</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Medium" name="Medium" value="Medium" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">옵션2</label>
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-center md:items-center items-center justify-end">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Small" name="Small" value="Small" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">옵션3</label>
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-center md:items-center items-center justify-start">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Mini" name="Mini" value="Mini" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">옵션4</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
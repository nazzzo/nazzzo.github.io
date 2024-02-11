import { Icon } from "@iconify/react"

export const Housing = () => {
    return (
        <>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
                <Icon icon="mdi:keyboard" className="text-2xl" />
                <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                    Housing
                </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="Leather" value="Leather" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Leather">옵션1</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="Cotton" value="Cotton" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Cotton">옵션2</label>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="Fabric" value="Fabric" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Fabric">옵션3</label>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Crocodile" name="Crocodile" value="Crocodile" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Crocodile">옵션4</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="Wool" name="Wool" value="Wool" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Wool">옵션5</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
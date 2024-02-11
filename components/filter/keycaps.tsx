import { Icon } from "@iconify/react"

export const Keycaps = () => {
    return (
        <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white ">
            <Icon icon="ph:squares-four" className="text-2xl" />
                <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                    Keycaps
                </p>
            </div>
            <div className="flex mt-8 space-x-8">
                <div className="flex justify-center items-center">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="abs" name="abs" value="abs" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600" htmlFor="abs">ABS</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <input className="w-4 h-4 mr-2" type="checkbox" id="pbt" name="pbt" value="pbt" />
                    <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                            <label className="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600" htmlFor="pbt">PBT</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
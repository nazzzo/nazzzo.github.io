import { Button } from "@components/common/button"
import { Animation } from "./animation"
import Link from 'next/link'
import { Icon } from "@iconify/react"

export const Main = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between lg:w-3/4 mx-auto">
            <div className="lg:w-1/2">
                <Animation />
            </div>
        </div>
    )
}
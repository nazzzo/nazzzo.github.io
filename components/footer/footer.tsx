import { Icon } from '@iconify/react'
import { HomeProps } from '@pages/index'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

const Logo = tw.svg`
  w-10 h-10 text-white p-2 bg-red-500 rounded-full mr-4
`

const Footer = ({id}: HomeProps) => {
    return (
        <footer id={id} className="bg-gray-100 dark:bg-gray-800 mt-20">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                    © 2024 - Kim Young Il, Kim Joo Hyung. All rights reserved.
                </p>
                <div className="flex sm:ml-auto sm:mt-0 mt-4">
                    <Link
                        href="https://github.com/nazzzo"
                        className="text-gray-400 flex items-center pl-4 pr-1"
                    >
                        <Icon icon="bi:github" />
                        <span className="text-gray-500 ml-1 text-sm">Github</span>
                    </Link>
                    <Link
                        href=""
                        className="text-gray-400 flex items-center pl-4 pr-1"
                    >
                        <Icon icon="mingcute:mail-fill" className="text-lg" />
                        <span className="text-gray-500 ml-1 text-sm">hecticika@gmail.com</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

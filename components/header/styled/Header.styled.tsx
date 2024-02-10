import { StyledOptions, StyledProps } from '@utils/types/style.interface'
import { Icon } from '@iconify/react'
import tw from 'tailwind-styled-components'

const Logo = tw.div`
  w-10 h-10 text-white p-2 bg-red-500 rounded-full
`

export const TitleContainer = () => {
    return (
        <div className="flex items-center">
            <Icon icon="jam:keyboard-f" className="text-3xl text-red-500" />
            <span className="pl-2 self-center hidden lg:block lg:text-xl font-semibold whitespace-nowrap dark:text-white font-mono">
                INVEN
            </span>
        </div>
    )
}

export const HeaderLink = tw.div`
    font-semibold text-lg lg:text-xl cursor-pointer ml-3 lg:ml-6
`

const backgroundColors: StyledOptions = {
    red: 'bg-red-500',
    orange: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    gray: 'bg-gray-100',
}

const textSizes: StyledOptions = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
}

const textColors: StyledOptions = {
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-900',
}

interface ButtonProps extends StyledProps {
    onClick: () => void
}



export const Button = ({ onClick, backgroundColor, color, fontSize, children }: ButtonProps) => {
    const buttonStyled: string = `inline-flex items-center order-0 py-1.5 px-3 mr-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0 transition duration-300 ease-in-out`

    let bgColor = backgroundColors[backgroundColor ? backgroundColor : 'gray']
    let txtSize = textSizes[fontSize ? fontSize : 'sm']
    let txtColor = textColors[color ? color : 'black']

    return (
        <button onClick={onClick} className={`${bgColor} ${txtSize} ${txtColor} ${buttonStyled}`}>
            {children}
        </button>
    )
}

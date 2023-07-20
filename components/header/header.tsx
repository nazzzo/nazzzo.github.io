import tw from 'tailwind-styled-components'
import Link from 'next/link'
import { DarkModeToggle } from '@components/common/button'
import { useScroll } from '@utils/hooks/useScroll'

const Header = () => {
    const { isScrolling } = useScroll()

    const HeaderLink = tw.div`
        mr-5 hover:text-red-600 dark:hover:text-yellow-400 cursor-pointer
    `

    const handleSmoothScroll = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  

    return (
        <>
            <header className={`text-gray-600 dark:text-gray-300 body-font opacity-90 fixed top-0 left-0 right-0 z-10 ${!isScrolling ? 'bg-transparent' : 'bg-white dark:bg-gray-800'}`}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="#home">
                            <HeaderLink>Home</HeaderLink>
                        </Link>
                        <Link href="#skills">
                            <HeaderLink>Skills</HeaderLink>
                        </Link>
                        <Link href="#portfolio">
                            <HeaderLink>Portfolio</HeaderLink>
                        </Link>
                        <Link href="#contact">
                            <HeaderLink>Contact</HeaderLink>
                        </Link>
                        <DarkModeToggle />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;

import { TitleContainer, Button, HeaderLink } from './styled/Header.styled'
import { Icon } from '@iconify/react'
import { Modal } from '@components/common/modal/Modal'
import { useEffect, useState } from 'react'
import { DropDownBtn } from '@components/header/dropdown/dropdown'
import { LoadingSpinner } from '@components/common/loading'
import Link from 'next/link'
import { SearchContainer, SearchBox } from '@components/common/search/search'
import { useScroll } from '@utils/hooks/useScroll'



const dummyUser = {
    userName : "김주형",
    userImg : "http://127.0.0.1:3000/default-image.png",
}


const Header = () => {
    const { isScrolling } = useScroll()
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <header>
                <div className={`border-gray-200 px-4 lg:px-6 py-2.5 opacity-90 fixed top-0 left-0 right-0 z-10 ${!isScrolling ? 'bg-transparent' : 'bg-white dark:bg-gray-800'}`}>
                    <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
                        <div className="flex items-center">
                            <Link href="/">
                                <TitleContainer />
                            </Link>
                            <Link href="/db">
                                <HeaderLink>Keyboard DB</HeaderLink>
                            </Link>
                        </div>
                        <SearchContainer>
                            <SearchBox />
                        </SearchContainer>
                        <div className="flex items-center">
                            {!isLogin && (
                                <Button
                                    color="white"
                                    backgroundColor="yellow"
                                    fontSize="md"
                                    onClick={() => {
                                        // setIsOpenModal(true)
                                    }}
                                >
                                    <Icon icon="mingcute:kakao-talk-fill" className="text-xl mr-1" />
                                    Login
                                </Button>
                            )}
                            {isLogin &&
                                (isLoading ? <LoadingSpinner /> : <DropDownBtn user={dummyUser} />)}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header

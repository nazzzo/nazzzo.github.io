import { Button } from "@components/common/button"
import { Animation } from "./animation"
import Link from 'next/link'
import { Icon } from "@iconify/react"
import { HomeProps } from "@pages/index"

export const Main = ({ id }: HomeProps) => {
    return (
        <div id={id} className="flex flex-col md:flex-row items-center justify-between lg:w-3/4 mx-auto">
            <div className="lg:flex-grow md:w-1/2 lg:ml-20 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
                    <p className="text-4xl block mb-2">안녕하세요</p>
                    신입 블록체인 개발자 김주형입니다
                </h1>
                <p className="lg:mb-6 leading-relaxed">
                    web3 기술, 그리고 프론트엔드와 백엔드를 포함한 <br></br>웹 개발 분야 전반에 관심이 많습니다
                    <br></br>최근에는 NFT 마켓 플레이스를 제작 및 서비스 중입니다
                </p>
                <Button color="red" size="w-44">
                    <Link href="https://roof-top.shop/">
                        <div className="flex items-center justify-center">
                            <Icon icon="ic:baseline-log-in" className="text-lg mr-2" />
                            프로젝트 보러가기
                        </div>
                    </Link>
                </Button>
            </div>
            <div className="lg:w-1/2">
                <Animation />
            </div>
        </div>
    )
}
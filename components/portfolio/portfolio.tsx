import { HomeProps } from "@pages/index";
import { ProjectItem } from "./project-item";


const projects = [
    {
        id: 1,
        title: '루프탑(ROOFTOP)',
        description: '생성형 AI를 접목한 NFT 마켓 플레이스',
        images: ['rooftop-0.gif', 'rooftop-1.gif', 'rooftop-2.gif', 'rooftop-3.gif', 'rooftop-4.gif'],
        period: '2023/06 - 2023/07',
        github: 'https://github.com/nazzzo/rooftop-front',
        hompage: 'https://roof-top.shop/',
        skills: ['NextJS', 'NestJS', 'Solidity', 'TypeScript', 'ReactQuery', 'Tailwind', 'MongoDB'],
    },
    {
        id: 2,
        title: '코인 월렛',
        description: '크롬에서 사용가능한 블록체인 지갑 확장 프로그램',
        images: ['wallet-1.png', 'wallet-2.png', 'wallet-3.png'],
        period: '2023/05 - 2023/05',
        github: 'https://github.com/nazzzo/walletTest',
        hompage: '-',
        skills: ['NextJS', 'Solidity', 'TypeScript', 'NodeJS', 'Redux', 'Tailwind'],
    },
    {
        id: 3,
        title: '망고 마켓',
        description: '동네 인증을 필요로 하는 지역기반형 물물교환 플랫폼',
        images: ['mango-2.gif', 'mango-3.gif', 'mango-1.gif', 'mango-4.gif','mango-5.gif'],
        period: '2023/03 - 2023/03',
        github: 'https://github.com/nazzzo/mangomarket',
        hompage: 'https://mgmarket.store',
        skills: ['React', 'NodeJS', 'Redux', 'MySQL', 'styled-components'],
    },
    {
        id: 4,
        title: 'IPK Blog',
        description: '소셜 로그인 기능과 마크다운 문법의 텍스트 작성을 지원하는 블로그 서비스',
        images: ['ipk-0.gif', 'ipk-1.gif', 'ipk-2.gif', 'ipk-3.gif'],
        period: '2023/01 - 2023/02',
        github: 'https://github.com/nazzzo/ipk_board',
        hompage: 'https://mgmarket.store',
        skills: ['JavaScript', 'NodeJS', 'MySQL'],
    },
]

export const Portfolio = ({ id }: HomeProps) => {
    return (
        <div id={id} className="lg:w-4/5 mx-auto my-20">
            <div className="flex flex-col items-center justify-center min-h-screen px-3">
                <div className="text-gray-800 dark:text-gray-200 text-center">
                    <h1 className="title-font mb-4 text-4xl font-bold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl hover:text-red-500 dark:hover:text-yellow-500 transition-all duration-300 cursor-pointer">Projects</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-44 md:w-56 lg:w-66 h-1 rounded-full bg-purple-500 dark:bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap mt-6 justify-between">
                    {projects.map((project) => (
                        <ProjectItem key={project.id} data={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
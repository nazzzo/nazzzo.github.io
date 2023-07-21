import { Icon } from "@iconify/react"
import { HomeProps } from "@pages/index"

interface Skill {
    name: string;
    img: string;
    content: string;
}

interface SkillCategory {
    id: number;
    title: string;
    skills: Skill[];
    etc: string[];
}

interface SkillCardProps {
    color: string
    data: SkillCategory
}

export const mySkills = [
    {
        id: 1,
        title: "Front-end",
        skills: [
            {
                name: "NextJS",
                img: "https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png",
                content: "SSR에 대한 기본 지식이 있고, 동적 라우팅 설계를 할 수 있습니다. 다수의 리액트 프로젝트 경험이 있습니다"
            },
            {
                name: "TypeScript",
                img: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png",
                content: "타입스크립트 사용을 선호합니다. 3회 이상의 프로젝트에서 타입스크립트를 사용한 경험이 있습니다"
            },
            {
                name: "TailWind",
                img: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
                content: "반응형 페이지와 다크모드를 구현할 수 있습니다"
            },
        ],
        etc: ["React", "Redux", "React-Query", "styled-component"]
    },
    {
        id: 2,
        title: "Back-end & Deploy",
        skills: [
            {
                name: "NestJS",
                img: "https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png",
                content: "Swagger Doc 작성, 각종 데코레이션 사용과 DTO를 통한 유효성 검사를 할 수 있습니다"
            },
            {
                name: "MySQL",
                img: "https://seeklogo.com/images/M/mysql-logo-B047FB7790-seeklogo.com.png",
                content: "ORM보다 SQL 작성을 선호합니다. 어느정도 SQL 명령어를 커스터마이징할 수 있습니다"
            },
            {
                name: "MongoDB",
                img: "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
                content: "NoSQL의 사용법을 파악하고 있습니다. Mongoose로 스키마 정의를 할 수 있습니다"
            },
        ],
        etc: ["NodeJS", "Express", "Postman", "Amplify", "Heroku"],
    },
    {
        id: 3,
        title: "Blockchain",
        skills: [
            {
                name: "Solidity",
                img: "https://seeklogo.com/images/S/solidity-logo-D29CC3EB00-seeklogo.com.png",
                content: "ERC-721 기반의 마켓 플레이스 컨트랙트를 혼자서 작성해본 경험이 있습니다"
            },
            {
                name: "Truffle",
                img: "https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png",
                content: "사용법과 배포를 포함한 기본적인 명령어를 숙지하고 있습니다"
            },
            {
                name: "Remix IDE",
                img: "https://moonbeam.network/wp-content/uploads/2021/10/remix-500.png",
                content: "리믹스를 활용한 컨트랙트 코드 디버깅을 선호합히다"
            },
        ],
        etc: ["Web3", "Ethers", "Ganache", "wagmi"],
    },
]


const SkillCard = ({ color, data }: SkillCardProps) => {
    return (
        <div className={`${color} dark:bg-gray-900 rounded-xl hover:transform hover:scale-105 transition duration-300`}>
            <div className="flex flex-col p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl translate-x-4 translate-y-4 w-[360px] lg:w-[320px]">
                <div className="flex items-center justify-center">
                    <h2 className="ml-2 text-xl title-font font-medium mb-3">{data.title}</h2>
                </div>
                <div className="flex flex-wrap justify-between items-center my-6">
                    {data.skills.map((skill, index) => (
                        <div className="group" key={index}>
                            <div key={index} className="w-20 h-20 bg-gray-100 dark:bg-gray-500 hover:bg-gray-300 hover:dark:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                                <img src={skill.img} alt={skill.name} className="w-12 h-12" />
                            </div>
                            <div className="group-hover:opacity-100 transition-all duration-300 opacity-0 absolute z-10  top-[60%] left-[5%] inline-block h-[120px] pr-6 lg:py-6 text-lg text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg tooltip">
                                <span>{skill.content}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="pt-4">기타</p>
                <div className="flex w-full flex-wrap items-center mt-2 h-[60px]">
                    {data.etc.map((skill, index) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md text-white bg-green-600 dark:bg-sky-700 w-30 mb-2" key={index}>{skill}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Skills = ({ id }: HomeProps) => {
    return (
        <div className="py-24">
            <div className="text-gray-800 dark:text-gray-200 text-center">
                <h1 id={id} className="title-font mb-4 text-4xl font-bold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl hover:text-red-500 dark:hover:text-yellow-500 transition-all duration-300 cursor-pointer">My Skills</h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-44 md:w-52 lg:w-60 h-1 rounded-full bg-red-500 dark:bg-cyan-700 inline-flex"></div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row space-x-0 md:space-x-8 space-y-12  lg:space-y-0 justify-center items-center mt-10">
                <SkillCard color="bg-[#FFFBEC]" data={mySkills[0]} />
                <SkillCard color="bg-[#F9ECFF]" data={mySkills[1]} />
                <SkillCard color="bg-[#ECEEFF]" data={mySkills[2]} />
            </div>
        </div>

    )
}






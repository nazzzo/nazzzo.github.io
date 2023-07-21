import { Slide } from "@components/common/slide/slide";
import Image from "next/image";

export interface ProjectItemProps {
    data: {
        id: number
        title: string
        hompage: string
        description: string
        github: string
        images: string[]
        period: string
        skills: string[]
    }
}

export const ProjectItem = ({ data }: ProjectItemProps) => {
    const { id, title, hompage, images, github, period, description, skills } = data;

    return (
        <div className="project-card w-[360px] xl:w-[440px] 2xl:w-[560px] mt-10 dark:bg-gray-600 overflow-hidden rounded-xl shadow shadow-xl">
            <div className="h-[300px] w-full bg-gray-600 dark:bg-gray-800 mx-auto">
                <Slide images={images} />
            </div>

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-md">{description}</h3>
                <div className="flex items-center py-4 text-white">
                    <div className="bg-red-400 hover:bg-orange-700 dark:bg-gray-800 dark:hover:bg-gray-500 w-[130px] p-2 flex items-center justify-center rounded-lg transition-all duration-150"><a href={github}>깃허브 바로가기</a></div>
                    <div className="bg-red-400 hover:bg-orange-700 dark:bg-gray-800 dark:hover:bg-gray-500 w-[140px] p-2 ml-4 flex items-center justify-center rounded-lg transition-all duration-150"><a href={hompage}>홈페이지 바로가기</a></div>
                </div>
                <p className="my-1 ">
                    작업기간 : {period}
                </p>
                <div className="flex w-full flex-wrap items-start mt-2">
                    {skills.map((skill, index) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md text-white bg-gray-500 dark:bg-sky-700 w-30 mb-2" key={index}>{skill}</h1>
                    ))}
                </div>

            </div>
        </div>
    );
}
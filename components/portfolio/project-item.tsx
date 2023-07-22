import { Slide } from "@components/common/slide/slide";
import Image from "next/image";
import { useState } from "react";

export interface ProjectItemProps {
    data: {
        id: number
        title: string
        homepage: string
        description: string
        github: string
        images: string[]
        period: string
        skills: string[]
        details: string
    }
}

export const ProjectItem = ({ data }: ProjectItemProps) => {
    const { id, title, homepage, images, github, period, description, skills, details } = data;
    const [showDetails, setShowDetails] = useState(false);


    return (
        <div className="project-card relative w-[360px] xl:w-[440px] 2xl:w-[560px] mt-10 dark:bg-gray-600 overflow-hidden rounded-xl shadow shadow-xl">
            <div className="h-[300px] w-full bg-gray-600 dark:bg-gray-800 mx-auto">
                <Slide images={images} />
                <button
                    className="py-1 px-3 bg-blue-500 dark:bg-red-500 hover:bg-blue-700 hover:bg-red-700 text-white font-bold rounded-md absolute top-[15px] right-[15px] cursor-pointer transition-all duration-200"
                    onClick={() => setShowDetails(!showDetails)} // Toggle the showDetails state on button click
                >
                    상세설명 보기
                </button>

            </div>

            {showDetails ? (
                <div>
                    <pre style={{ whiteSpace: 'pre-wrap' }} className="p-6 h-[380px] overflow-scroll">
                        {details}
                    </pre>
                </div>
            ) : (
                <div className="p-4 flex flex-col">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <h3 className="mt-4 text-md">{description}</h3>
                    <div className="flex items-center py-4 text-white">
                        <div className="bg-red-400 hover:bg-orange-700 dark:bg-gray-800 dark:hover:bg-gray-500 px-4 py-2 flex items-center justify-center rounded-lg transition-all duration-150">
                            <a href={github}>깃허브 바로가기</a>
                        </div>
                        <div className={`px-4 py-2 ml-4 flex items-center justify-center rounded-lg transition-all duration-150 ${homepage ? 'bg-red-400 hover:bg-orange-700 dark:bg-gray-800 dark:hover:bg-gray-500 ' : ''}`}>
                            {homepage && <a href={homepage}>홈페이지 바로가기</a>}
                        </div>
                    </div>
                    <p className="my-1">작업기간 : {period}</p>
                    <div className="flex w-full flex-wrap items-start mt-2">
                        {skills.map((skill, index) => (
                            <h1 className="px-2 py-1 mr-2 rounded-md text-white bg-gray-500 dark:bg-sky-700 w-30 mb-2" key={index}>
                                {skill}
                            </h1>
                        ))}
                    </div>
                </div>)}
        </div>
    );
}
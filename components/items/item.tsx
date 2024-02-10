import { Icon } from "@iconify/react"
import { HomeProps } from "@pages/index"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@components/common/button/button";
import Link from "next/link";
import { Slide } from "@components/common/slide/slide";


export interface ItemData {
    id: number;
    name: string;
    images: string[];
    manufacturer?: string;
    description?: string;
    origin?: string;
    switch?: string;
    keycap?: string;
    keycapColor?: string;
    keycapPrint?: string;
    housing?: string;
    features: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

const dummyItem = (): ItemData => {
    return {
        id: 1,
        images: [
            "https://tbnws.hgodo.com/wordpress/keychorn/products/k3_pro/products_thumb_k3pro_1.jpg",
            "https://tbnws.hgodo.com/wordpress/keychorn/products/k3_pro/products_thumb_k3pro_4.jpg",
            "https://tbnws.hgodo.com/wordpress/keychorn/event/231106/k3pro_iso/products_thumb_k3pro_iso_1.png"
        ],
        name: 'Keychrone K3 PRO',
        manufacturer: 'keychrone',
        description: '75% QMK/VIA 로우프로파일 무선 기계식 키보드',
        origin: 'Germany',
        switch: '체리 적축',
        keycap: 'PBT',
        housing: '블랙',
        features: ['75% 사이즈', '슬림 키보드', '핫스왑', '무선'],
        createdAt: new Date(),
        updatedAt: new Date(),
    };
};



export const Item = () => {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) return <div>loading...</div>
    return (
        <>
            <div className="container mx-auto px-8 xl:px-32">
                <div className="lg:col-gap-12 xl:col-gap-16 mt-4 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-3 lg:row-end-1">
                        <div className="lg:flex lg:items-start">
                            <div className="lg:w-[576px]  overflow-hidden relative">
                                <Slide images={dummyItem().images} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:row-span-1 lg:row-end-1">
                        <div className="flex items-center justify-center">
                            <h1 className="sm: text-3xl whitespace-nowrap overflow-hidden text-ellipsis  font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
                                {dummyItem().name}
                            </h1>
                            <p className="sm: text-xl font-bold text-gray-500 dark:text-gray-400 sm:text-xl pl-3">
                                #{dummyItem().id}
                            </p>
                        </div>
                        <div className="mt-5 flex flex-col items-center justify-between space-y-4 border-t border-b border-gray-200 dark:border-gray-400 py-4 sm:flex-row sm:space-y-0">
                            {dummyItem().description}
                        </div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center text-left px-3">
                                <h1 className="text-lg font-bold w-32">제조사</h1>
                                <span className="text-md font-medium text-gray-600 dark:text-gray-400">{dummyItem().manufacturer}</span>
                            </li>
                            <li className="flex items-center text-left px-3">
                                <h1 className="text-lg font-bold w-32">스위치 타입</h1>
                                <span className="text-md font-medium text-gray-600 dark:text-gray-400">{dummyItem().switch}</span>
                            </li>
                            <li className="flex items-center text-left px-3">
                                <h1 className="text-lg font-bold w-32">키캡</h1>
                                <span className="text-md font-medium text-gray-600 dark:text-gray-400">{dummyItem().keycap}</span>
                            </li>
                            <li className="flex items-center text-left px-3">
                                <h1 className="text-lg font-bold w-32">하우징</h1>
                                <span className="text-md font-medium text-gray-600 dark:text-gray-400">{dummyItem().housing}</span>
                            </li>
                            <li className="flex items-start text-left px-3 pt-5">
                                <h1 className="text-lg font-bold w-32">주요 특징</h1>
                                <div className="flex flex-wrap">
                                    {dummyItem().features.map((feature, index) => (
                                        <span key={index} className="border border-dashed border-gray-400 rounded-full py-2 px-3 mr-2 mb-2 cursor-pointer hover:border-green-400">{feature}</span>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};


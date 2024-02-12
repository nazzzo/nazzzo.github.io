import { ItemData } from ".";


const dummyItem: ItemData = {
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


const ItemCard = () => {
    return (
        <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4">
            <div className="w-1/3 lg:w-1/4 bg-cover">
                <img src={dummyItem.images[1]} className="h-[200px]" />
            </div>
            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{dummyItem.name}</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{dummyItem.description}</p>
                <div className="flex justify-between mt-3 item-center">
                    <div className="flex flex-wrap">
                        {dummyItem.features.map((feature, index) => (
                            <span key={index} className="border border-dashed border-gray-400 rounded-full py-1 px-3 mr-2 mb-2 cursor-pointer hover:border-green-400">{feature}</span>
                        ))}
                    </div>
                    <button className="px-2 py-1 text-sm font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                        상세 정보
                    </button>
                </div>
            </div>
        </div>
    )
}


export const ItemList = () => {
    return (
        <div className="2xl:container 2xl:mx-auto sm:w-full lg:w-3/4 mx-auto mt-10">
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
}
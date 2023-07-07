import tw from "tailwind-styled-components";
import { LoadingSpinner2 } from "@components/common/loading/loading2";
import { AirdropData, CollectionData } from "@utils/types/nft.interface";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";


export const SlideWrap = tw.div`
  mx-auto mb-20 w-5/6  md:w-3/4 h-450 lg:h-450 rounded-lg dark:bg-gray-900 bg-gary-100 dark:shadow-2xl dark:shadow-cyan-500/50
`;

export const SlideBox = tw.div`
  w-10/12 h-450 mx-auto items-center flex flex-col lg:flex-row
`;


const SlideItem = ({ collection }: { collection: CollectionData }) => {


//   if (isLoading) return <LoadingSpinner2 />
  return (

    <div className="container mx-auto">
      <SlideBox>
        <Link href={`/collections/${collection.address}`}>
          <div className="object-fill overflow-hidden w-80 h-80 lg:border-4 rounded-md border-white dark:border-gray-600 mt-8 lg:mt-0 lg:ml-10">
            <Image
              src={collection ? collection.logo : 'https://dummyimage.com/480x480/ccc/000'}
              alt="test"
              width={1000}
              height={1000}
            />
          </div>
        </Link>
        <div className="w-full lg:h-80 lg:ml-20 mt-4 lg:mt-11">
          <div className="flex flex-wrap">
            {/* <div className="w-full mb-2 lg:mb-10 flex justify-center lg:justify-start">
              <span className="text-2xl lg:text-4xl font-bold">{metaData.name} #{token.id}</span>
            </div> */}
            {/* <div className="hidden lg:block w-full mb-2">
              <span className="text-2xl">Current Price</span>
            </div> */}
            <div className="w-full mb-4 lg:mb-10 flex items-center justify-center lg:justify-start">
              {/* <span className="text-lg lg:text-3xl mr-4 font-semibold flex items-center"><Icon icon="cryptocurrency-color:matic" className="mr-2" /> {token.price / 10 ** 18}</span>
              <span className="text-sm lg:text-lg text-green-600 dark:text-green-400">{convertKRW(token.price)}￦</span> */}
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <div className="w-4/6 h-16 font-bold bg-red-500 lg:mr-10 rounded-lg cursor-pointer flex items-center hover:bg-gray-500 transition-all duration-150">
                <div className="w-full text-center text-xl text-white">
                  <Link href={`/collections/${collection.address}`}>
                    Buy now
                  </Link>
                </div>
                <div className="w-24 h-full border-l-2 flex justify-center items-center">
                  {/* <Icon icon="mdi:cart-outline" className="text-3xl text-white" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideBox>
    </div>
  );
};

export const AirdropUpcoming = () => {
    const settings = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };
  
    return (
      <>
        {/* <div className="justify-self-center text-3xl lg:text-4xl font-bold mb-10 text-gray-800 dark:text-gray-100">
          <h2>Today&apos;s Collection</h2>
        </div>
        <SlideWrap>
          <Slider {...settings}>
            {collectionData && collectionData.map((collection) => (
              <SlideItem key={collection._id} collection={collection} />
            ))}
          </Slider>
        </SlideWrap> */}
      </>
    );
  };
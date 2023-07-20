import tw from "tailwind-styled-components";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlideWrap = tw.div`
    
`;


const SlideItem = ({ image }: { image: string }) => {
    return (
        <Image src={image} alt="slide image" width={1000} height={450} className="h-full rounded-t-xl object-contain" />
    );
};

export const Slide = ({ images }: { images: string[] }) => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <>
            <SlideWrap>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div className="h-[300px] overflow-hidden">
                            <SlideItem key={index} image={image} />
                        </div>
                    ))}
                </Slider>
            </SlideWrap>
        </>
    );
};

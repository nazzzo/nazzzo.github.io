import tw from "tailwind-styled-components";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextConfig from "../../../next.config";



const SlideItem = ({ image }: { image: string }) => {
    return (
        <Image src={image} alt="slide image" width={1000} height={450} className="h-full rounded-xl object-contain" />
    );
};

export const Slide = ({ images }: { images: string[] }) => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden">
                            <SlideItem image={image} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
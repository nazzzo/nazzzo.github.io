import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slide = ({ images }: { images: string[] }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className="relative">
            <div className="h-3/4 overflow-hidden">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <ImageSlide image={image} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex justify-center items-center h-1/4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-[60px] mx-1.5 mt-2 cursor-pointer ${currentSlide === index ? "opacity-100 rounded-md" : "opacity-50"
                            }`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={image} alt={`thumbnail-${index}`} className="w-full h-full object-fill rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const ImageSlide = ({ image }: { image: string }) => {
    return <img src={image} alt="No Image" className="w-full h-full object-cover" />;
};

// carousel.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ProductCarousel = ({ data }: {
    data: {
        images: string[];
        name: string;
        description: string;
        fuel: string[];
    };
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0);
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
    const carouselRef = useRef(null);

    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement;
        let { width, height } = elem.getBoundingClientRect();
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            });
        }
    }, []);

    return (

        <div className="relative w-90 h-60 rounded-md overflow-hidden">
            {/* Image container */}
            <div
                ref={carouselRef}
                style={{
                    left: -currentImg * carouselSize.width,
                }}
                className="w-full h-full absolute flex transition-all duration-300"
            >
                {/* Map through data to render images */}
                {data.images.map((v, i) => (
                    <div
                        key={i}
                        className="relative shrink-0 w-80 h-full"
                    >
                        <Image
                            className="pointer-events-none"
                            alt={`carousel-image-${i}`}
                            fill
                            src={v || "https://random.imagecdn.app/500/500"}



                        />
                    </div>

                ))}
            </div>

            {/* Navigation buttons */}
            <div className=" absolute flex justify-between w-full top-[40%]">
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg((prev) => prev - 1)}
                    className={`border px-4 py-2 mx-2 font-bold text-black bg-white/50 rounded-full ${currentImg === 0 && "opacity-50"
                        }`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg === data.images.length - 1}
                    onClick={() => setCurrentImg((prev) => prev + 1)}
                    className={`border px-4 py-2 mx-2 font-bold text-black bg-white/50 rounded-full ${currentImg === data.images.length - 1 && "opacity-50"
                        }`}
                >
                    {">"}
                </button>
            </div>
        </div>

    );
};

export default ProductCarousel;

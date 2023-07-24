import React, { useState } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
                {/* First Row of Images */}
                <div className="flex w-1/2 flex-wrap">

                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                            onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp")} />
                    </div>

                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                            onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp")} />
                    </div>


                    <div className="w-full p-1 md:p-2">
                        <img
                             alt="gallery"
                             className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                             onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp")} />
                    </div>

                </div>
                {/* Second Row of Images */}
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-inr"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp")}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                            onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp")}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                            onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp")}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                            onClick={() => handleImageClick("https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp")}
                        />
                    </div>
                </div>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="max-w-3xl mx-auto p-4">
                        <img
                            alt="selected"
                            className="block max-h-full max-w-full rounded-lg object-contain"
                            src={selectedImage}
                        />
                        <button
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
                            onClick={() => setSelectedImage(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
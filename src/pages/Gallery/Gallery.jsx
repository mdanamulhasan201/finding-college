import React, { useState } from 'react';
import { FiDelete } from "react-icons/fi";
import './Gallery.css'
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };
    return (
        <>
            <div className='bg-[#005d9fdf] '>
                <h3 className="font-bold text-center text-3xl p-2 college-heading text-white">Graduation Gallery </h3>
            </div>


            <div className="container mx-auto px-5  lg:px-32 lg:pt-24">
                <div className="-m-1 flex  flex-wrap md:-m-2">
                    {/* First Row of Images */}
                    <div className="flex w-1/2 flex-wrap">

                        <div className="w-1/2 p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[450px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://amath.washington.edu/sites/amath/files/images/graduation_2022c.jpg"
                                    onClick={() => handleImageClick("https://amath.washington.edu/sites/amath/files/images/graduation_2022c.jpg")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>XYZ University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[450px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://i.guim.co.uk/img/media/c01858d54e7a155e68ab7dfb1be5f0ae1368b0d9/0_199_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=28dcf430f52498e8f800fef57686e62d"
                                    onClick={() => handleImageClick("https://i.guim.co.uk/img/media/c01858d54e7a155e68ab7dfb1be5f0ae1368b0d9/0_199_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=28dcf430f52498e8f800fef57686e62d")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>LMN College</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[450px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://live.staticflickr.com/609/31523260632_d7247169fc_b.jpg"
                                    onClick={() => handleImageClick("https://live.staticflickr.com/609/31523260632_d7247169fc_b.jpg")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>EFG University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Second Row of Images */}
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[450px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://cds.chinadaily.com.cn/dams/capital/image/202107/05/60e27d4ee4b0f33f1514d59b.jpg"
                                    onClick={() => handleImageClick("https://cds.chinadaily.com.cn/dams/capital/image/202107/05/60e27d4ee4b0f33f1514d59b.jpg")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>PQR University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[220px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://bloximages.chicago2.vip.townnews.com/starlocalmedia.com/content/tncms/assets/v3/editorial/1/60/16002b06-e116-11ec-bf09-4f3fd9d49b81/6296770495376.preview.jpg?crop=1765%2C927%2C0%2C123&resize=1200%2C630&order=crop%2Cresize"
                                    onClick={() => handleImageClick("https://bloximages.chicago2.vip.townnews.com/starlocalmedia.com/content/tncms/assets/v3/editorial/1/60/16002b06-e116-11ec-bf09-4f3fd9d49b81/6296770495376.preview.jpg?crop=1765%2C927%2C0%2C123&resize=1200%2C630&order=crop%2Cresize")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>EFG University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[220px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://d2ub1k1pknil0e.cloudfront.net/media/images/Science-group-graduation-november-2020-003.width-1200.jpg"
                                    onClick={() => handleImageClick("https://d2ub1k1pknil0e.cloudfront.net/media/images/Science-group-graduation-november-2020-003.width-1200.jpg")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>EFG University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[220px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://www.whittierdailynews.com/wp-content/uploads/2022/06/WDN-L-GRAD-SANTAFE-0602_02.jpg?w=481"
                                    onClick={() => handleImageClick("https://www.whittierdailynews.com/wp-content/uploads/2022/06/WDN-L-GRAD-SANTAFE-0602_02.jpg?w=481")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>EFG University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <div className="image-containerr">
                                <img
                                    alt="gallery"
                                    className="block h-[220px] w-full rounded-lg object-cover object-center cursor-zoom-in"
                                    src="https://cf.ltkcdn.net/family/images/orig/339113-2121x1414-college-graduates-858465270.jpg"
                                    onClick={() => handleImageClick("https://cf.ltkcdn.net/family/images/orig/339113-2121x1414-college-graduates-858465270.jpg")}
                                />
                                <div className="image-text">
                                    <p className='text-xl'>EFG University</p>
                                    <div className='flex justify-evenly text-xl mt-5'>
                                        <FaFacebookSquare className='text-center'></FaFacebookSquare>
                                        <FaTwitterSquare className='text-center'></FaTwitterSquare>
                                        <FaYoutube className='text-center'></FaYoutube>
                                        <FaLinkedin className='text-center'></FaLinkedin>
                                    </div>
                                </div>
                            </div>
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
                                <FiDelete></FiDelete>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;
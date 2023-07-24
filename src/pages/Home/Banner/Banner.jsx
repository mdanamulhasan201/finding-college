
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom";


const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <>
            <div ref={sliderRef} className="keen-slider ">
                <div className="keen-slider__slide number-slide1 relative">
                    <img className="w-full" src="https://rn53themes.net/themes/demo/education-master/images/slider/1.jpg" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-[#235476] bg-opacity-20 text-white">
                        <h2 className="md:text-6xl lg:text-6xl font-bold mb-2">Finding Your <span className="text-red-500">University</span></h2>
                        <p className="text-lg hidden sm:block mt-2">ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <Link to='/colleges'>
                                <button className="mt-4 px-6 py-2 bg-red-500 border-2 text-white rounded hover:bg-red-600 ">
                                    <p className="font-semibold">All College</p>
                                </button>
                            </Link>
                            <Link>
                                <button className="mt-4 px-6 py-2 border-2 text-white rounded hover:bg-red-500 ">
                                    <p className="font-semibold">Learn More</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 relative">
                    <img className="w-full" src="https://rn53themes.net/themes/demo/education-master/images/slider/2.jpg" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-[#235476] bg-opacity-20 text-white">
                        <h2 className="md:text-6xl lg:text-6xl font-bold mb-2">ADMISSION OPEN  <span className="text-red-500">2018</span></h2>
                        <p className="text-lg hidden sm:block mt-2">ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <Link to='/colleges'>
                                <button className="mt-4 px-6 py-2 bg-red-500 border-2 text-white rounded hover:bg-red-600 ">
                                    <p className="font-semibold">All College</p>
                                </button>
                            </Link>
                            <Link>
                                <button className="mt-4 px-6 py-2 border-2 text-white rounded hover:bg-red-500 ">
                                    <p className="font-semibold">Learn More</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 relative">
                    <img className="w-full" src="https://rn53themes.net/themes/demo/education-master/images/slider/3.jpg" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-[#235476] bg-opacity-20 text-white">
                        <h2 className="md:text-6xl lg:text-6xl font-bold mb-2">EDUCATION  <span className="text-red-500">MASTER</span></h2>
                        <p className="text-lg hidden sm:block mt-2">ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <Link to='/colleges'>
                                <button className="mt-4 px-6 py-2 bg-red-500 border-2 text-white rounded hover:bg-red-600 ">
                                    <p className="font-semibold">All College</p>
                                </button>
                            </Link>
                            <Link>
                                <button className="mt-4 px-6 py-2 border-2 text-white rounded hover:bg-red-500 ">
                                    <p className="font-semibold">Learn More</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";



const CollegeList = () => {
    const [search, setSearch] = useState('')
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-server-ruby.vercel.app/collegeList')
            .then(res => res.json())
            .then(result => {
                (result)
                console.log(result)
                setColleges(result.slice(0, 4))

            })
    }, [])

    const handleSearch = () => {

        fetch(`https://college-booking-server-ruby.vercel.app/collegeSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })

    }
    return (
        < >

            <div className="">
            <h3 className="font-bold text-center text-3xl pt-10 college-heading ">Find Your College </h3>
                <div className="form-control text-center py-5">
                    <div className="input-group justify-center">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search College…" className="input w-96 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]" />
                        <button onClick={handleSearch} className="btn w-20 bg-[#EF446E] btn-square border-none hover:bg-[#e61c4e]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        
                    </div>
                </div>
                <div className="container mx-auto gap-5  px-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 mb-10">

                {
                    colleges.map((collage) => (
                        <CollegeCard collage={collage} key={collage._id}>

                        </CollegeCard>

                    ))
                }
            </div>
            </div>
           
            


        </>
    );
};

export default CollegeList;
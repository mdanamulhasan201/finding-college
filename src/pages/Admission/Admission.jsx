import { useEffect, useState } from "react";

import AdmissionCard from "./AdmissionCard";

const Admission = () => {

    const [search, setSearch] = useState('')
    const [colleges, setColleges] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/collegeList')
            .then(res => res.json())
            .then(result => {
                (result)
                console.log(result)
                setColleges(result.slice(0, 10))

            })
    }, [])

    const handleSearch = () => {

        fetch(`http://localhost:5000/collegeSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })

    }
    return (



        <>
            <div className="form-control text-center py-5">
                <div className="input-group justify-center">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search College…" className="input w-96 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]" />
                    <button onClick={handleSearch} className="btn w-20 bg-[#EF446E] btn-square border-none hover:bg-[#e61c4e]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                </div>
            </div>

            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th> College Name</th>
                           
                            <th>Admission</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            colleges.map((clg, index) => (
                              <AdmissionCard clg ={clg} index={index} key={clg._id}></AdmissionCard>
                            ))

                        }

                    </tbody>

                </table>
            </div>

        </>

    );
};

export default Admission;
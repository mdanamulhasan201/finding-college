import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const details = useLoaderData()
    const { college, admissionDates, researchWorks, collegeDetails, admissionProcess, events, eventsDetails, image, sports, researchHistory } = details
    console.log(details)
    return (
        <div>
            <div className="card my-10 md:w-[1000px] lg:w-[1000px] bg-base-100 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="" />
                </figure>
                <div className="p-7 my-5 items-center text-center">
                    <h2 className="text-4xl mb-3 font-bold">{college}</h2>
                    <p className='mb-3 text-left'> {collegeDetails}</p>

                    <p className='text-left mb-3'> <span className='font-semibold underline text-lg '>Admission Process:</span> {admissionProcess}</p>

                  

                    <div className="grid grid-cols-1 md:grid-cols-3 justify-between lg:grid-cols-3 mx-auto my-5">



                        <div className="card w-52  shadow-md text-primary-content">
                            <div className="card-body">
                                <h3 className="font-bold text-black text-lg">Events:</h3>
                                <hr />
                                {events.map((event, index) => (
                                    <p key={index} className="text-gray-600">
                                        <button className='btn btn-sm btn-outline btn-error'>{event}</button>
                                    </p>
                                ))}



                            </div>
                        </div>

                        <div className="card w-52  shadow-md text-primary-content">
                            <div className="card-body">
                                <h3 className="font-bold text-black text-lg">Sports:</h3>
                                <hr />
                                {sports.map((sport, index) => (
                                    <p key={index} className="text-gray-600">
                                        <button className='btn btn-sm btn-outline btn-error'>{sport}</button>
                                    </p>
                                ))}



                            </div>
                        </div>

                        <div className="card w-52  shadow-md text-primary-content">
                            <div className="card-body">
                                <h3 className="font-bold text-black text-lg">Research works:</h3>
                                <hr />
                                {researchWorks.map((researchWorks, index) => (
                                    <p key={index} className="text-gray-600">
                                        <button className='btn btn-sm btn-outline btn-error'>{researchWorks}</button>
                                    </p>
                                ))}



                            </div>
                        </div>
                    </div>

                    <p className='text-left'> <span className='font-semibold underline text-lg '>Events Details:</span> {eventsDetails}</p>


                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
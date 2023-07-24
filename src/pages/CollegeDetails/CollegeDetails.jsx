import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Review from './Review';

const CollegeDetails = () => {
    const details = useLoaderData()
   
    const { college,  researchWorks, collegeDetails, admissionProcess, events, eventsDetails, image, sports} = details




    const { user } = useContext(AuthContext);
    console.log(user)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://college-booking-server-ruby.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess('Added Your Comment', result)
            })
            .catch((error) => {
                setError('Try agin Later...', error)
            })
        // console.log(data);
    }


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://college-booking-server-ruby.vercel.app/reviews')
            .then(res => res.json())
            .then(result => {
                (result)
                console.log(result)
                setReviews(result.slice(0, 5))

            })
    }, [])
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



            <div className='text-center w-96 mx-auto'>
            <h2 className="title-font mb-1 text-lg font-bold  text-gray-900">User Reviews</h2>
                {
                    reviews.map((review) => (
                        <Review review={review} key={review._id}>

                        </Review>


                    ))
                }
            </div>



            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-xl mx-auto mt-16 flex w-full flex-col  rounded-lg  p-8">
                    <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>

                    <div className="mb-4">
                        <label htmlFor='name' className="text-sm leading-7 text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("userName", { required: true })}
                            placeholder="Your Name"
                            value={user?.displayName}
                        />
                    </div>
                    <div className="mb-4 hidden">
                        <label htmlFor='name' className="text-sm leading-7 text-gray-600">photoURL</label>
                        <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("photoURL", { required: true })}
                            placeholder="Your Name"
                            value={user?.photoURL}
                        />
                    </div>




                    <div className="mb-4">
                        <label htmlFor='description' className="text-sm leading-7 text-gray-600">Message</label>
                        <textarea id="description" name="message" className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("description", { required: true })}
                            placeholder="Description"
                        >

                        </textarea>
                    </div>
                    <p className="text-green-500 font-bold">{success}</p>
                    <p className="text-red-700 font-bold">{error}</p>
                    <input className="btn btn-sm gradient-button w-full text-white" value="Feedback" type="submit" />

                </div>
            </form>
        </div>
    );
};

export default CollegeDetails;
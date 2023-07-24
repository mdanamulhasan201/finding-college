import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";



const MyAdmissionAdd = () => {
    const details = useLoaderData()
    console.log(details)
    const { college, admissionDates, image } = details



    // const { user } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { register, handleSubmit,  formState: { errors } } = useForm();


    const onSubmit = (data, e) => {
        e.preventDefault();
        fetch('http://localhost:5000/postCollege', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess('Submit Success', result)
                e.target.reset();
            })
            .catch((error) => {
                setError('Try agin Later...', error)
            })
        // console.log(data);
    }

    return (
        <>
            {/* <div className="flex justify-center  ">

                <div className="row">
      
                    <div className=" shadow-lg md:p-28 p-5">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="md:flex">
                                <div className="flex items-center md:mr-14">
                                    <p className="font-bold text-xl md:mr-7">Name:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        {...register("name", { required: true })}
                                        placeholder="Candidate Name"


                                    />
                                </div>

                                <div className="flex items-center">
                                    <p className="font-bold text-xl">Toy URL:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        {...register("image", { required: true })}
                                        placeholder="Image URL"
                                        type="url"



                                    />
                                </div>

                            </div>

                            <div className="md:flex">

                                <div className="flex items-center md:mr-7">
                                    <p className="font-bold text-xl">Seller Name:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        {...register("userName", { required: true })}
                                        placeholder="UserName"
                                        value={college}

                                    />
                                </div>



                                <div className="flex items-center">
                                    <p className="font-bold text-xl">Seller Email:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        value={user?.email}
                                        readOnly
                                        {...register("postedBy", { required: true })}
                                        placeholder="your email"
                                        type="email"

                                    />
                                </div>
                            </div>


                            <div className="md:flex">

                                <div className="flex items-center mr-8">
                                    <p className="font-bold text-xl md:mr-16">Price:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        defaultValue={"$"}

                                    />
                                </div>



                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:mr-7">Quantity:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        {...register("quantity", { required: true })}
                                        placeholder="Quantity"
                                        type="number"

                                    />

                                </div>

                            </div>


                            <div className="md:flex">
                                <div className="text-center flex items-center">
                                    <p className="font-bold text-xl md:mr-7">Location:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 md:mr-24 bg-slate-50"
                                        {...register("location", { required: true })}
                                        placeholder="Location"


                                    />
                                </div>



                                <div className="flex items-center ">
                                    <p className="font-bold text-xl md:mr-5">Date:</p>
                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50"
                                        {...register("added", { required: true })}
                                        placeholder="time"
                                        type="date"

                                    />
                                </div>

                            </div>


                            <div className="flex items-center md:mr-14 ">
                                <p className="font-bold text-xl md:mr-9">Category:</p>
                                <select className="border-solid md:w-[550px]  border-2 p-4 m-2 bg-slate-50" {...register("category", { required: true })}>
                                    <option value="sports Car">Sports Car</option>
                                    <option value="Race Car">Race Car</option>
                                    <option value="RideOn Truck">Ride On Truck</option>
                                    <option value="Toys Truck ">Toys Truck</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Tractor">Tractor</option>


                                </select>

                            </div>

                            <div className="text-center flex items-center">
                                <p className="font-bold text-xl md:mr-14">Details:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 md:h-20 md:w-[550px] bg-slate-50"
                                    {...register("description", { required: true })}
                                    placeholder="Description"


                                />
                            </div>
                            <input className="btn btn-primary btn-block flex mx-auto mt-10" value="Car Added" type="submit" />

                            <p className="text-green-500 font-bold mt-5">{success}</p>
                            <p className="text-red-700 font-bold mt-5">{error}</p>
                        </form>
                    </div>
                </div>
            </div> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-xl mx-auto  flex w-full flex-col  rounded-lg shadow-md my-8  p-8">
                    <h2 className="text-center font-bold">Fill Up This form</h2>
                    <div className="mb-4 hidden">
                        <label htmlFor='collegeName' className="text-sm leading-7 font-bold text-gray-600">College Name</label>
                        <input type="text" id="collegeName" name="collegeName" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("collegeName", { required: true })}
                            placeholder="college Name"
                            value={college}
                        />
                    </div>

                    <div className="mb-4 hidden">
                        <label htmlFor='CollegeImage' className="text-sm leading-7 font-bold text-gray-600">College Image</label>
                        <input type="url" id="CollegeImage" name="CollegeImage" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("CollegeImage", { required: true })}
                            placeholder="College Image"
                            value={image}
                        />
                    </div>
                    <div className="mb-4 hidden">
                        <label htmlFor='admissionDates' className="text-sm leading-7 font-bold text-gray-600">Admission Dates</label>
                        <input type="text" id="admissionDates" name="admissionDates" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("admissionDates", { required: true })}
                            placeholder="admissionDates"
                            value={admissionDates}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='name' className="text-sm leading-7 font-bold text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("userName", { required: true })}
                            placeholder="Candidate Name"
                        // value={user?.displayName}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='Subject' className="text-sm leading-7 font-bold text-gray-600">Subject</label>
                        <input type="text" id="Subject" name="Subject" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("Subject", { required: true })}
                            placeholder="Subject"
                        // value={user?.displayName}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='email' className="text-sm leading-7 font-bold text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("email", { required: true })}
                            placeholder="Candidate Email"
                        // value={user?.displayName}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='number' className="text-sm leading-7 font-bold text-gray-600">Number</label>
                        <input type="number" id="number" name="number" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("number", { required: true })}
                            placeholder="Phone number"
                        // value={user?.displayName}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='Address' className="text-sm leading-7 font-bold text-gray-600">Address</label>
                        <input type="text" id="Address" name="Address" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("Address", { required: true })}
                            placeholder="Address"
                        // value={user?.displayName}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='dateOfBirth' className="text-sm leading-7 font-bold text-gray-600">Date of birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("dateOfBirth", { required: true })}
                            placeholder="date of birth"
                        // value={user?.displayName}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='image' className="text-sm leading-7 font-bold text-gray-600">Image Url</label>
                        <input type="url" id="image" name="image" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            {...register("image", { required: true })}
                            placeholder="Image Url"
                        // value={user?.displayName}
                        />
                    </div>
                    <p className="text-green-500 font-bold">{success}</p>
                    <p className="text-red-700 font-bold">{error}</p>
                    <input className="mt-5 btn btn-sm gradient-button w-full text-white" value="Send" type="submit" />


                </div>
            </form>
        </>
    );
};

export default MyAdmissionAdd;
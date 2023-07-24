import { Link } from 'react-router-dom';
import './CollegeList.css'

const CollegeCard = ({ collegess }) => {
    const {
        college,
        admissionDates,
        events,
        researchHistory,
        sports,
        image,
        _id,
        id
    } = collegess;
    return (
        <div className="max-w-md mx-auto  bg-white rounded-xl shadow-lg overflow-hidden">
            <img
                className="object-cover h-64 w-full"
                src={image}
                alt={college}
            />
            <div className="p-6">
                <h2 className="font-bold text-2xl mb-4">{college}</h2>
                <p className="text-gray-600 mb-2">Admission Dates: {admissionDates}</p>
                <p className="text-gray-600 mb-2">Research History: {researchHistory}</p>
                <div className="flex justify-between">
                    <div className="mb-4">
                        <h3 className="font-bold text-lg">Events:</h3>
                        <ul className="list-disc list-inside">
                            {events.map((event, index) => (
                                <p key={index} className="text-gray-600">
                                    {event}
                                </p>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Sports:</h3>
                        <ul className="list-disc list-inside">
                            {sports.map((sport, index) => (
                                <p key={index} className="text-gray-600">
                                    {sport}
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link to={`/viewDetails/${_id}`}>
                    <button className=' mt-5 btn btn-sm gradient-button w-full text-white'>Details</button>
                </Link>

            </div>
        </div>
    );
};

export default CollegeCard;
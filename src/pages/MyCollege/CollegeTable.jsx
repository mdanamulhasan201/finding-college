
import { Link } from 'react-router-dom';

const CollegeTable = ({ clg, index }) => {
    console.log(clg);
    // const { _id } = clg
    return (
        <tr key={clg._id}>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={clg.CollegeImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{clg.collegeName}</td>
            <td>{clg.admissionDates}</td>
            <td>{clg.userName}</td>
            <td>{clg.email}</td>

            <td>
                <Link>
                    <button className=' btn btn-xs gradient-button  text-white'>Feedback</button>
                </Link>
            </td>
        </tr >
    );
};

export default CollegeTable;

import { Link } from 'react-router-dom';

const AdmissionCard = ({ clg, index }) => {
    console.log(clg);
    const {_id} = clg
    return (
        
            <tr key={clg._id}>
                <td>{index + 1}</td>
                <td><img className="rounded-full w-24 h-24" src={clg.image} alt="" /></td>
                <td>{clg.college}</td>
    
                <td>
                    <Link to={`/admissionDetails/${_id}`}>
                        <button className=' mt-5 btn btn-sm gradient-button  text-white'>Admission</button>
                    </Link>
                </td>
            </tr>
     
    );
};

export default AdmissionCard;
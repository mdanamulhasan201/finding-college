import { useEffect, useState } from "react";
import CollegeTable from "./CollegeTable";


const MyCollege = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myCollege')
            .then(res => res.json())
            .then(result => {
                (result)
                console.log(result)
                setColleges(result.slice(0, 4))

            })
    }, [])
    return (
        <div className="container mx-auto mt-5">
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>College Image</th>
                            <th>College Name</th>
                            <th>Admission Date</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            colleges.map((clg, index) => (
                            <CollegeTable clg={clg} key={clg._id} index={index}></CollegeTable>
                            ))

                        }
                       
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCollege;

const CollegeTable = ({ clg, index }) => {
    console.log(clg);

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
                <label htmlFor="my_modal_6" className=' btn btn-xs gradient-button  text-white'>Feedback</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">This modal works with a hidden checkbox!</p>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </td>
        </tr >
    );
};

export default CollegeTable;
import React from 'react';

const Review = ({ review }) => {
    const { description, userName } = review
    return (
        <div className=''>

            <div className="card w-96 gap-5 ">
                <div className="card-body">
                    <div className='font-semibold '>
                        <h3>{userName}</h3>
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;


const Review = ({ review }) => {
    const { description, userName, photoURL } = review
    return (
        <div className="card w-96 ">
            <figure className="px-10 pt-5">
                <img src={photoURL} alt="user" className="rounded-full w-16" />
            </figure>
            <div className="">
                <h2 className="text-lg">{userName}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;
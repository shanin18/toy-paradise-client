

const SingleCategoryToy = ({toy}) => {
    const {img, title, price, ratings,} = toy;

    return (
        <div className="border flex flex-col justify-between rounded-lg overflow-hidden">
            <img className="h-96" src={img} alt="toy image" />
            <div className="p-6">
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{ratings}</p>
            <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default SingleCategoryToy;
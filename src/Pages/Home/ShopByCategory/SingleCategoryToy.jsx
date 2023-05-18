import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleCategoryToy = ({ toy }) => {
  const { img, title, price, ratings } = toy;

  return (
    <div className="border flex flex-col justify-between rounded-lg overflow-hidden mx-2">
      <img className="h-96" src={img} alt="toy image" />
      <div className="p-4 flex flex-col justify-between gap-8">
        <div>
          <h3 className="font-bangers text-3xl mb-2">{title}</h3>
          <p className="font-archivo font-medium text-lg">Price: ${price}</p>
          <div className="flex items-center mt-1">
            <Rating style={{ maxWidth: 80 }} readOnly value={ratings} />
            <small>({ratings})</small>
          </div>
        </div>
        <button className="btn bg-black capitalize font-archivo font-medium btn-block">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleCategoryToy;

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const SingleCategoryToy = ({ toy }) => {
  const { _id, img, title, price, ratings } = toy;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToast = () =>{
    if(!user){
      alert("You have to log in first to view details")
      navigate("/login")
    }
  }

  return (
    <div data-aos="flip-up">
      <div className="border flex flex-col justify-between rounded-lg overflow-hidden">
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
          <Link 
          to={`/category/${_id}`}
          >
            <button onClick={handleToast} className="btn bg-black capitalize font-archivo font-medium btn-block">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryToy;

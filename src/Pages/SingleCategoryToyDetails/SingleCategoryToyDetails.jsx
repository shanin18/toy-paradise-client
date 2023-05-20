import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleCategoryToyDetails = () => {
  const toyDetails = useLoaderData();

  const {
    img,
    title,
    price,
    ratings,
    availableQuantity,
    subCategory,
    sellerName,
    sellerEmail,
    description,
  } = toyDetails;
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-bold font-bangers text-4xl pb-10 text-center">
        Toy Details
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="md:w-1/2 flex justify-end items-start">
          <img className="md:w-96" src={img} alt="" />
        </div>
        <div className="px-2 mx-2 md:px-0 md:mx-0 md:w-1/2">
          <h3 className="font-bangers text-3xl mb-2">{title}</h3>
          <p className="font-archivo font-medium text-lg">Price: ${price}</p>
          <p className="font-archivo font-medium text-lg">
            Sub-Category: {subCategory}
          </p>
          <div className="flex items-center mt-1">
            <Rating style={{ maxWidth: 80 }} readOnly value={ratings} />
            <small>({ratings})</small>
          </div>
          <p className="font-archivo font-medium text-lg">
            Available Quantity: {availableQuantity} <small>Pcs</small>{" "}
          </p>
          <p className="font-archivo font-medium text-lg">
            Seller name: {sellerName}
          </p>
          <p className="font-archivo font-medium text-lg">
            Seller email: {sellerEmail}
          </p>

          <details className="cursor-pointer w-fit">
            <summary className="font-archivo font-medium text-lg">
              Description
            </summary>
            <p className="font-archivo font-medium text-lg">{description}</p>
          </details>
          <Link to="/" className="font-archivo btn bg-[#01bfff] btn-sm capitalize border-0 mt-5" >Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryToyDetails;

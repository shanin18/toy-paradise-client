import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import SingleToyRow from "./SingleToyRow";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const AllToys = () => {
  useTitle("All toys");
  const allUsersToys = useLoaderData();
  const [allToys, setAllToys] = useState(allUsersToys);
  const [value, setValue] = useState("");
  const [toyDetails, setToyDetails] = useState([]);

  const handleSearch = () => {
    fetch(`https://toy-paradise-server-brown.vercel.app/searchByToy/${value}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  const handleModal = (id) => {
    fetch(`https://toy-paradise-server-brown.vercel.app/allToys/${id}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  };

  const {
    img,
    sellerEmail,
    ratings,
    title,
    sellerName,
    price,
    subCategory,
    availableQuantity,
    description,
  } = toyDetails;

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-center mb-8">
        <div className="input-group w-fit">
          <input
            type="text"
            placeholder="Search by toy name"
            className="input input-bordered md:w-[400px]"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra table-compact w-full text-center">
          <thead>
            <tr className="font-archivo">
              <th className="py-4"></th>
              <th className="py-4">Seller</th>
              <th className="py-4">Toy Name</th>
              <th className="py-4">Sub-Category</th>
              <th className="py-4">Price</th>
              <th className="py-4">Available Quantity</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {allToys?.map((toy, index) => (
              <SingleToyRow
                key={toy._id}
                index={index}
                toy={toy}
                handleModal={handleModal}
              ></SingleToyRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal body */}
      <div>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative overflow-x-scroll">
            <label
              htmlFor="my-modal-2"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="text-left space-y-1">
              <img src={img} className="mb-8" alt="toy image" />
              <h2 className="font-bangers text-2xl mb-2">{title}</h2>
              <p>
                <span className="font-semibold">SubCategory:</span>{" "}
                {subCategory}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${price}
              </p>
              <p>
                <span className="font-semibold">AvailableQuantity:</span>
                {availableQuantity}
              </p>
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Ratings:</span>
                <Rating style={{ maxWidth: 80 }} readOnly value={ratings} />
              </div>
              <p>
                <span className="font-semibold">Seller:</span> {sellerName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {sellerEmail}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;

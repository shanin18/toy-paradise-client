import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import SingleToyRow from "./SingleToyRow";
import { useState } from "react";

const AllToys = () => {
  useTitle("All toys");
  const allUsersToys = useLoaderData();
  const [allToys, setAllToys] = useState(allUsersToys);
  const [value, setValue] = useState("");

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchByToy/${value}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-16 mb-8">
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
          <tbody className="border-b">
            {allToys?.map((toy, index) => (
              <SingleToyRow
                key={toy._id}
                index={index}
                toy={toy}
              ></SingleToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

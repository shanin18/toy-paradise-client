import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import SingleToyRow from "./SingleToyRow";

const AllToys = () => {
  useTitle("All toys");
  const allToys = useLoaderData();

  return (
    <div className="container mx-auto">
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

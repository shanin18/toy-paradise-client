import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import SingleToyRow from "./SingleToyRow";

const AllToys = () => {
  useTitle("All toys");
  const allToys = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr className="font-archivo">
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                allToys?.map(toy => <SingleToyRow key={toy._id} toy={toy}></SingleToyRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

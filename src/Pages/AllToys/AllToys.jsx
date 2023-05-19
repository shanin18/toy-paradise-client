import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import SingleToyRow from "./SingleToyRow";
import { useState } from "react";
import Swal from "sweetalert2";

const AllToys = () => {
  useTitle("All toys");
  const allUserData = useLoaderData();
  const [allToys, setAllToys] = useState(allUserData);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToys/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = allToys.filter((toy) => toy._id !== id);
              setAllToys(remaining);
            }
          });
      }
    });
  };

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
            {allToys?.map((toy, index) => (
              <SingleToyRow
                key={toy._id}
                index={index}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              ></SingleToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

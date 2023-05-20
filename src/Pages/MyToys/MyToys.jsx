import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Context/AuthProvider";
import MySingleToyRow from "./MySingleToyRow";

const MyToys = () => {
  const [myToys, setMyToys] = useState();
  const [price, setPrice] = useState("increasing");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}&sort=${price}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, price]);

  useTitle("My Toys");
  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
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
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSortByPrice = (e) => {
    setPrice(e.target.value);
    fetch(`http://localhost:5000/myToys?email=${user.email}&sort=${price}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };

  return (
    <div className="container mx-auto">
      <div className="flex font-archivo items-center mt-16 mb-8 gap-3">
        <p>Price:</p>
        <select
          defaultValue={"increasing"}
          onChange={handleSortByPrice}
          className="font-archivo border px-4 py-2 rounded-lg"
        >
          <option value="increasing">Low to high</option>
          <option value="decreasing">High to low</option>
        </select>
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
            {myToys?.map((toy, index) => (
              <MySingleToyRow
                key={toy._id}
                index={index}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              ></MySingleToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

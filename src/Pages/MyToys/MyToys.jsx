import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Context/AuthProvider";
import MySingleToyRow from "./MySingleToyRow";

const MyToys = () => {
  const [myToys, setMyToys] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  console.log(user.email);

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

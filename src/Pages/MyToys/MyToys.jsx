import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Context/AuthProvider";
import MySingleToyRow from "./MySingleToyRow";
import { Rating } from "@smastrom/react-rating";
const MyToys = () => {
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [toyDetails, setToyDetails] = useState([]);
  const [sortValue, setSortValue] = useState("increasing");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://toy-paradise-server-brown.vercel.app/myToys?email=${user.email}&sort=${sortValue}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, sortValue]);

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
        fetch(`https://toy-paradise-server-brown.vercel.app/allToys/${id}`, {
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
    <div className="my-16">
      <div className="container mx-auto">
        <div className="flex font-archivo items-center mb-8 gap-3">
          <p>Price:</p>
          <select
            defaultValue={"increasing"}
            onChange={(e) => setSortValue(e.target.value)}
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
            <tbody>
              {myToys?.map((toy, index) => (
                <MySingleToyRow
                  key={toy._id}
                  index={index}
                  toy={toy}
                  handleDeleteToy={handleDeleteToy}
                  handleModal={handleModal}
                ></MySingleToyRow>
              ))}
            </tbody>
          </table>
        </div>
        {/* modal body */}
        <div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative overflow-x-scroll">
              <label
                htmlFor="my-modal-3"
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
    </div>
  );
};

export default MyToys;

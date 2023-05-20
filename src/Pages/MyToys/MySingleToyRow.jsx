import { BsEye, BsPencilSquare } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const MySingleToyRow = ({ toy, index, handleDeleteToy, handleModal }) => {
  const { _id, title, sellerName, price, subCategory, availableQuantity } = toy;

  return (
    <tr className="font-archivo">
      <th className="py-3">{index + 1}</th>
      <td className="py-3">{sellerName}</td>
      <td className="py-3">{title}</td>
      <td className="py-3">{subCategory}</td>
      <td className="py-3">{price}</td>
      <td className="py-3">{availableQuantity}</td>
      <td className="py-3">
        <div className="flex gap-5 justify-center">
          {/* The button to open modal */}
          <label
            onClick={() => handleModal(_id)}
            htmlFor="my-modal-3"
            className="btn btn-ghost btn-sm shadow-md rounded-full"
          >
            <BsEye className="text-[#01bfff]"></BsEye>
          </label>

          <Link to={`/update/${_id}`}>
            <button className="btn btn-ghost btn-sm shadow-md rounded-full">
              <BsPencilSquare className="text-green-500"></BsPencilSquare>
            </button>
          </Link>

          <button
            onClick={() => handleDeleteToy(_id)}
            className="btn btn-ghost btn-sm shadow-md rounded-full"
          >
            <RiDeleteBinLine className="text-red-500"></RiDeleteBinLine>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MySingleToyRow;

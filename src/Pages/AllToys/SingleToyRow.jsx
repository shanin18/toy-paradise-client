import { BsEye } from "react-icons/bs";

const SingleToyRow = ({ toy, index, handleModal }) => {
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
        {/* The button to open modal */}
        <label
          onClick={() => handleModal(_id)}
          htmlFor="my-modal-2"
          className="btn btn-ghost btn-sm shadow-md rounded-full"
        >
          <BsEye className="text-[#01bfff]"></BsEye>
        </label>
      </td>
    </tr>
  );
};

export default SingleToyRow;

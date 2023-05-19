import { BsPencilSquare, BsEye } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MySingleToyRow = ({ toy, index, handleDeleteToy }) => {
  const { _id, title, sellerName, price, subCategory, availableQuantity } = toy;

  return (
    <tr className="font-archivo">
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{title}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td className="flex gap-5 justify-center">
        <BsEye className="text-lg cursor-pointer hover:border-2 rounded-full "></BsEye>
        <Link to={`/update/${_id}`}>
          <BsPencilSquare className="text-lg cursor-pointer hover:border-2 rounded-full"></BsPencilSquare>
        </Link>
        <RiDeleteBinLine
          onClick={() => handleDeleteToy(_id)}
          className="text-lg cursor-pointer hover:border-2 rounded-full"
        ></RiDeleteBinLine>
      </td>
    </tr>
  );
};

export default MySingleToyRow;

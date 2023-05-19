

const SingleToyRow = ({ toy, index }) => {
  const { title, sellerName, price, subCategory, availableQuantity } = toy;

  return (
    <tr className="font-archivo">
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{title}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td className="flex gap-5 justify-center">
        <button className="font-archivo btn btn-sm btn-ghost capitalize bg-[#01bfff]">View</button>
      </td>
    </tr>
  );
};

export default SingleToyRow;

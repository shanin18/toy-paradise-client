const SingleToyRow = ({toy}) => {
    const { _id, title, sellerName, price, subCategory, availableQuantity } = toy;
  return (
    <tr>
      <th>1</th>
      <td>{sellerName}</td>
      <td>{title}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>Blue</td>
    </tr>
  );
};

export default SingleToyRow;

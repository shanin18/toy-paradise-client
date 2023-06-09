import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateToyInfo = () => {
  useTitle("Update Toy Info");
  const toyInfo = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    title,
    img,
    sellerName,
    sellerEmail,
    price,
    ratings,
    availableQuantity,
  } = toyInfo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Do you want to update the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "update",
      denyButtonText: `Don't update`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://toy-paradise-server-brown.vercel.app/allToys/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "", "success");
              navigate("/myToys");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not updated", "", "info");
      }
    });
  };
  return (
    <div className="mx-2 md:mx-0">
      <div className="container mx-auto my-24">
        <h1 className="font-bold font-bangers text-3xl pb-10 text-center tracking-wide">
          Update Toy Info
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-[70%] xl:w-[60%] mx-auto font-archivo space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("title", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Toy name"
              defaultValue={title}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("img", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="PhotoURL"
              defaultValue={img}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("sellerName", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Seller name"
              defaultValue={sellerName}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("sellerEmail", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Seller email"
              defaultValue={sellerEmail}
              readOnly
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("price", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Price"
              defaultValue={price}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("ratings", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Ratings"
              defaultValue={ratings}
            />
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("availableQuantity", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Quantity"
              defaultValue={availableQuantity}
            />
            <select
              {...register("subCategory")}
              className="border w-full rounded-lg px-5 py-3"
            >
              <option value="Marvel">Marvel</option>
              <option value="Avengers">Avengers</option>
              <option value="Transformers">Transformers</option>
              <option value="Star Wars">Star Wars</option>
            </select>
          </div>
          <textarea
            className="w-full border rounded-lg h-64 px-5 py-2"
            {...register("description", { required: true })}
          ></textarea>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            type="submit"
            value="Update"
            className="btn btn-block mt-8 bg-[#01bfff] border-0"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateToyInfo;

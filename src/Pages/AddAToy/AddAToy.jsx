import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AddAToy = () => {
  useTitle("Add a toy");
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://toy-paradise-server-brown.vercel.app/allToys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toy has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <div className="mx-2 md:mx-0">
      <div className="container mx-auto my-24">
        <h1 className="font-bold font-bangers text-3xl pb-10 text-center">
          Add a toy
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
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("img", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="PhotoURL"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("sellerName", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Seller name"
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("sellerEmail")}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Seller email"
              readOnly
              value={user?.email}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("price", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Price"
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("ratings", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Ratings"
            />
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("availableQuantity", { required: true })}
              className="border w-full py-3 px-5 rounded-lg"
              placeholder="Quantity"
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
            value="ADD Toy"
            className="btn btn-block mt-8 bg-[#01bfff] border-0"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAToy;

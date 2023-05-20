const AboutUs = () => {
  return (
    <div className="my-24 h-screen lg:h-[80vh] relative bg-[url('/images/banner/starwars2.jpg')] bg-center bg-cover px-2">
      <div className="inset-0 bg-[#0000007e] absolute py-20">
        <h1 className="font-bold font-bangers text-5xl pb-10 text-center text-white">
          About <span className="text-[#2fcbff]">Us</span>
        </h1>
        <div className="flex justify-center container mx-auto ">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] text-center mt-20">
            <p className="font-archivo text-center text-white">
              Welcome to Toy Paradise, your ultimate destination for action
              figures and collectibles! We are passionate toy enthusiasts
              dedicated to bringing you the best selection of action figures
              from the most popular franchises and iconic characters.
            </p>
            <label
              htmlFor="my-modal-3"
              className="btn bg-[#2fcbff] border-0 w-36 mt-8"
            >
              More
            </label>
          </div>

          {/* modal body */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-archivo">
                Welcome to toy paradise, your ultimate destination for action
                figures and collectibles! We are passionate toy enthusiasts
                dedicated to bringing you the best selection of action figures
                from the most popular franchises and iconic characters. At
                toy paradise, we understand the thrill of collecting action
                figures and the joy they bring to fans of all ages. Our mission
                is to provide a one-stop-shop for action figure enthusiasts,
                offering a wide range of high-quality products that cater to
                different interests and fandoms. With years of experience in the
                toy industry, we have carefully curated our inventory to include
                action figures from beloved franchises such as superheroes,
                sci-fi, fantasy, anime, and more. We work directly with
                reputable manufacturers and distributors to ensure that each
                product we offer is authentic, licensed, and of the highest
                quality. We pride ourselves on our commitment to customer
                satisfaction. Our team of toy experts is always ready to assist
                you with any questions, concerns, or recommendations you may
                need. We strive to provide exceptional customer service and
                create a seamless shopping experience from start to finish. At
                toy paradise, we understand that collecting action figures is
                not just a hobby; its a way of expressing your love for your
                favorite characters and stories. Thats why we go the extra mile
                to ensure that your purchases are carefully packaged and shipped
                to your doorstep in a timely manner, allowing you to enjoy your
                new additions as soon as possible. We value our community of
                action figure enthusiasts and believe in creating a space where
                fans can connect, share their passion, and stay updated on the
                latest news and releases. Our blog features engaging content,
                including product reviews, toy photography, interviews, and
                behind-the-scenes insights into the world of action figures.
                Thank you for choosing toy paradise as your go-to source for
                action figures. We are excited to be a part of your collecting
                journey and look forward to serving you with an extensive
                selection of action figures, exceptional customer service, and a
                commitment to your satisfaction. Happy collecting!
              </h3>
              <p className="py-4"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

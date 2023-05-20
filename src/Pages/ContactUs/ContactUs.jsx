const ContactUs = () => {
  return (
    <div className="bg-[#2fcbff70]">
      <h1 className="font-bold font-bangers text-5xl pt-20 text-center">
        Contact us
      </h1>
      <div>
        <div className="hero py-10 ">
          <div className="hero-content gap-10 flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/fCH3zkF/captain.jpg"
                className="md:w-1/3 rounded-lg shadow-2xl"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
              />

            <div data-aos="fade-left"
                data-aos-easing="ease-in-sine" className="w-full md:w-2/3">
              <div className="card w-full shadow-2xl bg-base-100">
                <div className="card-body font-archivo">
                  <h2 className="font-bold font-archivo text-3xl text-[#2fcbff]">
                    Get In Touch
                  </h2>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input bg-[#2fcbff28] placeholder:text-[#2fcbff] placeholder:font-semibold"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="input  bg-[#2fcbff49] placeholder:text-[#2fcbff] placeholder:font-semibold"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <textarea
                      className="px-4 py-2 rounded-lg  bg-[#2fcbff57] placeholder:text-[#2fcbff] placeholder:font-semibold"
                      rows="10"
                      placeholder="Type your message here.."
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn bg-[#2fcbff] border-0">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

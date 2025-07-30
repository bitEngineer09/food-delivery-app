import React from "react";

export const Contact = () => {
  return (
    <>
      <div
        className="
                contactPageBackground
                flex items-center justify-center
                w-full
                mx-auto
                min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] lg:min-h-[40rem]
                "
      >
        <div
          className="
                px-[2rem] md:px-[3rem]
              text-white
                font-semibold
                lg:leading-[12rem]
                text-[2.6rem] sm:text-[3.8rem] md:text-[4.2rem] lg:text-[8rem]
                 "
        >
          Your feedback means a lot to us! <br />
          Feel free to get in touch!
        </div>
      </div>

      <div className="
                    container containerL
                    grid md:grid-cols-2
                    px-[2rem] sm:px-[6rem] 
                    py-[4rem] sm:py-[6rem] lg:py-[4rem]
                    gap-[2rem] sm:gap-[3rem] lg:gap-[5rem] 2xl:gap-[16rem]
                    "
        >
        <div className="grid gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem]">
          <input
            type="text"
            placeholder="Full Name"
            className="
                    text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.8rem]
                    border-[0.1rem] md:border-[0.23rem] border-[#747474]
                    rounded-[0.5rem] md:rounded-[0.7rem]
                    p-[0.4rem_1rem] sm:p-[0.6rem_1.3rem] md:p-[0.7rem_1.6rem] lg:p-[1rem_2rem]
                    outline-none
                    "
          />
          <input
            type="email"
            placeholder="Email Address"
            className="
                    text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.8rem]
                    border-[0.1rem] md:border-[0.23rem] border-[#747474]
                    rounded-[0.5rem] md:rounded-[0.7rem]
                    p-[0.4rem_1rem] sm:p-[0.6rem_1.3rem] md:p-[0.7rem_1.6rem] lg:p-[1rem_2rem]
                    outline-none
                    "
          />
          <input
            type="text"
            placeholder="Mobile Number (optional)"
            className="
                    text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.8rem]
                    border-[0.1rem] md:border-[0.23rem] border-[#747474]
                    rounded-[0.5rem] md:rounded-[0.7rem]
                    p-[0.4rem_1rem] sm:p-[0.6rem_1.3rem] md:p-[0.7rem_1.6rem] lg:p-[1rem_2rem]
                    outline-none
                    "
          />
          <textarea
            rows="7"
            placeholder="Type text"
           className="
                    text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.8rem]
                    border-[0.1rem] md:border-[0.23rem] border-[#747474]
                    rounded-[0.5rem] md:rounded-[0.7rem]
                    p-[0.4rem_1rem] sm:p-[0.6rem_1.3rem] md:p-[0.7rem_1.6rem] lg:p-[1rem_2rem]
                    outline-none
                    "
          />
        </div>

        <div className="flex items-center justify-center px-[2rem] sm:px-[3rem] md:px-[4rem]  xl:px-[7rem]">
          <div className="
                        h-[10rem] sm:h-[12rem] md:h-[15rem] lg:h-[20rem]
                        p-[1.5rem] md:p-[2rem] xl:p-[3rem]
                        border-[0.1rem] md:border-[0.23rem] border-[#747474]
                        rounded-[0.5rem] md:rounded-[0.7rem]
                        ">
            <h2 className="text-[1.4rem] rounded-[1rem] [0.5rem] lg:text-[2rem] text-red-600">
              Issue with your order ?
            </h2>
            <p className="text-[1.2rem] md:text-[1rem] lg:text-[1.6rem]">
              Contact our customer care, and feel free to reach us without any
              hesitation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

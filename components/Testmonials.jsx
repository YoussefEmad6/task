import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { data } from "@/data/data";

const Testmonials = () => {
  return (
    <section className="bg-cover bg-banner  mt-10 flex flex-col items-center justify-center pb-30 pt-40 sm:py-40">
      <div className="container flex flex-col items-center mx-auto my-6  md:p-10 md:px-12">
        <p className=" text-[#4D9DE0]">Clients' Testimonials</p>
        <h1 className=" mt-3.5 text-4xl glato  text-center">
          Unforgettable Travel Experiences
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mt-7 mb-16  lg:flex-row lg:flex-wrap lg:justify-evenly ">
        {data.map((item, indx) => {
          return (
            <div
              key={indx}
              className={`${
                item.vip ? "bg-orange-400" : "bg-white"
              } flex flex-col items-center  max-w-[536px] rounded-[30px] mx-4 my-11 lg:my-7 shadow-lg px-[50px] hover:-translate-y-3`}
            >
              <img
                src={item.img}
                alt="Travel"
                className=" -mt-[50px] w-[90px] sm:w-[144px] sm:-mt-[72px] "
              />
              <p className="text-xl text-center mt-5">{item.paragrah}</p>
              <h3 className="text-4xl  -tracking-[.6px]">{item.name}</h3>
              <p className=" text-[20px] ">{item.tile}</p>
              <Stack spacing={1} className=" mt-4 mb-10">
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rate}
                  precision={0.5}
                  readOnly
                  size="large"
                />
              </Stack>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testmonials;

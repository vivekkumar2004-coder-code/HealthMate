import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray 500">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 m-3 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            commodi voluptate nam possimus consequatur. Perferendis eaque vero
            doloremque earum quasi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            accusantium voluptatibus exercitationem mollitia error, sunt dolorem
            repudiandae nobis corrupti, totam ut libero blanditiis, neque
            ratione aliquam eum ab consequatur laudantium repellendus debitis
            consequuntur consectetur atque?
          </p>
          <b className="text-gray-800">Our vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro
            distinctio harum reprehenderit! Magnam ratione aliquid explicabo
            inventore sed, blanditiis labore vel modi voluptate saepe eligendi.
            Esse, ipsa tenetur.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white  hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer  rounded-xl">
          <b>Efficiency</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            quia?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white  hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer  rounded-xl">
          <b>Convercelence</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            voluptatum.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer  rounded-xl">
          <b>personalisation</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            veritatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

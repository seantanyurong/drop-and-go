import React from "react";
import Image from "../../../assets/Logo.png";
import GroupImg from "../../../assets/group.jpg";

const TestBusinessHours = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${GroupImg})` }}>
    
      <div className="container mx-auto py-20">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about our team and our company.
          </p>
        </div>
    </div>    

        <div className="flex flex-wrap -mx-4">

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <img className="mx-auto h-8" src={Image} alt="Pic1" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Sean
              </h2>
              <p className="text-gray-600 mb-4">CEO & Co-founder</p>
              <p className="text-gray-700 leading-relaxed">
                Description 1
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <img className="mx-auto h-8" src={Image} alt="Pic1" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Keith
              </h2>
              <p className="text-gray-600 mb-4">CTO & Co-founder</p>
              <p className="text-gray-700 leading-relaxed">
                Description 2
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <img className="mx-auto h-8" src={Image} alt="Pic1" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Grace
              </h2>
              <p className="text-gray-600 mb-4">CTO & Co-founder</p>
              <p className="text-gray-700 leading-relaxed">
                Description 2
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <img className="mx-auto h-8" src={Image} alt="Pic1" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Kin Mun
              </h2>
              <p className="text-gray-600 mb-4">CTO & Co-founder</p>
              <p className="text-gray-700 leading-relaxed">
                Description 2
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <img className="mx-auto h-8" src={Image} alt="Pic1" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Nevan
              </h2>
              <p className="text-gray-600 mb-4">CTO & Co-founder</p>
              <p className="text-gray-700 leading-relaxed">
                Description 2
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <img className="mx-auto h-8" src={Image} alt="Pic1" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Stanley
              </h2>
              <p className="text-gray-600 mb-4">CTO & Co-founder</p>
              <p className="text-gray-700 leading-relaxed">
                Description 2
              </p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default TestBusinessHours;

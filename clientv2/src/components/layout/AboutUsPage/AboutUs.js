import React from "react";
import Image from "../../../assets/Logo.png";
import GroupImg from "../../../assets/group.jpg";

const AboutUs = () => {
  return (
    <div className="h-screen flex-col items-start justify-center">

      <div className="h-3/5 w-5/6 bg-center bg-cover bg-no-repeat justify-center mx-auto my-10 drop-shadow-xl" style={{ backgroundImage: `url(${GroupImg})` }}>
        <div class="h-full bg-black bg-opacity-50 py-20">
          <div className="container mx-auto py-10 mb-60">
            <div className="text-center mb-40 mt-32">
              <h1 className="text-5xl font-bold text-white">About Us</h1>
              <p className="text-3xl text-white">
                Meet the faces behind our company
              </p>
            </div>
          </div>
        </div>
      </div>    

    <div className="flex flex-wrap -mx-4 max-w-8xl md:max-w-8xl mx-auto px-5 sm:px-6 mt-50 w-5/6">

      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="opacity-90 bg-white rounded-lg shadow p-6 hover:bg-orange-100">
          <div className="mb-4">
            <img className="mx-auto h-8" src={Image} alt="Pic1" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Wong Kin Mun
          </h2>
          <p className="text-gray-600 mb-4">Year 2 Information Systems Student</p>
          <p className="text-gray-700 leading-relaxed">
            Dulcius Ex Asperis
          </p>
        </div>
      </div> 
      
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="opacity-90 bg-white rounded-lg shadow p-6 hover:bg-orange-100">
          <div className="mb-4">
            <img className="mx-auto h-8" src={Image} alt="Pic1" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Stanley Mak
          </h2>
          <p className="text-gray-600 mb-4">Year 2 Information Systems Student</p>
          <p className="text-gray-700 leading-relaxed">
            Hunter Gatherer
          </p>
        </div>
      </div>          

      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="opacity-90 bg-white rounded-lg shadow p-6 hover:bg-orange-100">
          <div className="mb-4">
            <img className="mx-auto h-8" src={Image} alt="Pic1" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Sean Tan
          </h2>
          <p className="text-gray-600 mb-4">Year 2 Information Systems Student</p>
          <p className="text-gray-700 leading-relaxed">
            A giga-chad who can code
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="opacity-90 bg-white rounded-lg shadow p-6 hover:bg-orange-100">
          <div className="mb-4">
            <img className="mx-auto h-8" src={Image} alt="Pic1" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Nevan Ng
          </h2>
          <p className="text-gray-600 mb-4">Year 2 Information Systems Student</p>
          <p className="text-gray-700 leading-relaxed">
            "DAG" is a forbidden word
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="opacity-90 bg-white rounded-lg shadow p-6 hover:bg-orange-100">
          <div className="mb-4">
            <img className="mx-auto h-8" src={Image} alt="Pic1" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Keith Ong
          </h2>
          <p className="text-gray-600 mb-4">Year 2 Information Systems Student</p>
          <p className="text-gray-700 leading-relaxed">
            A tennis rockstar who hates CSS
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="opacity-90 bg-white rounded-lg shadow p-6 hover:bg-orange-100">
          <div className="mb-4">
            <img className="mx-auto h-8" src={Image} alt="Pic1" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Grace Yong
          </h2>
          <p className="text-gray-600 mb-4">Year 2 Information Systems Student</p>
          <p className="text-gray-700 leading-relaxed">
            I love kicking balls
          </p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default AboutUs;

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const EditBusinessHours = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      monOpening: 9,
      monClosing: 5,
      tueOpening: 9,
      tueClosing: 5
      // wedOpening: 9,
      // wedClosing: 5,
      // thurOpening: 9,
      // thurClosing: 5,
      // friOpening: 9,
      // friClosing: 5,
      // satOpening: 9,
      // satClosing: 5,
      // sunOpening: 9,
      // sunClosing: 5,
    },
    onSubmit: function (values) {
      alert(`You have updated the business hours for`);
    },
    validationSchema: yup.object({
      monOpening: yup.string().label("Monday's Opening Hour").required(),
      monClosing: yup.string().label("Monday's Closing Hour").required(),
      tueOpening: yup.string().label("Monday's Opening Hour").required(),
      tueClosing: yup.string().label("Monday's Closing Hour").required()
    }),
  });

  // the menu on top
  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">Edit Business Hours</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        <form onSubmit={formik.handleSubmit}>
          <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 text-text-dark">
            <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md">
              {/* <div className="flex items-center mb-1 justify-between"> */}
              <label>
                <div className="flex items-center mb-1 justify-between">
                  <p className="mt-1.5 text-md font-medium py-2">Monday:</p>

                  <div>
                    <input
                      type="time"
                      name="monOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${formik.touched.monOpening && formik.errors.monOpening
                          ? "border-red-400"
                          : "border-gray-300"
                        }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.monOpening}
                    />
                    {formik.touched.capamonOpeningity && formik.errors.monOpening && (
                      <span className="text-red-400">{formik.errors.monOpening}</span>
                    )}
                  </div>
                  <div>to</div>
                  <div>
                    <input
                      type="time"
                      name="capacity"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${formik.touched.capacity && formik.errors.capacity
                          ? "border-red-400"
                          : "border-gray-300"
                        }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.capacity && formik.errors.capacity && (
                      <span className="text-red-400">{formik.errors.capacity}</span>
                    )}
                  </div>

                </div>

              </label>
              {/* </div> */}
            </div>
          </div>
          <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 text-text-dark">
            <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md">
              {/* <div className="flex items-center mb-1 justify-between"> */}
              <label>
                <div className="flex items-center mb-1 justify-between">
                  <p className="mt-1.5 text-md font-medium py-2">Tuesday:</p>

                  <div>
                    <input
                      type="number"
                      name="capacity"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${formik.touched.capacity && formik.errors.capacity
                          ? "border-red-400"
                          : "border-gray-300"
                        }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.capacity && formik.errors.capacity && (
                      <span className="text-red-400">{formik.errors.capacity}</span>
                    )}
                  </div>
                  <div> to</div>
                  <div>
                    <input
                      type="number"
                      name="capacity"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${formik.touched.capacity && formik.errors.capacity
                          ? "border-red-400"
                          : "border-gray-300"
                        }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.capacity && formik.errors.capacity && (
                      <span className="text-red-400">{formik.errors.capacity}</span>
                    )}
                  </div>

                </div>

              </label>
              {/* </div> */}
            </div>
            <button className='w-full bg-blue-500 rounded p-3 text-white' type='submit'>Submit</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBusinessHours;

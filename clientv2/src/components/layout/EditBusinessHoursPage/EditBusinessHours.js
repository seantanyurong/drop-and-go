import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const EditBusinessHours = () => {
  const [formState, setFormState] = useState({
    name: "",
    monOpening: "",
    monClosing: "",
    tueOpening: "",
    tueClosing: "",
    wedOpening: "",
    wedClosing: "",
    thurOpening: "",
    thurClosing: "",
    friOpening: "",
    friClosing: "",
    satOpening: "",
    satClosing: "",
    sunOpening: "",
    sunClosing: "",
    provider_id: "",
  });

  const { businessHoursId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      // getting the user ID
      const settings = {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      };

      const userID = await fetch(
        `https://is3106-dropandgo.herokuapp.com/provider/authenticate`,
        settings
      );

      if (!userID.ok) {
        const message = `An error has occurred: ${userID.statusText}`;
        window.alert(message);
        return;
      }

      const userIDRes = await userID.json();
      console.log(userIDRes);
    }
    fetchData();
    return;
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://is3106-dropandgo.herokuapp.com/businessHours/${businessHoursId}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      if (!res) {
        window.alert(`BusinessHours with id ${businessHoursId} not found`);
        return;
      } else {
        // setting initial form state
        setFormState({
          name: res.name,
          monOpening: res.monOpeningHours,
          monClosing: res.monClosingHours,
          tueOpening: res.tueOpeningHours,
          tueClosing: res.tueClosingHours,
          wedOpening: res.wedOpeningHours,
          wedClosing: res.wedClosingHours,
          thurOpening: res.thurOpeningHours,
          thurClosing: res.thurClosingHours,
          friOpening: res.friOpeningHours,
          friClosing: res.friClosingHours,
          satOpening: res.satOpeningHours,
          satClosing: res.satClosingHours,
          sunOpening: res.sunOpeningHours,
          sunClosing: res.sunClosingHours,
          provider_id: res.provider_id,
        });
      }
    }
    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  // console log to check errors
  useEffect(() => {
    console.log(formState);
  }, formState);

  const handleSubmit = (e) => {
    // e.preventDefault();

    let body = {
      name: formik.values.name,
      monOpeningHours: formik.values.monOpening,
      monClosingHours: formik.values.monClosing,
      tueOpeningHours: formik.values.tueOpening,
      tueClosingHours: formik.values.tueClosing,
      wedOpeningHours: formik.values.wedOpening,
      wedClosingHours: formik.values.wedClosing,
      thurOpeningHours: formik.values.thurOpening,
      thurClosingHours: formik.values.thurClosing,
      friOpeningHours: formik.values.friOpening,
      friClosingHours: formik.values.friClosing,
      satOpeningHours: formik.values.satOpening,
      satClosingHours: formik.values.satClosing,
      sunOpeningHours: formik.values.sunOpening,
      sunClosingHours: formik.values.sunClosing,
      provider_id: formik.values.provider_id,
    };

    async function updateData() {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      console.log("body" + JSON.stringify(body));

      const response = await fetch(
        `https://is3106-dropandgo.herokuapp.com/businessHours/update/${businessHoursId}`,
        settings
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      if (!res) {
        window.alert(`Business Hours not found`);
        return;
      }
    }
    updateData();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formState,

    onSubmit: function (values) {
      handleSubmit();
      alert(`${formState.name} Business Hours has been updated!`);
      navigate(`/provider/view-business-hours`);
    },

    validationSchema: yup.object({
      monOpening: yup.string().label("This").required(),
      monClosing: yup.string().label("This").required(),
      tueOpening: yup.string().label("This").required(),
      tueClosing: yup.string().label("This").required(),
      wedOpening: yup.string().label("This").required(),
      wedClosing: yup.string().label("This").required(),
      thurOpening: yup.string().label("This").required(),
      thurClosing: yup.string().label("This").required(),
      friOpening: yup.string().label("This").required(),
      friClosing: yup.string().label("This").required(),
      satOpening: yup.string().label("This").required(),
      satClosing: yup.string().label("This").required(),
      sunOpening: yup.string().label("This").required(),
      sunClosing: yup.string().label("This").required(),
    }),
  });

  // the menu on top
  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">
                Edit Business Hours: {formState.name}
              </p>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Monday:</p>
                  <div>
                    <input
                      type="time"
                      name="monOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.monOpening && formik.errors.monOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.monOpening}
                    />
                    {formik.touched.monOpening && formik.errors.monOpening && (
                      <span className="text-red-400">
                        {formik.errors.monOpening}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="monClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.monClosing && formik.errors.monClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.monClosing}
                    />
                    {formik.touched.monClosing && formik.errors.monClosing && (
                      <span className="text-red-400">
                        {formik.errors.monClosing}
                      </span>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Tuesday:</p>
                  <div>
                    <input
                      type="time"
                      name="tueOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.tueOpening && formik.errors.tueOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tueOpening}
                    />
                    {formik.touched.tueOpening && formik.errors.tueOpening && (
                      <span className="text-red-400">
                        {formik.errors.tueOpening}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="tueClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.tueClosing && formik.errors.tueClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tueClosing}
                    />
                    {formik.touched.tueClosing && formik.errors.tueClosing && (
                      <span className="text-red-400">
                        {formik.errors.tueClosing}
                      </span>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Wednesday:</p>
                  <div>
                    <input
                      type="time"
                      name="wedOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.wedOpening && formik.errors.wedOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.wedOpening}
                    />
                    {formik.touched.wedOpening && formik.errors.wedOpening && (
                      <span className="text-red-400">
                        {formik.errors.wedOpening}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="wedClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.wedClosing && formik.errors.wedClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.wedClosing}
                    />
                    {formik.touched.wedClosing && formik.errors.wedClosing && (
                      <span className="text-red-400">
                        {formik.errors.wedClosing}
                      </span>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Thursday:</p>
                  <div>
                    <input
                      type="time"
                      name="thurOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.thurOpening && formik.errors.thurOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.thurOpening}
                    />
                    {formik.touched.thurOpening &&
                      formik.errors.thurOpening && (
                        <span className="text-red-400">
                          {formik.errors.thurOpening}
                        </span>
                      )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="thurClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.thurClosing && formik.errors.thurClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.thurClosing}
                    />
                    {formik.touched.thurClosing &&
                      formik.errors.thurClosing && (
                        <span className="text-red-400">
                          {formik.errors.thurClosing}
                        </span>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Friday:</p>
                  <div>
                    <input
                      type="time"
                      name="friOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.friOpening && formik.errors.friOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.friOpening}
                    />
                    {formik.touched.friOpening && formik.errors.friOpening && (
                      <span className="text-red-400">
                        {formik.errors.friOpening}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="friClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.friClosing && formik.errors.friClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.friClosing}
                    />
                    {formik.touched.friClosing && formik.errors.friClosing && (
                      <span className="text-red-400">
                        {formik.errors.friClosing}
                      </span>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Saturday:</p>
                  <div>
                    <input
                      type="time"
                      name="satOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.satOpening && formik.errors.satOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.satOpening}
                    />
                    {formik.touched.satOpening && formik.errors.satOpening && (
                      <span className="text-red-400">
                        {formik.errors.satOpening}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="satClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.satClosing && formik.errors.satClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.satClosing}
                    />
                    {formik.touched.satClosing && formik.errors.satClosing && (
                      <span className="text-red-400">
                        {formik.errors.satClosing}
                      </span>
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
                <div className="grid grid-cols-4">
                  <p className="mt-1.5 text-md font-medium py-2">Sunday:</p>
                  <div>
                    <input
                      type="time"
                      name="sunOpening"
                      placeholder="Opening Hour"
                      className={`w-full appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.sunOpening && formik.errors.sunOpening
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sunOpening}
                    />
                    {formik.touched.sunOpening && formik.errors.sunOpening && (
                      <span className="text-red-400">
                        {formik.errors.sunOpening}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 text-center">to</div>{" "}
                  <div>
                    <input
                      type="time"
                      name="sunClosing"
                      placeholder="Closing Hour"
                      className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
                    ${
                      formik.touched.sunClosing && formik.errors.sunClosing
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sunClosing}
                    />
                    {formik.touched.sunClosing && formik.errors.sunClosing && (
                      <span className="text-red-400">
                        {formik.errors.sunClosing}
                      </span>
                    )}
                  </div>
                </div>
              </label>
              {/* </div> */}
            </div>
            <button
              className="w-full bg-blue-500 rounded p-3 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBusinessHours;

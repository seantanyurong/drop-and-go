import { useState } from "react";
import ImageUploadPreviewComponent from "../../ui/ImageUploadPreviewComponent";
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloudinaryUploadWidget from "../../ui/CloudinaryUploadWidget";



const AddLocation = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);
  const [inputs, setInputs, setSelectedFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);

  }

  const handleFileInput = (event) => {
    setSelectedFiles(event.target.files);
  }

  const formik = useFormik({
    initialValues: {
      shopName: '',
      capacity: '',
      address: '',
      directions: '',
      openingHours: '',
      hourlyFee: '',
      dailyFee: ''
    },
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.profession}. 
        Age: ${values.age}`);
    },
    validationSchema: yup.object({
      shopName: yup.string()
        .label('Shop name')
        .required(),
      capacity: yup.number()
        .label('Capacity')
        .min(1, 'The capacity must be minimally 1')
        .required(),
      address: yup.string()
        .label("Address")
        .required(),
      about: '',
      openingHours: '',
      hourlyFee: yup.number()
        .label("Hourly Fee")
        .required(),
      dailyFee: yup.number()
        .label("Daily Fee")
        .required()

    })
  })


  // the menu on top
  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">Add Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {/* {AddLocationForm()} */}
        <form onSubmit={formik.handleSubmit}>
          <label>
            <h3 className="font-semibold">Basic Profile</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Provide the name of your shop
            </p>
            <input
              type="text"
              placeholder="Shop Name"
              name="shopName"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.shopName && formik.errors.shopName ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.shopName} />
            {formik.touched.shopName && formik.errors.shopName &&
              (<span className='text-red-400'>{formik.errors.shopName}</span>)}
          </label>
          <label>
            <p className="mt-1.5 text-xs font-medium py-2">
              Provide some additional information about your shop
            </p>
            <input
              type="text"
              placeholder="E.g. Your one stop place for baggage storage!"
              name="about"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.about && formik.errors.directions ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.about} />
            {formik.touched.about && formik.errors.about &&
              (<span className='text-red-400'>{formik.errors.about}</span>)}
          </label>

          <label>
            <p className="mt-1.5 text-xs font-medium py-2" >
              Indicate the total number of bags you have space for (Volume of 1 bag: 55x35x20cm = 34L)
            </p>
            <input
              type="number"
              name="capacity"
              placeholder="Capacity (bags)"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary-200
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.capacity && formik.errors.capacity &&
              (<span className='text-red-400'>{formik.errors.capacity}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Address</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Use the search field below to find the shop on Google Maps.
            </p>
            {/* Need to change to map */}

            <input
              type="text"
              placeholder="Address"
              name="address"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.address && formik.errors.address ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
            {formik.touched.address && formik.errors.address &&
              (<span className='text-red-400'>{formik.errors.address}</span>)}
          </label>

          <label>
            <h3 className="mt-12 font-semibold ">Regular Opening Hours</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Indicate your weekly opening hours so customers know when they can drop their bags in your shop
            </p>
            {/* Need to change to calendar */}
            <input
              type="text"
              placeholder="Opening Hours"
              name="openingHours"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.openingHours && formik.errors.openingHours ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.openingHours} />
            {formik.touched.openingHours && formik.errors.openingHours &&
              (<span className='text-red-400'>{formik.errors.openingHours}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Price Per Hour ** </h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Hourly Fee per baggage for each size
            </p>
            <input
              type="text"
              placeholder="Per hour fee"
              name="hourlyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.hourlyFee && formik.errors.hourlyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.hourlyFee} />
            {formik.touched.hourlyFee && formik.errors.hourlyFee &&
              (<span className='text-red-400'>{formik.errors.hourlyFee}</span>)}
          </label>
          <label>
            <p className="mt-1.5 text-xs font-medium py-2">
              Daily Fee per baggage
            </p>
            <input
              type="text"
              placeholder="Daily fee"
              name="dailyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.dailyFee && formik.errors.dailyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dailyFee} />
            {formik.touched.dailyFee && formik.errors.dailyFee &&
              (<span className='text-red-400'>{formik.errors.dailyFee}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Images</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Upload one or more images of the shop, preferably showing the street
            </p>
            <CloudinaryUploadWidget />
            {/* <ImageUploadPreviewComponent /> */}
            {/* <input type="file" multiple onChange={handleFileInput} /> */}
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddLocation;

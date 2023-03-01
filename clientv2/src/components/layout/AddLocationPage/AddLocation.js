import { useState } from "react";
import ImageUploadPreviewComponent from "../../ui/ImageUploadPreviewComponent";
import { useFormik } from 'formik';
import * as yup from 'yup';



const AddLocation = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);


  const AddLocationForm = () => {
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
        contactName: '',
        email: '',
        phone: '',
        billingEmail: '',
        address: '',
        directions: '',
        openingHours: '',
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
        contactName: yup.string()
          .label('Contact Name')
          .required(),
        email: yup.string()
          .label("Email")
          .email()
          .required(),
        phone: yup.number()
          .label('Mobile Number')
          .required(),
        billingEmail: yup.string()
          .label("Billing email")
          .email()
          .required(),
        address: yup.string()
          .label("Address")
          .required(),
        directions: '',
        openingHours: ''
      })
    })


    return (
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
          <p className="mt-1.5 text-xs font-medium py-2" >
            Indicate the total number of bags you have space for
          </p>
          <input
            type="number"
            name="capacity"
            placeholder="Capacity (bags)"
            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.capacity && formik.errors.capacity &&
            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
        </label>
        <label>
          <p className="mt-1.5 text-xs font-medium py-2" >
            Provide the details of the primary contact name for the shop
          </p>
          <div>
            <input
              type="text"
              name="contactName"
              placeholder="Primary Contact Name"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.contactName && formik.errors.contactName ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contactName} />
            {formik.touched.contactName && formik.errors.contactName &&
              (<span className='text-red-400'>{formik.errors.contactName}</span>)}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email &&
              (<span className='text-red-400'>{formik.errors.email}</span>)}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Mobile phone"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
              ${formik.touched.phone && formik.errors.phone ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            {formik.touched.phone && formik.errors.phone &&
              (<span className='text-red-400'>{formik.errors.phone}</span>)}
          </div>
        </label>
        <label>
          <h3 className="mt-12 font-semibold ">Billing Contact</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Provide the email address that will recieve invoices
          </p>
          <input
            type="text"
            placeholder="Email"
            name="billingEmail"
            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.billingEmail && formik.errors.billingEmail ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.billingEmail} />
          {formik.touched.billingEmail && formik.errors.billingEmail &&
            (<span className='text-red-400'>{formik.errors.billingEmail}</span>)}
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
          <p className="mt-1.5 text-xs font-medium py-2">
            If it is difficult to find the location, please provide additional directions
          </p>
          <input
            type="text"
            placeholder="E.g. Once you reach end of the street, you will find us at the right corner"
            name="directions"
            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.directions && formik.errors.directions ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.directions} />
          {formik.touched.directions && formik.errors.directions &&
            (<span className='text-red-400'>{formik.errors.directions}</span>)}
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
          <h3 className="mt-12 font-semibold ">Images</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Upload one or more images of the shop, preferably showing the street
          </p>
          <ImageUploadPreviewComponent />
          {/* <input type="file" multiple onChange={handleFileInput} /> */}
        </label>
        <input type="submit" />
      </form>
    );
  }

  // function for content in webpage
  const renderSwitch = () => {
    switch (activeMenuItem) {
      case 0:
        return (
          <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover">
            <div className="flex items-center mb-1 justify-between">
              <div className="flex space-x-3 items-center">
                <h3 className="font-semibold">Wet Designs Pte Ltd</h3>
                <p className="rounded-md bg-text-dark text-text-main p-1.5 text-xs font-medium">
                  Confirmed
                </p>
                <p className="rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium">
                  Singapore
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="font-medium text-sm">1</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-light">
                <span className="font-semibold">You</span> confirmed booking a
                minute ago
              </p>
            </div>
          </div>
        );
      case 1:
        return <p>Completed bookings</p>;
      case 2:
        return <p>Cancelled bookings</p>;
      default:
        return <p>All bookings</p>;
    }
  };


  // the menu on top
  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">Add Location</p>
            </div>

            {/* Navigation */}

            <nav className="flex grow mt-4 sm:mt-0">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li
                  onClick={() => setActiveMenuItem(0)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 0
                    ? "bg-text-main text-text-dark"
                    : "text-text-main"
                    } `}
                >
                  Active
                </li>
                <li
                  onClick={() => setActiveMenuItem(1)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 1
                    ? "bg-text-main text-text-dark"
                    : "text-text-main"
                    } `}
                >
                  Completed
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Results */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {/* {renderSwitch()} */}
        {AddLocationForm()}
      </div>
    </div>
  );
};

export default AddLocation;

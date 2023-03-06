import { useState } from "react";
import ImageUploadPreviewComponent from "../../ui/ImageUploadPreviewComponent";
import { useFormik } from 'formik';
import * as yup from 'yup';



const EditLocation = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);


  const EditLocationForm = () => {
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
        openingHours: '',
        hourlyFee: yup.number()
          .label("Hourly Fee")
          .required(),
        dailyFee: yup.number()
          .label("Daily Fee")
          .required()

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
            Indicate the total number of bags you have space for (Volume of 1 bag: 55x35x20cm = 34L)
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
          <h3 className="mt-12 font-semibold ">Fees</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Hourly Fee per baggage
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
          <ImageUploadPreviewComponent />
          {/* <input type="file" multiple onChange={handleFileInput} /> */}
        </label>
        <input type="submit" />
      </form>
    );
  }

  // the menu on top
  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">Edit Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {EditLocationForm()}
      </div>
    </div>
  );
};

export default EditLocation;

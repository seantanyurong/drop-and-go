import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloudinaryUploadWidget from "../../ui/CloudinaryUploadWidget";
import Map from "../../ui/Maps";

const AddLocation = () => {

  const [formState, setFormState] = useState({
    shopName: "",
    capacity: "",
    address: "",
    about: "",
    openingHours: "",
    smallHourlyFee: "",
    mediumHourlyFee: "",
    largeHourlyFee: "",
    smallDailyFee: "",
    mediumDailyFee: "",
    largeDailyFee: "",
    latitude: "",
    longitude: "",
    postal: "",
    dateListed: "",
    displayPicture: "",
    provider_id: ""

  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:6003/listing/${id}
      `);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      console.log(res);
      console.log(res.name);
      if (!res) {
        window.alert(`Listing with id ${id} not found`);
        return;
      } else {
        const adrs = res.address;
        console.log(adrs);

        // setting initial form state
        setFormState({
          shopName: res.name,
          capacity: res.capacity,
          address: res.address,
          about: res.about,
          openingHours: res.openingHours,
          smallHourlyFee: res.pricePerHour[0],
          mediumHourlyFee: res.pricePerHour[1],
          largeHourlyFee: res.pricePerHour[2],
          smallDailyFee: res.pricePerDay[0],
          mediumDailyFee: res.pricePerDay[1],
          largeDailyFee: res.pricePerDay[2],
          latitude: res.latitude,
          longitude: res.longitude,
          postal: res.postal,
          dateListed: res.dateListed,
          displayPicture: res.displayPicture,
          provider_id: res.provider_id
        });
      }
    }
    fetchData();
    console.log(formState);

    return;
    // eslint-disable-next-line
  }, []);

  // not sure why this is not working
  useEffect(() => { console.log(formState) }, formState)



  let [hours, setHours] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:6003/businessHours`);


      if (!res.ok) {
        const message = `An error has occurred: ${res.statusText}`;
        window.alert(message);
        return;
      }

      const businessHours = await res.json();
      if (!businessHours) {
        window.alert(`Business Hours not found`);
        return;
      } else {
        setHours(businessHours);
        console.log(businessHours);

      }
    }

    fetchData();
    return;

  }, []);

  const handleUpload = (url) => {
    formik.values.displayPicture = url;
  }

  const handleMapSearch = (address) => {
    formik.values.address = address;
    console.log("formik value is " + formik.values.address);

  }

  const handleAddressDetails = (lat, lng, postal) => {
    formik.values.latitude = lat;
    formik.values.longitude = lng;
    formik.values.postal = postal;

    console.log("lat long postal is " + lat + " " + lng + " " + postal);
  }

  const handleSubmit = (e) => {

    let body = {
      shopName: formik.values.shopName,
      capacity: formik.values.capacity,
      address: formik.values.address,
      about: formik.values.about,
      openingHours: formik.values.openingHours,
      postal: formik.values.postal,
      latitude: formik.values.latitude,
      longitude: formik.values.longitude,
      pricePerDay: [formik.values.smallDailyFee, formik.values.mediumDailyFee, formik.values.largeDailyFee],
      pricePerHour: [formik.values.smallHourlyFee, formik.values.mediumHourlyFee, formik.values.largeHourlyFee],
      dateListed: formik.values.dateListed,
      review_ids: [],
      provider_id: formik.values.provider_id,
      booking_ids: [],
      displayPicture: formik.values.displayPicture
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

      const response = await fetch(`http://localhost:6003/listing/update/${id}`, settings);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      if (!res) {
        window.alert(`Listing not found`);
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
      alert(`${formState.shopName} Listing has been updated!`);
      navigate(`/provider/view-locations`);

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
      about: yup.string()
        .label('About')
        .min(5, 'Must have more than 5 characters')
        .required(),
      openingHours: yup.string()
        .label("Opening Hours")
        .test('selected-option', 'Please select an option', function (value) {
          return value !== 'Select an option'
        })
        .required(),
      smallHourlyFee: yup.number()
        .label("Hourly Fee")
        .required(),
      mediumHourlyFee: yup.number()
        .label("Hourly Fee")
        .required(),
      largeHourlyFee: yup.number()
        .label("Hourly Fee")
        .required(),
      smallDailyFee: yup.number()
        .label("Daily Fee")
        .required(),
      mediumDailyFee: yup.number()
        .label("Daily Fee")
        .required(),
      largeDailyFee: yup.number()
        .label("Daily Fee")
        .required(),
      latitude: yup.number()
        .label("Latitude")
        .required(),
      longitude: yup.number()
        .label("Longitude")
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
              <p className="text-text-main text-xl">Edit Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
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
            ${formik.touched.about && formik.errors.about ? 'border-red-400' : 'border-gray-300'}`}
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
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.capacity} />
            {formik.touched.capacity && formik.errors.capacity &&
              (<span className='text-red-400'>{formik.errors.capacity}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Address</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Use the search field below to find the shop on Google Maps.
            </p>
            <p className="text-xs font-medium pb-2">
              First, enter your address and select from the drop down. Then, enter your unit number.
            </p>

            <Map onSelect={handleAddressDetails} failValidation={formik.touched.address && formik.errors.address} onSearch={handleMapSearch} formError={formik.errors.address} initVal={formik.values.address} />
          </label>

          <label>
            <h3 className="mt-12 font-semibold ">Regular Opening Hours</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Indicate your weekly opening hours so customers know when they can drop their bags in your shop
            </p>
            <select
              name="openingHours"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 
            ${formik.touched.openingHours && formik.errors.openingHours ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} value={formik.values.openingHours}>
              <option value='Select an option'>Select an option</option>
              {hours.map(businessHourSetting => (
                <option value={businessHourSetting._id} key={businessHourSetting.id} >{businessHourSetting.name}</option>
              ))
              }
            </select>
            {formik.touched.openingHours && formik.errors.openingHours &&
              (<span className='text-red-400'>{formik.errors.openingHours}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Price Per Hour ** </h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Small baggage
            </p>
            <input
              type="number"
              placeholder="Per hour fee"
              name="smallHourlyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.smallHourlyFee && formik.errors.smallHourlyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.smallHourlyFee} />
            {formik.touched.smallHourlyFee && formik.errors.smallHourlyFee &&
              (<span className='text-red-400'>{formik.errors.smallHourlyFee}</span>)}
          </label>
          <label>
            <p className="mt-1.5 text-xs font-medium py-2">
              Medium baggage
            </p>
            <input
              type="number"
              placeholder="Per hour fee"
              name="mediumHourlyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.mediumHourlyFee && formik.errors.mediumHourlyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mediumHourlyFee} />
            {formik.touched.mediumHourlyFee && formik.errors.mediumHourlyFee &&
              (<span className='text-red-400'>{formik.errors.mediumHourlyFee}</span>)}
          </label>
          <label>
            <p className="mt-1.5 text-xs font-medium py-2">
              Large baggage
            </p>
            <input
              type="number"
              placeholder="Per hour fee"
              name="largeHourlyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.largeHourlyFee && formik.errors.largeHourlyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.largeHourlyFee} />
            {formik.touched.largeHourlyFee && formik.errors.largeHourlyFee &&
              (<span className='text-red-400'>{formik.errors.largeHourlyFee}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Price Per Day</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Small baggage
            </p>
            <input
              type="number"
              placeholder="Per hour fee"
              name="smallDailyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.smallDailyFee && formik.errors.smallDailyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.smallDailyFee} />
            {formik.touched.smallDailyFee && formik.errors.smallDailyFee &&
              (<span className='text-red-400'>{formik.errors.smallDailyFee}</span>)}
          </label>
          <label>
            <p className="mt-1.5 text-xs font-medium py-2">
              Medium baggage
            </p>
            <input
              type="number"
              placeholder="Per hour fee"
              name="mediumDailyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.mediumDailyFee && formik.errors.mediumDailyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mediumDailyFee} />
            {formik.touched.mediumDailyFee && formik.errors.mediumDailyFee &&
              (<span className='text-red-400'>{formik.errors.mediumDailyFee}</span>)}
          </label>
          <label>
            <p className="mt-1.5 text-xs font-medium py-2">
              Large baggage
            </p>
            <input
              type="number"
              placeholder="Per hour fee"
              name="largeDailyFee"
              className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.largeDailyFee && formik.errors.largeDailyFee ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.largeDailyFee} />
            {formik.touched.largeDailyFee && formik.errors.largeDailyFee &&
              (<span className='text-red-400'>{formik.errors.largeDailyFee}</span>)}
          </label>
          <label>
            <h3 className="mt-12 font-semibold ">Images</h3>
            <p className="mt-1.5 text-xs font-medium py-2">
              Upload one or more images of the shop, preferably showing the street
            </p>
            <CloudinaryUploadWidget onUpload={handleUpload} />
          </label>
          <input className='w-full cursor-pointer bg-blue-500 rounded p-3 text-white mt-4' type="submit" />
        </form>
      </div>
    </div>
  );
};


export default AddLocation;

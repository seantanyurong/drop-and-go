import { useState, useRef } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';

const EditBusinessHours = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const formik = useFormik({
        initialValues: {
            monOpening: '',
            monClosing: '',
            tueOpening: '',
            tueClosing: '',
            wedOpening: '',
            wedClosing: '',
            thurOpening: '',
            thurClosing: '',
            friOpening: '',
            friClosing: '',
            satOpening: '',
            satClosing: '',
            sunOpening: '',
            sunClosing: '',
        },
        onSubmit: function (values) {
            alert(`You have updated the business hours for`);
        },
        validationSchema: yup.object({
            shopName: yup.string()
                .label('Opening Hour')
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
                            <p className="text-text-main text-xl">Edit Business Hours</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
                <form onSubmit={formik.handleSubmit}>
                    {/* <div id="react-root"></div> */}
                    <script type="module" src="../../ui/index.jsx"></script>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Monday
                        </p>

                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Tuesday          </p>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Wednesday          </p>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Thursday          </p>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Friday          </p>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Saturday          </p>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <label>
                        <p className="mt-1.5 text-xs font-medium py-2" >
                            Sunday          </p>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Opening Hour"
                            className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300
            ${formik.touched.capacity && formik.errors.capacity ? 'border-red-400' : 'border-gray-300'}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.touched.capacity && formik.errors.capacity &&
                            (<span className='text-red-400'>{formik.errors.capacity}</span>)}
                    </label>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default { EditBusinessHours };


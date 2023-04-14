import { useEffect, useRef } from "react"


const CloudinaryUploadWidget = ({ onUpload }) => {
    const ref = useRef();
    const widgetref = useRef();
    // assign cloudinary widget to ref to prevent recreating in same component
    useEffect(() => {
        ref.current = window.cloudinary;
        widgetref.current = ref.current.createUploadWidget({
            cloudName: 'djy7am9b5',
            uploadPreset: 'dropandgo'
        }, function (error, result) {
            // returns url when upload is successful
            if (result.event === "success") {
                const url = result.info.secure_url;
                console.log(url);
                onUpload(url);
            }
        });
    }, [onUpload])

    // button opens the widget
    return (
        <button type="button" className='w-full bg-green-500 rounded p-3 text-white' onClick={() => widgetref.current.open()}>
            Upload
        </button>
    )
}

export default CloudinaryUploadWidget;
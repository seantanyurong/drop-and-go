import { useEffect, useRef } from "react"


const CloudinaryUploadWidget = () => {
    const ref = useRef();
    const widgetref = useRef();
    useEffect(() => {
        ref.current = window.cloudinary;
        widgetref.current = ref.current.createUploadWidget({
            cloudName: 'dt2nnnvpe',
            uploadPreset: 'dropandgo'
        }, function (error, result) {
        });
    }, [])

    return (
        <button onClick={() => widgetref.current.open()}>
            Upload!!!!!!!
        </button>
    )
}

export default CloudinaryUploadWidget;
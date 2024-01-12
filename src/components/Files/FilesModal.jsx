import { useRef, useState } from 'react';
import { ImCross } from 'react-icons/im';
import axios from 'axios';
import toast from 'react-hot-toast';

const FilesModal = ({ taskId, setToggle, toggle }) => {
    const [files, setFiles] = useState([]);
    const dialogRef = useRef(null);

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        formData.append('taskId', taskId);

        try {
            const response = await axios.post('http://localhost:5000/files', formData);
            console.log('Files uploaded successfully:', response.data);
            toast.success('Files uploaded successfully');
            setToggle(!toggle)

            // Reset the file input by clearing its value
            if (dialogRef.current) {
                const fileInput = dialogRef.current.querySelector('input[type="file"]');
                if (fileInput) {
                    fileInput.value = ''; // Clear the value to reset the file input
                }
            }

            // Close the dialog
            if (dialogRef.current) {
                dialogRef.current.close();
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Failed to upload files');
        }
    };

    const handleClose = () => {
        // Reset the file input when the modal is closed
        if (dialogRef.current) {
            const fileInput = dialogRef.current.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.value = ''; // Clear the value to reset the file input
            }
        }
    };

    return (
        <dialog id="filesModal" className="modal modal-bottom sm:modal-middle" ref={dialogRef} onClose={handleClose}>
            <div className="modal-box relative p-7 md:p-[48px] !max-w-[800px]">
                <div className="w-full">
                    <div className="modal-content commonScrollableModal">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Multiple Files
                            </label>
                            <label
                                className="flex items-center justify-center h-12 w-full bg-gray-200 rounded-md cursor-pointer"
                            >
                                <svg
                                    className="w-6 h-6 mr-2 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    ></path>
                                </svg>
                                <span className="text-gray-700">Choose Files</span>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    multiple
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <button
                            onClick={handleUpload}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Upload
                        </button>
                        {files.length > 0 && (
                            <div className="mt-4">
                                <p className="text-gray-500 text-sm font-medium">Selected Files:</p>
                                <ul className="mt-2 border-t border-gray-200 divide-y divide-gray-200">
                                    {Array.from(files).map((file, index) => (
                                        <li key={index} className="flex justify-between items-center py-2">
                                            <span className="flex-1 truncate">{file.name}</span>
                                            <span className="text-gray-500 ml-2">{file.name.split('.').pop()}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="modal-action justify-center mt-0">
                    <form method="dialog">
                        <button className="px-2 text-sm absolute right-3 top-4">
                            <ImCross />
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default FilesModal;

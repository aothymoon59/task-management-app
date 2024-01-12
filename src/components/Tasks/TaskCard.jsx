import { FaLayerGroup } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskCard = ({ task, setTaskId }) => {
    const { taskId, client, assignedBy, description, assignedTo, comments, date } = task

    const handleOpenFilesUpload = (id) => {
        document.getElementById('filesModal').showModal()
        setTaskId(id)
    }

    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get(`https://task-management-backend-tan.vercel.app/files/task/${taskId}`);
                setFiles(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
                // Handle error, show error message, etc.
            }
        };

        fetchFiles();
    }, [taskId]);

    return (
        <div className="bg-white p-2 rounded-md">
            {/* client name and assignee name  */}
            <div className="flex justify-between gap-2 mb-3">
                <div className="flex items-center gap-1">
                    <img className="user-img" src={client?.photoUrl} alt={client?.name} />
                    <p className="font-medium text-sm">{client?.name}</p>
                </div>
                <div className="flex items-center gap-1">
                    <img className="user-img" src={assignedBy?.photoUrl} alt={assignedBy?.name} />
                    <p className="font-medium text-sm">{assignedBy?.name}</p>
                </div>
            </div>
            {/* description  */}
            <div className="flex items-center gap-2 justify-between mb-3">
                <div className="flex items-center gap-1 w-[70%]">
                    <div>
                        <FaLayerGroup className="text-sm" />
                    </div>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
                </div>
                <div className="flex items-center gap-1 bg-[#F2F4F7] p-1 w-fit">
                    <div>
                        <PiNotepadFill className="text-sm" />
                    </div>
                    <p className="text-sm rounded-md">1/2</p>
                </div>
            </div>
            {/* assigned to, comments, upload files and date  */}
            <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    {assignedTo.slice(0, 2).map((item, i) => <img key={i} src={item?.photoUrl} className="user-img" />)}
                    <div className="bg-[#E8EEF3] text-black w-7 h-7 grid place-content-center rounded-full text-sm">
                        {assignedTo?.length - 1}+
                    </div>
                </div>
                {/* comments  */}
                <div className="flex items-center gap-1 text-sm">
                    <div>
                        <FaRegComments />
                    </div>
                    <p>{comments}</p>
                </div>
                {/* upload files  */}
                <div className="flex items-center gap-1 text-sm">
                    <button title="Upload Files" onClick={() => handleOpenFilesUpload(taskId)} className="cursor-pointer">
                        <HiLink />
                    </button>
                    <p>{files?.length > 0 ? files?.length : 0}</p>
                </div>
                {/* date  */}
                <div className="flex items-center gap-1 text-sm">
                    <div>
                        <FaCalendarAlt />
                    </div>
                    <p className="whitespace-nowrap">{date}</p>
                </div>
            </div>
        </div >
    );
};

export default TaskCard;
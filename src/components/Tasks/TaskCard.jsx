import { FaLayerGroup } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";

const TaskCard = ({ task }) => {
    console.log(task)
    const { client, assignedBy, description, assignedTo, comments, date } = task
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
                    <p className="font-medium text-xs">{assignedBy?.name}</p>
                </div>
            </div>
            {/* description  */}
            <div className="flex items-center gap-2 justify-between">
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
                    <button className="cursor-pointer">
                        <HiLink />
                    </button>
                    <p>25</p>
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
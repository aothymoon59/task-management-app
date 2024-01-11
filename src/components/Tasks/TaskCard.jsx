import { FaLayerGroup } from "react-icons/fa";

const TaskCard = ({ task }) => {
    console.log(task)
    const { client, assignedBy, description } = task
    return (
        <div className="bg-white p-1 rounded-md">
            <div className="flex justify-between gap-2 mb-3">
                <div className="flex items-center gap-1">
                    <img className="w-6 h-6 rounded-full object-cover object-center" src={client?.photoUrl} alt={client?.name} />
                    <p className="font-medium text-sm">{client?.name}</p>
                </div>
                <div className="flex items-center gap-1">
                    <img className="w-6 h-6 rounded-full object-cover object-center" src={assignedBy?.photoUrl} alt={assignedBy?.name} />
                    <p className="font-medium text-xs">{assignedBy?.name}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-1 w-[70%]">
                    <div>
                        <FaLayerGroup className="text-sm" />
                    </div>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
                </div>
                <div className="flex items-center gap-1 bg-[#F2F4F7] p-1 w-fit">
                    <div>
                        <FaLayerGroup className="text-sm" />
                    </div>
                    <p className="text-sm rounded-md">1/2</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;

// white - space: nowrap;
// width: 50px;
// overflow: hidden;
// text - overflow: ellipsis;
// border: 1px solid #000000;
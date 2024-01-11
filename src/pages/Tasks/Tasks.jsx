import { useEffect, useState } from "react";

const Tasks = () => {

    return (
        <div className="overflow-x-auto h-[calc(100vh-40px)] border m-5">
            <div className="flex gap-5 p-5">
                {/* Incomplete tasks  */}
                <div className="w-[345px] bg-[#F2F4F7] p-3">
                    <div className="flex sticky top-0 justify-between rounded mb-4">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 bg-[#D21010] rounded-l-full"></div>
                            <h1 className="text-lg font-medium">Incomplete</h1>
                        </div>
                        <p className="bg-[#E8EEF3] text-black w-6 h-6 grid place-content-center rounded-md text-lg font-medium">
                            0
                        </p>
                    </div>
                    <div className="space-y-3">
                        {/* {pendingTasks.map((item) => <TaskCard task={item} key={item?.id} />)} */}
                        Task Card Here
                    </div>
                </div>
                {/* To Do tasks  */}
                <div className="w-[345px] bg-[#F2F4F7] p-3">
                    <div className="flex sticky top-0 justify-between rounded-md mb-4">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 bg-[#00B5FF] rounded-l-full"></div>
                            <h1 className="text-lg font-medium">To Do</h1>
                        </div>
                        <p className="bg-[#E8EEF3] text-black w-6 h-6 grid place-content-center rounded-md text-lg font-medium">
                            0
                        </p>
                    </div>
                    <div className="space-y-3">
                        {/* {pendingTasks.map((item) => <TaskCard task={item} key={item?.id} />)} */}
                        Task Card Here
                    </div>
                </div>
                {/* Doing Tasks */}
                <div className="w-[345px] bg-[#F2F4F7] p-3">
                    <div className="flex sticky top-0 justify-between rounded-md mb-4">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 bg-[#FFE700] rounded-l-full"></div>
                            <h2 className="text-lg font-medium">Doing</h2>
                        </div>
                        <p className="bg-[#E8EEF3] text-black w-6 h-6 grid place-content-center rounded-md text-lg font-medium">
                            0
                        </p>
                    </div>
                    <div className="space-y-3">
                        {/* {pendingTasks.map((item) => <TaskCard task={item} key={item?.id} />)} */}
                        Task Card Here
                    </div>
                </div>
                {/* Under Review Tasks  */}
                <div className="w-[345px] bg-[#F2F4F7] p-3">
                    <div className="flex sticky top-0 justify-between rounded-md mb-4">
                        <h1 className="text-lg font-medium">Under Review</h1>
                        <p className="bg-[#E8EEF3] text-black w-6 h-6 grid place-content-center rounded-md text-lg font-medium">
                            0
                        </p>
                    </div>
                    <div className="space-y-3">
                        {/* {pendingTasks.map((item) => <TaskCard task={item} key={item?.id} />)} */}
                        Task Card Here
                    </div>
                </div>
                {/* Completed Tasks */}
                <div className="w-[345px] bg-[#F2F4F7] p-3">
                    <div className="flex sticky top-0 justify-between rounded-md mb-4">
                        <h1 className="text-lg font-medium">Completed</h1>
                        <p className="bg-[#E8EEF3] text-black w-6 h-6 grid place-content-center rounded-md text-lg font-medium">
                            0
                        </p>
                    </div>
                    <div className="space-y-3">
                        {/* {pendingTasks.map((item) => <TaskCard task={item} key={item?.id} />)} */}
                        Task Card Here
                    </div>
                </div>
                {/* Overdated Tasks  */}
                <div className="w-[345px] bg-[#F2F4F7] p-3">
                    <div className="flex sticky top-0 justify-between rounded-md mb-4">
                        <h1 className="text-lg font-medium">Overdated</h1>
                        <p className="bg-[#E8EEF3] text-black w-6 h-6 grid place-content-center rounded-md text-lg font-medium">
                            0
                        </p>
                    </div>
                    <div className="space-y-3">
                        {/* {pendingTasks.map((item) => <TaskCard task={item} key={item?.id} />)} */}
                        Task Card Here
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tasks;
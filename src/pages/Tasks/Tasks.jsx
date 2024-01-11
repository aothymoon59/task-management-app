import { useEffect, useState } from "react";
import TaskCard from "../../components/Tasks/TaskCard";

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('/dummyTasks.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const incompleteTasks = tasks.filter(item => item.status === "Incomplete")
    const todoTasks = tasks.filter(item => item.status === "To Do")
    const doingTasks = tasks.filter(item => item.status === "Doing")
    const underReviewTasks = tasks.filter(item => item.status === "Under Review")
    const completedTasks = tasks.filter(item => item.status === "Completed")
    const overdatedTasks = tasks.filter(item => item.status === "Overdated")

    return (
        <div className="overflow-x-auto h-[calc(100vh-40px)] border m-5">
            <div className="flex flex-nowrap gap-4 p-5">
                {/* Incomplete tasks  */}
                <div className="tasks-column">
                    <div className="task-column-header">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 bg-[#D21010] rounded-l-full"></div>
                            <h1 className="text-base font-medium">Incomplete</h1>
                        </div>
                        <p className="task-count">
                            {incompleteTasks?.length}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {incompleteTasks?.map((item) => <TaskCard task={item} key={item?.id} />)}
                    </div>
                </div>
                {/* To Do tasks  */}
                <div className="tasks-column">
                    <div className="task-column-header">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 bg-[#00B5FF] rounded-l-full"></div>
                            <h1 className="text-base font-medium">To Do</h1>
                        </div>
                        <p className="task-count">
                            {todoTasks?.length}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {todoTasks.map((item) => <TaskCard task={item} key={item?.id} />)}
                    </div>
                </div>
                {/* Doing Tasks */}
                <div className="tasks-column">
                    <div className="task-column-header">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 bg-[#FFE700] rounded-l-full"></div>
                            <h2 className="text-base font-medium">Doing</h2>
                        </div>
                        <p className="task-count">
                            {doingTasks?.length}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {doingTasks.map((item) => <TaskCard task={item} key={item?.id} />)}
                    </div>
                </div>
                {/* Under Review Tasks  */}
                <div className="tasks-column">
                    <div className="task-column-header">
                        <h1 className="text-base font-medium">Under Review</h1>
                        <p className="task-count">
                            {underReviewTasks?.length}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {underReviewTasks.map((item) => <TaskCard task={item} key={item?.id} />)}
                    </div>
                </div>
                {/* Completed Tasks */}
                <div className="tasks-column">
                    <div className="task-column-header">
                        <h1 className="text-base font-medium">Completed</h1>
                        <p className="task-count">
                            {completedTasks?.length}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {completedTasks.map((item) => <TaskCard task={item} key={item?.id} />)}
                    </div>
                </div>
                {/* Overdated Tasks  */}
                <div className="tasks-column">
                    <div className="task-column-header">
                        <h1 className="text-base font-medium">Overdated</h1>
                        <p className="task-count">
                            {overdatedTasks?.length}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {overdatedTasks.map((item) => <TaskCard task={item} key={item?.id} />)}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tasks;
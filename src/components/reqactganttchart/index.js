import React from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { initTasks } from "./helper";

const currentDate = new Date();
const tasks = [
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Some Project",
        id: "ProjectSample",
        // progress: 25,
        type: "project",
        hideChildren: false
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            2,
            12,
            28
        ),
        name: "Idea",
        id: "Task 0",
        // progress: 45,
        type: "task",
        project: "ProjectSample"
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
        name: "Research",
        id: "Task 1",
        // progress: 25,
        // dependencies: ["Task 0"],
        type: "task",
        project: "ProjectSample"
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
        name: "Discussion with team",
        id: "Task 2",
        // progress: 10,
        // dependencies: ["Task 1"],
        type: "task",
        project: "ProjectSample"
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
        name: "Developing",
        id: "Task 3",
        // progress: 2,
        // dependencies: ["Task 2"],
        type: "task",
        project: "ProjectSample"
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: "Review",
        id: "Task 4",
        type: "task",
        // progress: 70,
        // dependencies: ["Task 2"],
        project: "ProjectSample"
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Release",
        id: "Task 6",
        // progress: currentDate.getMonth(),
        type: "task",
        // dependencies: ["Task 4"],
        project: "ProjectSample"
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
        name: "Party Time",
        id: "Task 9",
        // progress: 0,
        // isDisabled: true,
        type: "task",
        project: "ProjectSample"
    }
];  

function ReactGanttChart() {

    const [view, setView] = React.useState(ViewMode.Day);
    const [task, setTasks] = React.useState(tasks);
    const [isChecked, setIsChecked] = React.useState(true);
    return (
        <div>
            {/* <ViewSwitcher
                onViewModeChange={(viewMode) => setView(viewMode)}
                onViewListChange={setIsChecked}
                isChecked={isChecked}
            /> */}
            <h3>Gantt With Unlimited Height</h3>
            <Gantt
                tasks={task}
            // viewMode={view}
            />
        </div>
    )
}

export default ReactGanttChart
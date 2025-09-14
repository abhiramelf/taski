import SquarePlusInactive from "../assets/square-plus-inactive.svg";
import SquarePlusActive from "../assets/square-plus-active.svg";
import AddNote from "../assets/add-note.svg";
import Cross from "../assets/cross.svg";
import Escape from "../assets/esc-icon.png";
import { useState, useEffect } from "react";

export default function AddTask() {
    const [isHovered, setIsHovered] = useState(false);
    const [isTaskFocused, setIsTaskFocused] = useState(false);
    const [taskValue, setTaskValue] = useState('');
    const [taskInfo, setTaskInfo] = useState('');

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            setIsTaskFocused(false);
        }
    }

    function handleTaskSave() {
        let tasks = [];
        const existingTasks = localStorage.getItem('task');
        if (existingTasks) {
            try {
                const parsed = JSON.parse(existingTasks);
                if (Array.isArray(parsed)) {
                    tasks = parsed;
                }
            } catch (e) {
                // If parsing fails, start with empty array
                console.error('Failed to parse tasks from localStorage', e);
            }
        }

        if (taskValue !== '') {
            tasks.push({
                title: taskValue,
                info: taskInfo
            });
            localStorage.setItem('task', JSON.stringify(tasks));
            setTaskValue('');
            setTaskInfo('');
            setIsTaskFocused(false);
        } else {
            alert('Task cannot be empty');
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };

        
    }, []);

    return (
        <div className="add-task">
            <div className="task-info">
                <img
                    className="add-task-btn"
                    role="button"
                    src={isHovered || isTaskFocused ? SquarePlusActive : SquarePlusInactive}
                    alt="Add Task"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleTaskSave}
                />
                <input
                    className="task-input"
                    type="text"
                    placeholder="Add a new task..."
                    onFocus={() => setIsTaskFocused(true)}
                    onChange={(e) => {
                        setIsTaskFocused(true);
                        setTaskValue(e.target.value);
                    }}
                    value={taskValue}
                />
            </div>
            {isTaskFocused && (
                <div className="task-info">
                    <img className="task-note-icon" src={AddNote} alt="Add Note" />
                    <input 
                        className="task-info-input" 
                        type="text" 
                        placeholder="Add a note..." 
                        onChange={(e) => setTaskInfo(e.target.value)}
                        value={taskInfo}
                    />
                    <img className="task-esc-icon" src={Escape} alt="Press Escape to close" />
                    <img
                        className="task-close-icon"
                        role="button"
                        src={Cross}
                        alt="Close"
                        onClick={() => setIsTaskFocused(false)}
                    />
                </div>
            )}
        </div>
    );
}
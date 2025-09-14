import NoTaskImage from '../assets/no-tasks.svg';

export default function NoTask() {
    return (
        <div className="no-task">
            <img src={NoTaskImage} alt="No tasks found" />
            <p className="no-task-desc">You have no tasks listed.</p>
        </div>
    );
}
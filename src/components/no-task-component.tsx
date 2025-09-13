import NoTaskImage from '../assets/no-tasks.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function NoTask() {
    return (
        <div className="no-task">
            <img src={NoTaskImage} alt="No tasks found" />
            <p className="no-task-desc">You have no tasks listed.</p>
            <button className="no-task-btn"><FontAwesomeIcon icon={faPlus} /> Create Task</button>
        </div>
    );
}
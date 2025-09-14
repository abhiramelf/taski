export default function TaskCard() {
    return (
        <div className="task-card">
            <p>This is a task card.</p>
            <img 
                src="/close-icon.svg" 
                alt="Close Icon" 
                className="task-close-icon"
            />
        </div>
    );
}
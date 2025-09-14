import { useState, useEffect } from "react";
import Navbar from "./components/navbar-component";
import NoTask from "./components/no-task-component";
import AddTask from "./components/add-task-component";

export default function App() {
  const [isTaskEmpty, setIsTaskEmpty] = useState(true);

  useEffect(() => {
    const existingTasks = localStorage.getItem('task');
    if (existingTasks) {
      try {
        const parsed = JSON.parse(existingTasks);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setIsTaskEmpty(false);
        } else {
          setIsTaskEmpty(true);
        }
      } catch (e) {
        console.error('Failed to parse tasks from localStorage', e);
        setIsTaskEmpty(true);
      }
    } else {
      setIsTaskEmpty(true);
    }
  }, []);

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <header>
          <h1>Welcome to <span className="highlight">Taski</span>.</h1>
          <p className="subtitle">Create tasks to achieve more.</p>
        </header>
        <section>
          <AddTask />
        </section>
        <section>
          {isTaskEmpty ? 
            <NoTask /> : 
            <div className="task-list">
              <p>Your tasks will appear here.</p>
            </div>
          }
        </section>
      </main>
    </div>
  )
}
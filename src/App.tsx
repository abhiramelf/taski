import Navbar from "./components/navbar-component";
import NoTask from "./components/no-task-component";

export default function App() {

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
          <NoTask />
        </section>
      </main>
    </div>
  )
}
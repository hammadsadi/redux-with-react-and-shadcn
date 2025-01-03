import { Link, Outlet } from "react-router";

const Layouts = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold">Todo App</h2>
        <nav>
          <ul className="flex items-center gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
}

export default Layouts

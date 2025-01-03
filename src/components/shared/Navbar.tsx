import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
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
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

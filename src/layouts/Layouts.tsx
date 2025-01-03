import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layouts;

import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const Layouts = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layouts;

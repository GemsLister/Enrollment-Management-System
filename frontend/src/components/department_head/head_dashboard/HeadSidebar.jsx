import { Link, useLocation } from "react-router";
import EnroLinkImage from "../../../assets/enrolink-logo.png";

export const HeadSidebar = () => {
  const location = useLocation();

  const tabs = [
    { name: "Dashboard", path: "/head" },
    { name: "Student Records", path: "/head/student-records" },
    { name: "Batch Management", path: "/head/batch-management" },
    { name: "Enrollment Officers", path: "/head/enrollment-officers" },
    { name: "Reports", path: "/head/reports" },
    { name: "Logout", path: "/" },
  ];

  return (
    <aside className="flex flex-col gap-10 h-[100dvh] p-10 bg-warm-white">
      <img src={EnroLinkImage} alt="EnroLink-logo" className="w-[180px]" />
      <nav className="flex flex-col gap-3">
        {tabs.map((tab, index) => {
          return (
            <Link
              key={index}
              to={tab.path}
              on
              className={`p-3 hover:bg-desire hover:text-warm-white rounded-[10px] text-antique-ruby transition duration-200
          ${location.pathname === tab.path ? "bg-desire text-warm-white" : ""}`}
            >
              <p>{tab.name}</p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

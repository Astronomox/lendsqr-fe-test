import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import "../../styles/dashboard.scss";

const DashboardLayout: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="dashboard-container">
        <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <div className="dashboard">
          <div className="dashboard-main">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
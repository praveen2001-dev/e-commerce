import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="nxl-navigation">
      <div className="navbar-wrapper">
        <div className="navbar-content">
          <ul className="nxl-navbar">

            <li className="nxl-item nxl-caption">
              <label>Navigation</label>
            </li>

            {/* Dashboard */}
            <li className={`nxl-item nxl-hasmenu ${openMenu === "dashboard" ? "open" : ""}`}>
              <button className="nxl-link" onClick={() => toggleMenu("dashboard")}>
                <span className="nxl-micon"><i className="feather-airplay"></i></span>
                <span className="nxl-mtext">Dashboards</span>
                <span className="nxl-arrow"><i className="feather-chevron-right"></i></span>
              </button>

              {openMenu === "dashboard" && (
                <ul className="nxl-submenu">
                  <li className="nxl-item">
                    <NavLink to="/" className="nxl-link">CRM</NavLink>
                  </li>
                  <li className="nxl-item">
                    <NavLink to="/analytics" className="nxl-link">Analytics</NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Reports */}
            <li className={`nxl-item nxl-hasmenu ${openMenu === "reports" ? "open" : ""}`}>
              <button className="nxl-link" onClick={() => toggleMenu("reports")}>
                <span className="nxl-micon"><i className="feather-cast"></i></span>
                <span className="nxl-mtext">Reports</span>
                <span className="nxl-arrow"><i className="feather-chevron-right"></i></span>
              </button>

              {openMenu === "reports" && (
                <ul className="nxl-submenu">
                  <li className="nxl-item"><NavLink to="/reports-sales" className="nxl-link">Sales Report</NavLink></li>
                  <li className="nxl-item"><NavLink to="/reports-leads" className="nxl-link">Leads Report</NavLink></li>
                  <li className="nxl-item"><NavLink to="/reports-project" className="nxl-link">Project Report</NavLink></li>
                  <li className="nxl-item"><NavLink to="/reports-timesheets" className="nxl-link">Timesheets</NavLink></li>
                </ul>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

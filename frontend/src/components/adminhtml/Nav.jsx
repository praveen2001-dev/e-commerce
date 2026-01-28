import React from "react";
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <>
      <nav className="nxl-navigation">
        <div className="navbar-wrapper">
          <div className="m-header">
            <a href="./" className="b-brand">
              {/* <img src="assets/images/logo-full.png" alt="" className="logo logo-lg"><img src="assets/images/logo-abbr.png" alt="" className="logo logo-sm"> */}
            </a>
          </div>
          <div className="navbar-content">
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Navigation</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <a href="#" className="nxl-link" onClick={(e) => e.preventDefault()}>
                  <span className="nxl-micon"><i className="feather-airplay"></i></span>
                  <span className="nxl-mtext">Dashboards</span><span className="nxl-arrow"><i className="feather-chevron-right"></i></span>
                </a>
                <ul className="nxl-submenu">
                  <li className="nxl-item"><Link to="./" className="nxl-link">CRM</Link></li>
                  <li className="nxl-item"><Link to="/analytics" className="nxl-link">Analytics</Link></li>
                </ul>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <a href="#" className="nxl-link" onClick={(e) => e.preventDefault()}>
                  <span className="nxl-micon"><i className="feather-cast"></i></span>
                  <span className="nxl-mtext">Reports</span><span className="nxl-arrow"><i className="feather-chevron-right"></i></span>
                </a>
                <ul className="nxl-submenu">
                  <li className="nxl-item"><Link to="/reports-sales" className="nxl-link">Sales Report</Link></li>
                  <li className="nxl-item"><Link to="/reports-leads" className="nxl-link">Leads Report</Link></li>
                  <li className="nxl-item"><Link to="/reports-project" className="nxl-link">Project Report</Link></li>
                  <li className="nxl-item"><Link to="/reports-timesheets" className="nxl-link">Timesheets Report</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav;
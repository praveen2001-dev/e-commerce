import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/adminhtml/Nav";

// import './assets/css/bootstrap.min.css';
// import './assets/vendors/css/vendors.min.css';
// import './assets/vendors/css/dataTables.bs5.min.css';
// import './assets/vendors/css/select2.min.css';
// import './assets/vendors/css/select2-theme.min.css';
// import './assets/css/theme.min.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>CRM Page</h1>} />
        <Route path="/analytics" element={<h1>Analytics Page</h1>} />

        <Route path="/reports-sales" element={<h1>Sales Report</h1>} />
        <Route path="/reports-leads" element={<h1>Leads Report</h1>} />
        <Route path="/reports-project" element={<h1>Project Report</h1>} />
        <Route path="/reports-timesheets" element={<h1>Timesheets Report</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

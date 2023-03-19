import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";
import AddLocationPage from "./pages/AddLocationPage";
import ViewLocationsPage from "./pages/ViewLocationsPage";
import EditLocationPage from "./pages/EditLocationPage";
import ViewBusinessHoursPage from "./pages/ViewBusinessHoursPage";
import EditBusinessHoursPage from "./pages/EditBusinessHoursPage";



function App() {
  return (
    <main>
      <Routes>
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/provider/add-location" element={<AddLocationPage />} />
        <Route path="/provider/view-locations" element={<ViewLocationsPage />} />
        <Route path="/provider/edit-location" element={<EditLocationPage />} />
        <Route path="/provider/view-business-hours" element={<ViewBusinessHoursPage />} />
        <Route path="/provider/edit-business-hours" element={<EditBusinessHoursPage />} />
      </Routes>
    </main>
  );
}

export default App;

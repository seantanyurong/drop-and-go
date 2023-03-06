import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";
import AddLocationPage from "./pages/AddLocationPage";
import ViewLocationsPage from "./pages/ViewLocationsPage";
import EditLocationPage from "./pages/EditLocationPage";



function App() {
  return (
    <main>
      <Routes>
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/provider/add-location" element={<AddLocationPage />} />
        <Route path="/provider/view-locations" element={<ViewLocationsPage />} />
        <Route path="/provider/edit-location" element={<EditLocationPage />} />

      </Routes>
    </main>
  );
}

export default App;

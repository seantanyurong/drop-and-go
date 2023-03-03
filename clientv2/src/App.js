import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import HomePage from "./pages/HomePage";
import UserBookingDetailsPage from "./pages/UserBookingDetailsPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route
          path="/user/bookings/:bookingId"
          element={<UserBookingDetailsPage />}
        />
      </Routes>
    </main>
  );
}

export default App;

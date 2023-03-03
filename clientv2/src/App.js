import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserBookingPage from "./pages/UserBookingPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UserBookingDetailsPage from "./pages/UserBookingDetailsPage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route
          path="/user/bookings/:bookingId"
          element={<UserBookingDetailsPage />}
        />
        <Route
          path="/searchresultpage"
          element={<SearchResultPage />}
        />
      </Routes>
    </main>
  );
}

export default App;

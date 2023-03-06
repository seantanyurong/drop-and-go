import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserLoginPage from "./pages/UserLoginPage";
import ProviderLoginPage from "./pages/ProviderLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import UserBookingPage from "./pages/UserBookingPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UserBookingDetailsPage from "./pages/UserBookingDetailsPage";

import TestPage from "./pages/TestPage";

import SearchResultPage from "./pages/SearchResultPage";
import AdminBookingDetailsPage from "./pages/AdminBookingDetailsPage";
import AdminUserDetailsPage from "./pages/AdminUserDetailsPage";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userLogin" element={<UserLoginPage />} />
        <Route path="/providerLogin" element={<ProviderLoginPage />} />
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route 
        path="/admin/users/:userId" 
        element={<AdminUserDetailsPage/>} />
        <Route 
        path="/admin/bookings/:bookingId" 
        element={<AdminBookingDetailsPage />} />
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

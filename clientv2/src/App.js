import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserLoginPage from "./pages/UserLoginPage";
import ProviderLoginPage from "./pages/ProviderLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import UserSignUpPage from "./pages/UserSignupPage";
import ProviderSignUpPage from "./pages/ProviderSignUpPage";
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
        <Route path="/login/menu" element={<LoginPage />} />
        <Route path="/login/user" element={<UserLoginPage />} />
        <Route path="/login/provider" element={<ProviderLoginPage />} />
        <Route path="/login/admin" element={<AdminLoginPage />} />
        <Route path="/signup/user" element={<UserSignUpPage />} />
        <Route path="/signup/provider" element={<ProviderSignUpPage />} />
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

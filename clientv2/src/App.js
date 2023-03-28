import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserLoginPage from "./pages/UserLoginPage";
import ProviderLoginPage from "./pages/ProviderLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import UserSignUpPage from "./pages/UserSignUpPage";
import ProviderSignUpPage from "./pages/ProviderSignUpPage";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProviderProfilePage from "./pages/ProviderProfilePage";
import AdminProfilePage from "./pages/AdminProfilePage";
import UserBookingPage from "./pages/UserBookingPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UserBookingDetailsPage from "./pages/UserBookingDetailsPage";
import SearchPage from "./pages/SearchPage";
import ListingDetailsPage from "./pages/ListingDetailsPage";

import TestPage from "./pages/TestPage";

import SearchResultPage from "./pages/SearchResultPage";
import AdminBookingDetailsPage from "./pages/AdminBookingDetailsPage";
import AdminUserDetailsPage from "./pages/AdminUserDetailsPage";
import AdminProviderDetailsPage from "./pages/AdminProviderDetailsPage";
import AdminLocationDetailsPage from "./pages/AdminLocationDetailsPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/listing/:listingId" element={<ListingDetailsPage />} />
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/login/menu" element={<LoginPage />} />
        <Route path="/login/user" element={<UserLoginPage />} />
        <Route path="/login/provider" element={<ProviderLoginPage />} />
        <Route path="/login/admin" element={<AdminLoginPage />} />
        <Route path="/signup/user" element={<UserSignUpPage />} />
        <Route path="/signup/provider" element={<ProviderSignUpPage />} />
        <Route path="/signup/admin" element={<AdminSignUpPage />} />
        <Route path="/user/profile/:id" element={<UserProfilePage />} />
        <Route path="/provider/profile/:id" element={<ProviderProfilePage />} />
        <Route path="/admin/profile/:id" element={<AdminProfilePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/user/:userId" element={<AdminUserDetailsPage />} />
        <Route
          path="/admin/provider/:providerId"
          element={<AdminProviderDetailsPage />}
        />
        <Route
          path="/admin/location/:locationId"
          element={<AdminLocationDetailsPage />}
        />
        <Route
          path="/admin/booking/:bookingId"
          element={<AdminBookingDetailsPage />}
        />
        <Route
          path="/user/bookings/:bookingId"
          element={<UserBookingDetailsPage />}
        />
        <Route path="/searchresultpage" element={<SearchResultPage />} />
      </Routes>
    </main>
  );
}

export default App;

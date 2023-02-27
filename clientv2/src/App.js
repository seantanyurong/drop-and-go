import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";
import UserBookingDetailsPage from "./pages/UserBookingDetailsPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route
          path="/user/bookings/:bookingId"
          element={<UserBookingDetailsPage />}
        />
      </Routes>
    </main>
  );
}

export default App;

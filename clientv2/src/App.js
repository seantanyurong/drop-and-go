import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";
import AddLocationPage from "./pages/AddLocationPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/user/add-location" element={<AddLocationPage />} />
      </Routes>
    </main>
  );
}

export default App;

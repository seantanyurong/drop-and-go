import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserBookingPage from "./pages/UserBookingPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/user/bookings" element={<UserBookingPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;

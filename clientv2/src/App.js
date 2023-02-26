import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/bookings" element={<UserBookingPage />} />
      </Routes>
    </main>
  );
}

export default App;

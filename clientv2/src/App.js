import { Routes, Route } from "react-router-dom";
import UserBookingPage from "./pages/UserBookingPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/user/bookings" element={<UserBookingPage />} />
      </Routes>
    </main>
  );
}

export default App;

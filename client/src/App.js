import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/layout/General/navbar";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";

// import RecordList from "./components/layout/HomePage/recordList";
// import Edit from "./components/layout/EditPage/edit";
// import Create from "./components/layout/CreatePage/create";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;

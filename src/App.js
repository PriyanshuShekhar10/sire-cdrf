import React from "react";
import "./App.css";
// import ProjectTable from "./ProjectTable";
// import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfessorTable from "./Pages/ProfessorsTable/ProfessorTable";
import ScholarTable from "./Pages/ScholarTable/ScholarTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ProfessorTable />} />
        <Route path={"/scholar"} element={<ScholarTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

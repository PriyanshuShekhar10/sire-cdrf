import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfessorTable from "./Pages/ProfessorsTable/ProfessorTable";
import ScholarTable from "./Pages/ScholarTable/ScholarTable";
import PhdDrive from "./Pages/PhdDrive/PhdDrive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ProfessorTable />} />
        <Route path={"/scholar"} element={<ScholarTable />} />
        <Route path={"/phddrive"} element={<PhdDrive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

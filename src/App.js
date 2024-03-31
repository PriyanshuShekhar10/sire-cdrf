import React from "react";
import "./App.css";
import ProjectTable from "./ProjectTable"; // Ensure this import path is correct
import Header from "./Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfessorTable from "./Pages/ProfessorsTable/ProfessorTable";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/cdrf'} element={<ProfessorTable />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

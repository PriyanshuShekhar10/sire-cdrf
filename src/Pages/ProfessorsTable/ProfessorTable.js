import Header from "../../Header";
import ProjectTable from "./ProjectTable";
import React from "react";

const ProfessorTable = () => {
  return (
    <div className="App">
      <Header title="Projects ongoing under CDRF (1st Round)" />
      <main>
        <ProjectTable />
      </main>
    </div>
  );
};

export default ProfessorTable;

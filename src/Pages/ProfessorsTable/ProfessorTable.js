import Header from "../../Header";
import ProjectTable from "../../ProjectTable";
import React from "react";

const ProfessorTable = () => {
    return (
        <div className="App">
            <Header title="." />
            {/* <header className="App-header">
        <h1>
          Projects ongoing under CDRF (1 <sup>st</sup> Round)
        </h1>
      </header> */}
            <main>
                <ProjectTable />
            </main>
        </div>
    )
}

export default ProfessorTable

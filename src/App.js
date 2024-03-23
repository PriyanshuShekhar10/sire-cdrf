import React from "react";
import "./App.css";
import ProjectTable from "./ProjectTable"; // Ensure this import path is correct
import Header from "./Header";

function App() {
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
  );
}

export default App;

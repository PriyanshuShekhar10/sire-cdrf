import Header from "../../Header";
// import ProjectTable from "./ProjectTable";
import data from "./combined_cdrf_details_new.json";
import React from "react";
import ScholarDataTable from "./ScholarDataTable";

const ScholarTable = () => {
  return (
    <div className="App">
      <Header title="PhD scholars under the CDRF projects" />
      <main>
        <ScholarDataTable data={data} />
      </main>
    </div>
  );
};

export default ScholarTable;

//ScholarTable.js

import React from "react";
import ScholarDataTable from "./ScholarDataTable";
import cdrfdata from "./data/modified_corrected_combined_cdrf_details.json";
import Header from "../../Header";

const ScholarTable = () => {
  return (
    <div>
      <Header
        title="PhD scholars under the CDRF projects
"
      />
      <ScholarDataTable data={cdrfdata} />;
    </div>
  );
};

export default ScholarTable;

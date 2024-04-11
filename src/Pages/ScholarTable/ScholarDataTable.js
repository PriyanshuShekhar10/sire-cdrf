import "./SimpleTable.module.css";
import React from "react";

const SimpleTable = ({ data }) => {
  let alternate = false; // Track alternating background color

  const renderRows = (item, index) => {
    const backgroundColor = alternate ? "#F5F4F4" : "#ffffff";
    const supervisors = Object.values(item.Supervisor);
    const rows = [];

    // Push the main row, which includes the name and possibly the first supervisor
    rows.push(
      <tr key={`person-${index}`} style={{ backgroundColor }}>
        <td>{item.Name}</td>
        <td>{supervisors[0] || ""}</td>{" "}
        {/* Display the first supervisor if available */}
        <td>{item.Project_Title}</td>
      </tr>
    );

    // If there are additional supervisors, render them in separate rows
    if (supervisors.length > 1) {
      supervisors.slice(1).forEach((supervisor, subIndex) => {
        rows.push(
          <tr
            key={`supervisor-${index}-${subIndex}`}
            style={{ backgroundColor }}
          >
            <td></td> {/* Empty cell for alignment */}
            <td>{supervisor}</td>
            <td></td> {/* Empty cell for alignment */}
          </tr>
        );
      });
    }

    // Toggle the background color for the next project
    if (item.Name) alternate = !alternate;

    return rows;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Supervisor(s)</th>
          <th>Project Title</th>
        </tr>
      </thead>
      <tbody>{data.map(renderRows)}</tbody>
    </table>
  );
};

export default SimpleTable;

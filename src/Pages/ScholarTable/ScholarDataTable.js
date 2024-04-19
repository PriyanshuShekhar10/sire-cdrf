import React from "react";

const SimpleTable = ({ data }) => {
  let alternate = false; // Track alternating background color

  // Inline styles
  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "20px 0",
    },
    cell: {
      border: "1px solid #000000",
      padding: "1rem",
      textAlign: "center",
    },
    headerCell: {
      backgroundColor: "#ffc124",
      color: "black",
    },
    row: {},
    indentCell: {
      paddingLeft: "20px",
    },
  };

  const renderRows = (item, index) => {
    const backgroundColor = alternate ? "#F5F4F4" : "#ffffff";
    const supervisors = Object.values(item.Supervisor);
    const rows = [];

    rows.push(
      <tr key={`person-${index}`} style={{ ...styles.row, backgroundColor }}>
        <td style={styles.cell}>{item.Name}</td>
        <td style={styles.cell}>{supervisors[0] || ""}</td>
        <td style={styles.cell}>{item.Project_Title}</td>
      </tr>
    );

    if (supervisors.length > 1) {
      supervisors.slice(1).forEach((supervisor, subIndex) => {
        rows.push(
          <tr
            key={`supervisor-${index}-${subIndex}`}
            style={{ ...styles.row, backgroundColor }}
          >
            <td style={{ ...styles.cell, ...styles.indentCell }}></td>
            <td style={styles.cell}>{supervisor}</td>
            <td style={styles.cell}></td>
          </tr>
        );
      });
    }

    if (item.Name) alternate = !alternate;

    return rows;
  };

  return (
    <div>
      <style>{`
        @media (max-width: 600px) {
          .datatable {
            margin: 0 !important; /* Remove margin on mobile */
          }
          table {
            margin: 0 !important; /* Remove table margin on mobile */
          }
        }
      `}</style>
      <div className="datatable" style={{ margin: "5rem" }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Name</th>
              <th style={styles.headerCell}>Supervisor(s)</th>
              <th style={styles.headerCell}>Project Title</th>
            </tr>
          </thead>
          <tbody>{data.map(renderRows)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;

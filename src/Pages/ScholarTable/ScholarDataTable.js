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
      border: "1px solid #000000",
    },
    row: {},
  };

  const renderRows = (item, index) => {
    const backgroundColor = alternate ? "#F5F4F4" : "#ffffff";
    // Combine all supervisors into one JSX element with <br> tags between names
    const supervisors = Object.values(item.Supervisor).map(
      (supervisor, idx, array) => (
        <React.Fragment key={idx}>
          {supervisor}
          {idx < array.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      )
    );

    const row = (
      <tr key={`person-${index}`} style={{ ...styles.row, backgroundColor }}>
        <td style={styles.cell}>{item.Name}</td>
        <td style={styles.cell}>{supervisors}</td>
        <td style={styles.cell}>{item.Project_Title}</td>
      </tr>
    );

    alternate = !alternate; // Toggle background color for the next row

    return row;
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
              <th style={styles.headerCell}>Faculty Name</th>
              <th style={styles.headerCell}>Email(s)</th>
              <th style={styles.headerCell}>Research Project</th>
            </tr>
          </thead>
          <tbody>{data.map(renderRows)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;

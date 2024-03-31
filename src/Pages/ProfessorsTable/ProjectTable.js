import React from "react";
import projectData from "../../Projects_Data.json";
import "./style.css";
import updatedProfData from "../../UpdatedProfData.json";

const ProjectTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Application No.</th>
            <th>Project Title</th>
            <th className="head">Investigator Name</th>
            <th className="head">Department</th>
            <th className="head">Campus</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((project, index) => (
            <tr key={index}>
              <td>{project.Sno}</td>
              <td>{project.Application_No}</td>
              <td>{project.Project_Title}</td>
              <td>
                {Object.entries(project.Investigators).map(([name], i, arr) => (
                  <div key={i} className="popoverContent" tabIndex="0">
                    <p>{name}</p>
                    {updatedProfData[name] && ( // Check if there is data for this investigator in the updatedProfData
                      <div className="popover">
                        <p>
                          <span className="ptitle">Department: </span>{" "}
                          {updatedProfData[name].department}
                        </p>
                        <p>
                          <span className="ptitle">Campus: </span>{" "}
                          {updatedProfData[name].campus}
                        </p>
                        <p>
                          <span className="ptitle">Collaborators: </span>
                          {updatedProfData[name].collaborations.join(", ")}
                        </p>
                        <a
                          href={updatedProfData[name].url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Profile
                        </a>
                      </div>
                    )}
                    {i !== arr.length - 1 && <hr className="separator" />}
                  </div>
                ))}
              </td>
              <td>
                {Object.entries(project.Investigators).map(
                  ([, details], i, arr) => (
                    <React.Fragment key={i}>
                      <p>{details.Department}</p>
                      {i !== arr.length - 1 && <hr className="separator" />}
                    </React.Fragment>
                  )
                )}
              </td>
              <td>
                {Object.entries(project.Investigators).map(
                  ([, details], i, arr) => (
                    <React.Fragment key={i}>
                      <p>{details.Campus}</p>
                      {i !== arr.length - 1 && <hr className="separator" />}
                    </React.Fragment>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProjectTable;

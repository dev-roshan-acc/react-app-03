import React, { useEffect, useState } from "react";
import axios from "axios";
const TableComp = () => {
  const [data, setData] = useState([]);
  // shidrokh.goudarzi@uwl.ac.uk
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      setData(response.data.users);
    });
  }, []);
  return (
    <table className="table table-response">
      <thead>
        <tr>
          <th>S.No.</th>
          {/* <th>Image</th> */}
          <th>Fullname</th>
          <th>Email</th>
          <th>Height</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>

            <td>
              {" "}
              <b>{item.firstName + " " + item.lastName}</b>
            </td>
            <td>{item.email}</td>
            <td>{item.height + "cm"}</td>
            <td>
              <button className="btn btn-sm btn-primary">
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-sm btn-danger mx-1">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComp;

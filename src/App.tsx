import axios from "axios";
import React, { useEffect, useState } from "react";
import myData from "./assets/form.json";

const App = () => {
  const items = myData;

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const [data, setData] = useState([]);
  // shidrokh.goudarzi@uwl.ac.uk
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      console.log(items);
      setData(response.data.users);
    });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>List of Products</h2>
          <hr />
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
                  {/* <td>
                    <img
                      src={item.image}
                      className="rounded mx-auto d-block"
                      alt=""
                      style={React}
                      // style=
                    />
                  </td> */}
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
        </div>
        <div className="col-6">
          <h2>Profile Description</h2>
          <hr />
          {items.map((user) => (
            <div className="mb-3" key={user.name}>
              <label className="form-label" htmlFor={user.name}>
                {user.title}
              </label>

              {user.type == "radio" ? (
                user.options?.map((opt) => (
                  <div className="form-check" key={opt.name}>
                    <label className="form-check-label" htmlFor={opt.name}>
                      {opt.title}
                    </label>
                    <input
                      className="form-check-input"
                      onChange={handleChange}
                      type={user.type}
                      name={user.name}
                      id={user.name}
                      // checked={opt.isDefault}
                    />
                  </div>
                ))
              ) : user.type == "textarea" ? (
                <textarea
                  name={user.name}
                  className="form-control"
                  rows={user.rows ? user.rows : 2}
                ></textarea>
              ) : user.type == "options" ? (
                <select name={user.name} className="form-control select2">
                  {user.options?.map((opt) => (
                    <option value={opt.code} key={opt.code}>
                      {opt.title}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="form-control"
                  onChange={handleChange}
                  type={user.type}
                  name={user.name}
                  id={user.name}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

// function App() {
//   const data = [
//     { id: 1, name: "John Doe" },
//     { id: 2, name: "Victor Wayne" },
//     { id: 3, name: "Jane Doe" },
//   ];

//   return (
//     <div className="users">
//       {data.map((user) => (
//         <div className="user" key={user.id}>
//           {user.name}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import myData from "../assets/form.json";
const FormComp = () => {
  const items = myData;

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
    </>
  );
};

export default FormComp;

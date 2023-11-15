import React, { useEffect, useState } from "react";

import TableComp from "./components/TableComp";
import FormComp from "./components/FormComp";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>List of Products</h2>
          <hr />
          <TableComp></TableComp>
        </div>
        <div className="col-6">
          <h2>Profile Description</h2>
          <hr />
          <FormComp />
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

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

import React, { FormEvent, useState } from "react";

function TodoForm() {
  const [data, setData] = useState("");

  //   const changeHandler = (e: ) => {
  //     e.target.name = e.target.value;
  //   };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <input
          type="text"
          name="todoform"
          value={data}
          className="form-control"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default TodoForm;

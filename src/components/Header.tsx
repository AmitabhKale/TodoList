import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-light p-2 my-2 d-flex justify-content-between">
      <h3 className="text-danger">{title}</h3>
      <div className="me-end">
        {/* <button className="btn btn-dark">Mode</button> */}
      </div>
    </div>
  );
};

export default Header;

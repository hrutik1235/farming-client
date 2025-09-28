import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
      {children}
    </div>
  );
};

export default Wrapper;

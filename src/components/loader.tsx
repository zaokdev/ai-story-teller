import React from "react";

const LoaderAsset = () => {
  return (
    <>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className="mt-12">Generando historia...</span>
    </>
  );
};

export default LoaderAsset;

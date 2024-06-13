import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loading__spinner">
        <div className="dash1"></div>
        <div className="dash2"></div>
      </div>
      <div>
        <span className="symbol1">З</span>
        <span className="symbol2">а</span>
        <span className="symbol3">г</span>
        <span className="symbol4">р</span>
        <span className="symbol5">у</span>
        <span className="symbol6">з</span>
        <span className="symbol7">к</span>
        <span className="symbol8">а</span>
        <span className="symbol9">.</span>
        <span className="symbol10">.</span>
        <span className="symbol11">.</span>
      </div>
    </div>
  );
};

export default Loader;

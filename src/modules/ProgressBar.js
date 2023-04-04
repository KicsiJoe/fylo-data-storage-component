import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="bar-box">
    <div className="line-background">
      <div className="line" style={{width: `${props.percent}%`}}>
        <div className="circle" ></div>
      </div>
    </div>
    <div className="gb-left"><span>185 </span><span>GB Left</span></div>
    <div className="gb-left-bottom"></div>
    </div> 
  );
};

export default ProgressBar;

import React from "react";

const Currency = () => {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <iframe
        src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,2,7,6,1062237,69,68"
        width="100%"
        height="400px"
        frameBorder="0"
        allowTransparency="true"
        marginWidth="0"
        marginHeight="0"
        title="Live Currency Cross Rates"
      ></iframe>
    </div>
  );
};

export default Currency;

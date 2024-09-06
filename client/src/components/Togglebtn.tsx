
import React, { useState } from "react";


const ToggleButton: React.FC = () => {
    // Use togglebtn as the state for toggling the mode
    const [togglebtn, setTogglebtn] = useState<boolean>(false);
  
    return (
      <div className="switch-checkbox">
        <label className="switch">
          <input
            type="checkbox"
            checked={togglebtn}  // Use the togglebtn value here
            onChange={() => setTogglebtn(!togglebtn)}  // Update the togglebtn state
          />
          <span className="slider round"></span>
        </label>
        <div>{togglebtn ? "Dark Mode is ON" : "Dark Mode is OFF"}</div> {/* Use togglebtn to show current mode */}
      </div>
    );
  };
  
  export default ToggleButton;

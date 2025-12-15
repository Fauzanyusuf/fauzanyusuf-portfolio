import React from "react";
import useWindowStore from "@store/window.js";

function WindowControls({target}) {
  const {closeWindow} = useWindowStore();
  
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}/>
      <div className="disable"/>
      <div className="disable"/>
    </div>
  );
}

export default WindowControls;
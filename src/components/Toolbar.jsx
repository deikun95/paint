import React from "react";
import '../styles/toolbar.scss'

const leftButtons = ['brush', 'rect', 'circle', 'eraser', 'line'];
const rightButtons = ['undo', 'redo', 'save']

const Toolbar = () => {
  return (
    <div className="toolbar">
      {
        leftButtons.map(btn => (
          <button className={'toolbar__btn ' + btn}></button>
        ))
      }
      <input type="color" className="toolbar__btn palette"></input>
      {
        rightButtons.map(btn => (
          <button className={'toolbar__btn ' + btn}></button>
        ))
      }
    </div>
  )
};

export default Toolbar;

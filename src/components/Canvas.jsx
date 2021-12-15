import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasModule from "../store/canvasModule";
import '../styles/canvas.scss';

const Canvas = observer(() => {

  const canvasRef = useRef();

  useEffect(() => {
    canvasModule.setCanvas();
  }, [])

  return (
    <div className="canvas">
        <canvas width={600} height={400} ref={canvasRef}></canvas>
    </div>
  )
});

export default Canvas;

import { useState, useRef, useEffect } from 'react';

function DrawingArea() {
  const canvasRef = useRef(null);
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    context.lineJoin = 'round';
    context.lineCap = 'round';
  }, [brushColor, brushSize]);

  const handleColorChange = (e) => {
    setBrushColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setBrushSize(parseInt(e.target.value));
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { offsetX, offsetY } = e.nativeEvent;

    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { offsetX, offsetY } = e.nativeEvent;

    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const handleMouseUp = (e) => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col items-center">
      <canvas
        className="border border-gray-400"
        width="800"
        height="600"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div className="flex items-center mt-4">
        <label htmlFor="color-picker" className="mr-2">
          Brush color:
        </label>
        <input
          type="color"
          id="color-picker"
          value={brushColor}
          onChange={handleColorChange}
        />
        <label htmlFor="size-slider" className="ml-4 mr-2">
          Brush size:
        </label>
        <input
          type="range"
          id="size-slider"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleSizeChange}
        />
        <span className="ml-2">{brushSize}px</span>
      </div>
    </div>
  );
}

export default DrawingArea;

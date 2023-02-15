import React,{useState} from 'react';
import './App.css';

function App() {
  const[Hor,setHor] = useState(10)
  const[Veri,setVeri] = useState(10)
  const[Blur,setBlur] = useState(10)
  const[color,setColor] = useState("Black")
  const[CheckOn,setCheckOn] = useState(false)
  return (
    <div className="App">
    <div className="controls">
      <label>Horizontal length</label>
        <input type="range" min="-200" max="200" value={Hor} onChange={(e)=>setHor(e.target.value)} />
      <label>Vertical length</label>
        <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
      <label>Blur</label>
        <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
        <label>Color</label>
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
        <div className="switch">
        <label>
          Outline
          <input type="checkbox" checked={CheckOn} onChange={()=>setCheckOn(!CheckOn)}/>
          <span className="lever"></span>
          inset
        </label>
  </div>

    </div>
  <div className="output">
    <div className="box" style={{boxShadow:`${CheckOn?"inset":""} ${Hor}px ${Veri}px ${Blur}px ${color}` }}>
      <p>Box-Shadow:{Hor}px {Veri}px {Blur}px {color}</p>
    </div>
    </div>
    </div>
  );
}

export default App;

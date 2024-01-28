import React, { useEffect, useState } from 'react';
import cloneDeep from "lodash.clonedeep";
import './App.css';

function App() {
  const [data,setData] = useState([
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ])
  const initialize =  () => { 
    
    let newGrid = cloneDeep(data);
    console.log(newGrid);

    addNumber(newGrid);
    console.table(newGrid);
    addNumber(newGrid);
    console.table(newGrid);
    setData(newGrid);
  }
  useEffect (()=> {
    initialize();
  },[])
  return (
    <div
        style={{
        background:"#AD9D8F",
        width:"max-content",
        margin:"auto",
        padding:5,  
        borderRadius:5,
        marginTop:10,
      }}
    >
  {data.map ((row,oneIndex) => {
    return (
      <div style={{display:"flex"}} key={oneIndex}>
              {row.map((digit,index) => (
                <Block num={digit} key={index} />
        ))}
      </div>
    );
  })}
  </div>
)
}
const Block= ({num}) => {
  const {blockStyle} = style;
  return (
    <div
    style={{
      ...blockStyle,
      color:num === 2 || num=== 4 
    }}
    >
    {num}
    </div>
  );
};
  const style = {
    blockStyle: {
      height:80,
      width:80,
      background:"lightgray",
      margin:3,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:45,
      fontWeight:"800",
      color:"white",
    },
  };
  const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }
      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if(newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
    }
  }
export default App;

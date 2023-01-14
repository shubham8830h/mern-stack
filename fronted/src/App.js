import  { useState,useEffect } from "react";
import "./App.css";
import axios from "axios"

function App() {
  const [foodName, setfoodName] = useState("");
  const [daySince, setdaySince] = useState(0);
  const[foodList,setFoodList]=useState([])
  
useEffect(()=>{
  axios.get("http://localhost:3001/read").then((response)=>{
     setFoodList(response.data)
  })
},[])

  const addItem = () => {
   axios.post("http://localhost:3001/insrt", {
     foodName: foodName,
     daySince: daySince,
   });
  };

  return (
    <div className="App">
      <h1>CURD OPERSATION WITH MERN</h1>
      <lable>food name</lable>
      <input
        type="text"
        onChange={(event) => {
          setfoodName(event.target.value);
        }}
      />
      <lable>Day sence it</lable>
      <input
        type="number"
        onChange={(event) => {
          setdaySince(event.target.value);
        }}
      />
      <button onClick={addItem}>add list</button>
      <h1> Food List</h1>
      {foodList.map((val ,key)=>{
          return(
            <div key={key}> 
              <h1>{val.foodName}</h1>
              <h1>{val.daySince}</h1>
            </div>
          )
      })}
    </div>
  );
}

export default App;

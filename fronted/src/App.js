import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [foodName, setfoodName] = useState("");
  const [daySince, setdaySince] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const[newFoodName,setNewFoodName] =useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setFoodList(response.data);
    });
  });

  const addItem = () => {
    axios.post("http://localhost:3001/insrt", {
      foodName: foodName,
      daySince: daySince,
    });
  };

  const updateItem=(id)=>{
    axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
    });
  }
  const deleteData=(id)=>{
     axios.delete(`http://localhost:3001/delete/${id}`);
  }

  return (
    <div className="App">
      <h1>CURD OPERATIONS WITH MERN</h1>
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
      {foodList.map((val, key) => {
        return (
          <div key={key} className="food">
            <h1>{val.foodName}</h1>
            <h1>{val.daySince}</h1>
            <input
              type="text"
              placeholder="new food name.."
              onChange={(event) => {
                setNewFoodName(event.target.value);
              }}
            ></input>
            <button onClick={() => updateItem(val._id)}>update</button>
            <button onClick={() => deleteData(val._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

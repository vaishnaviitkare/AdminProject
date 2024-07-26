import React,{useState} from "react";
import Admin from "./components/Admin";
import List from "./components/List";
import Totaldata from "./UI/Totaldata";
function App() {
  const[inputDetails,setInputDetails]=useState([]);
  const addHandler=(pId,price,name)=>{
     setInputDetails((prevState)=>{
        return [...prevState,{Id:pId,price:price,name:name}];
     })
  }
  const deleteHandler=(id)=>{
    localStorage.removeItem(id);
   const arr=inputDetails.filter((value)=>{
       return value.Id != id;
   })
    setInputDetails(arr);

  }
  return (
    <div>
      <Admin onAddDetails={addHandler}/>
      <h1>Products</h1>
      <List inputData={inputDetails} onDelete={deleteHandler}/>
      <Totaldata inputData={inputDetails}/>
    </div>
  );
}

export default App;

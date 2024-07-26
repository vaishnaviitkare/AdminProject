import React,{useState} from "react";
import InputData from "../UI/InputData";
import "./Admin.css";
const Admin=(props)=>{
    const[productId,setProductId]=useState("");
    const[sellingPrice,setSellingPrice]=useState("");
    const[productName,setProductName]=useState("");
    const idChangeHandler=(event)=>{
       setProductId(event.target.value);
    }
   const priceChangeHandler=(event)=>{
     setSellingPrice(event.target.value);
   }
  const nameChangeHandler=(event)=>{
     setProductName(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    props.onAddDetails(productId,sellingPrice,productName);
    const obj={expenseamount:sellingPrice,description:productName,orderedId:productId};
    const obj1=JSON.stringify(obj);
    localStorage.setItem(productId,obj1);
    setProductId("");
    setSellingPrice("");
    setProductName("");
    
  }
return(
    <React.Fragment>
         <form onSubmit={submitHandler} className="form">
            <div>
                <InputData
                 id="Id"
                 type="number"
                 label="Product ID:"
                 value={productId}
                 onChange={idChangeHandler}
                />{" "}
                <InputData
                 id="price"
                 type="number"
                 label="Selling Price:"
                 value={sellingPrice}
                 onChange={priceChangeHandler}
                />{" "}
                <InputData
                 id="name"
                 type="text"
                 label="Product Name:"
                 value={productName}
                 onChange={nameChangeHandler}
                />{" "}
                <button type="submit" >Add Product</button>
            </div>
          </form>
          
    </React.Fragment>
)
}
export default Admin;
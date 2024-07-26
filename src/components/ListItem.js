import React from "react";
import "./ListItem.css";
const ListItem=(props)=>{
const deleteHandler=()=>{
    props.submitHandler(props.id);
    console.log(props.id);
}
return(
      <div>
        {props.price}
        {"-"}
        {props.name}
        <button  type="button" onClick={deleteHandler}>Delete Product</button>
      </div>
)
}
export default ListItem;
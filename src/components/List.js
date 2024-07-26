import React from "react";
import "./List";
import ListItem from "./ListItem";
const List=(props)=>{
    const deleteHandler=(id)=>{
       props.onDelete(id);
    }
    return(
<ul>
    {
        props.inputData.map((value)=>{
           return (
            <li key={value.Id}>
           <ListItem
              submitHandler={deleteHandler}
              id={value.Id}
              price={value.price}
              name={value.name}
           />
          </li>
           );
        })
    }
</ul>
    );
}
export default List;
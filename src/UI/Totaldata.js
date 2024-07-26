import React, { useEffect, useState } from "react";
import "./Totaldata.css";
const Totaldata=(props)=>{
    const[total,setTotal]=useState(0);
    useEffect(()=>{
        let totalvalue=0;
        for(let ele of props.inputData){
             totalvalue=totalvalue+(+ele.price);
       }
       setTotal(totalvalue);
    },[props.inputData])
    return(
        <div>
          <h2>Total Value worth of Products: Rs {total} </h2> 
        </div>

    );
}
export default Totaldata;